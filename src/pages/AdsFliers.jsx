import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileImage, X, ChevronLeft, ChevronRight } from 'lucide-react'

const AdsFliers = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const fliers = [
    { src: './sample-flier-1.jpg', title: '', date: '' },
    { src: './sample-flier-2.jpg', title: '', date: '' },
    { src: './sample-flier-3.jpg', title: '', date: '' },
    { src: './sample-flier-4.jpg', title: '', date: '' },
    { src: './sample-flier-5.jpg', title: '', date: '' },
    { src: './sample-flier-6.jpg', title: '', date: '' },
  ]

  return (
    <div className="pt-20">
      {/* <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <FileImage className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6"><span className="text-amber-400">Fliers</span></h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Event announcements, workshop invitations, and promotional materials</p>
          </motion.div>
        </div>
      </section> */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fliers.map((flier, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-gray-100" onClick={() => setSelectedImage(index)}>
                <img src={flier.src} alt={flier.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = './white.jpg' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="text-amber-400 text-xs font-semibold">{flier.date}</span>
                    <h3 className="text-white font-semibold">{flier.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => setSelectedImage(null)}><X className="w-6 h-6" /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev - 1 + fliers.length) % fliers.length) }}><ChevronLeft className="w-6 h-6" /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev + 1) % fliers.length) }}><ChevronRight className="w-6 h-6" /></button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="max-w-3xl max-h-[80vh] px-16" onClick={(e) => e.stopPropagation()}>
              <img src={fliers[selectedImage].src} alt={fliers[selectedImage].title} className="max-w-full max-h-[70vh] object-contain rounded-lg" onError={(e) => { e.target.src = './q1.jpg' }} />
              <div className="text-center mt-4">
                <span className="text-amber-400 text-sm">{fliers[selectedImage].date}</span>
                <h3 className="text-white text-xl font-semibold mt-1">{fliers[selectedImage].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdsFliers
