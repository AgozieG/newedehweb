import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Send, FileText, MessageSquare, Paperclip, AlertCircle } from 'lucide-react'

const Submit = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    attachment: null
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB')
      return
    }
    setFormData(prev => ({
      ...prev,
      attachment: file
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('message', formData.message)
      if (formData.attachment) {
        formDataToSend.append('attachment', formData.attachment)
      }

      const response = await fetch('http://localhost:5001/api/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          subject: '',
          message: '',
          attachment: null
        })
      } else {
        setError(data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      <section className="relative py-20  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <Upload className="w-16 h-16 mx-auto mb-6 text-amber-400 -mt-10" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6"><span className="text-amber-400">Upload and Send File</span></h1>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto">Submit documents, research papers, or any files for review. Messages will be sent to michael.edeh@ebsu.edu.ng</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white -mt-30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">Thank you for your submission. We will get back to you soon.</p>
                <button onClick={() => setSubmitted(false)} className="px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center"><FileText className="w-4 h-4 mr-2" />Full Name *</span>
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Your name" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center"><FileText className="w-4 h-4 mr-2" />Subject *</span>
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Enter the subject of your message" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center"><MessageSquare className="w-4 h-4 mr-2" />Message *</span>
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none" placeholder="Enter your message here..." />
                </div>

                <div>
                  <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center"><Paperclip className="w-4 h-4 mr-2" />Attachment (Optional - Max 5MB)</span>
                  </label>
                  <div className="relative">
                    <input type="file" id="attachment" name="attachment" onChange={handleFileChange} className="hidden" />
                    <label htmlFor="attachment" className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-all">
                      <div className="text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <span className="text-sm text-gray-600">{formData.attachment ? formData.attachment.name : 'Click to upload a file'}</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center px-8 py-4 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />Sending...</>) : (<><Send className="w-5 h-5 mr-2" />Send Email</>)}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Submit
