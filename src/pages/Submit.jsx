import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Send, FileText, Mail, MessageSquare, Paperclip, AlertCircle } from 'lucide-react'

const Submit = () => {
  // SETUP INSTRUCTIONS:
  // 1. Go to https://formspree.io
  // 2. Sign up for a FREE account (no payment required for attachments!)
  // 3. Create a new form and select "Email" as the destination
  // 4. Copy your FORM_ID from the endpoint: https://formspree.io/f/{FORM_ID}
  // 5. Paste it below in the FORMSPREE_FORM_ID constant
  
  const FORMSPREE_FORM_ID = 'mbdpdqbr' // Replace with your Formspree Form ID

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', attachment: null })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB')
      return
    }
    setFormData((prev) => ({ ...prev, attachment: file }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields')
      return
    }

    if (FORMSPREE_FORM_ID === 'your_form_id_here') {
      setError('Please configure your Formspree Form ID first. See instructions below.')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Create FormData object for multipart form submission (supports file uploads)
      const form = new FormData()
      form.append('name', formData.name)
      form.append('email', formData.email)
      form.append('subject', formData.subject)
      form.append('message', formData.message)
      
      // Add attachment if present
      if (formData.attachment) {
        form.append('attachment', formData.attachment)
      }

      // Send to Formspree
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '', attachment: null })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        throw new Error('Failed to send form')
      }
    } catch (err) {
      setIsSubmitting(false)
      setError(err.message || 'Failed to send email. Please try again or contact support.')
      console.error('Form submission error:', err)
    }
  }

  return (
    <div className="pt-20">
      {/* <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <Upload className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Upload & <span className="text-amber-400">Send File</span></h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Submit documents, research papers, or any files for review. Messages will be sent to michael.edeh@ebsu.edu.ng</p>
          </motion.div>
        </div>
      </section> */}

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">Thank you for your submission. We will get back to you soon at {formData.email}.</p>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center"><FileText className="w-4 h-4 mr-2" />Full Name *</span>
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Your name" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center"><Mail className="w-4 h-4 mr-2" />Email Address *</span>
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="your.email@example.com" />
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
                  {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />Sending...</>) : (<><Mail className="w-5 h-5 mr-2" />Send Email</>)}
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
