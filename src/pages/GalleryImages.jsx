import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

const GalleryImages = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: '/public/n2.jpg', category: 'Event' },
    { src: '/public/m7.jpg', category: 'Me' },
    { src: '/public/q4.jpg', category: 'Event' },
    { src: '/public/e3.jpg', category: 'Academic' },
    { src: './public/z1.jpeg', alt: 'Professional Meeting' },
    { src: './public/z2.jpeg', alt: 'Professional Meeting' },
    { src: './public/z3.jpeg', alt: 'Professional Meeting' },
    { src: './public/z4.jpeg', alt: 'Professional Meeting' },
    { src: './public/z5.jpeg', alt: 'Professional Meeting' },
    { src: './public/z6.jpeg', alt: 'Professional Meeting' },
    { src: './public/z7.jpeg', alt: 'Professional Meeting' },
    { src: './public/z8.jpeg', alt: 'Professional Meeting' },
    { src: './public/z9.jpeg', alt: 'Professional Meeting' },
    { src: './public/z10.jpeg', alt: 'Professional Meeting' },
    { src: './public/z11.jpeg', alt: 'Professional Meeting' },
    { src: '/public/m9.jpg', category: 'Event' },
    { src: '/public/m3.jpg', category: 'Event' },
    { src: '/public/s2.jpg', category: 'Me' },
    { src: '/public/faveicon.jpg', category: 'Me' },
    { src: '/public/a6.jpg', category: 'Academic' },
    { src: '/public/b9.jpg', category: 'Event' },
    { src: '/public/s3.jpg', category: 'Media' },
    { src: '/public/x6.jpg', category: 'Academic' },
    { src: '/public/x2.jpg', category: 'Academic' },
    { src: '/public/sit.jpg', category: 'Training' },
    { src: '/public/t6.jpg', category: 'Event' },
    { src: '/public/s1.jpg', category: 'Academic' },
    { src: '/public/a1.jpg', category: 'Army' },
    { src: '/public/a5.jpg', category: 'Army' },
    { src: '/public/a8.jpg', category: 'Academic' },
    { src: '/public/a7.jpg', category: 'Teaching' },
    { src: '/public/a2.jpg', category: 'Army' },
    { src: '/public/a3.jpg', category: 'Army' },
    { src: '/public/about1.jpg', category: 'Me'},
    { src: '/public/s13.jpg', category: 'Me' },
    { src: '/public/s14.jpg', category: 'Me' },
    { src: '/public/s15.jpg', category: 'Me' },
    { src: '/public/n6.jpg', category: 'Army' },
    { src: '/public/quality.png', category: 'Me' },
    { src: '/public/bg2.jpg', category: 'Me' },
    { src: '/public/cap.jpg', category: 'Event' },
  ]

  const categories = [...new Set(images.map(img => img.category))]

  return (
    <div className="pt-20">
      

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="relative aspect-auto rounded-xl overflow-hidden shadow-lg cursor-pointer group" onClick={() => setSelectedImage(index)}>
                <img src={image.src} alt={image.title} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = '/sample-image-placeholder.jpg' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">{image.category}</span>
                    <h3 className="text-white font-semibold">{image.title}</h3>
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
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev - 1 + images.length) % images.length) }}><ChevronLeft className="w-6 h-6" /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev + 1) % images.length) }}><ChevronRight className="w-6 h-6" /></button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="max-w-5xl max-h-[80vh] px-16" onClick={(e) => e.stopPropagation()}>
              <img src={images[selectedImage].src} alt={images[selectedImage].title} className="max-w-full max-h-[70vh] object-contain rounded-lg" onError={(e) => { e.target.src = '/sample-image-placeholder.jpg' }} />
              <div className="text-center mt-4">
                <span className="text-amber-400 text-sm">{images[selectedImage].category}</span>
                <h3 className="text-white text-xl font-semibold mt-1">{images[selectedImage].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GalleryImages
