import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Video, X } from 'lucide-react'

const GalleryVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    // YouTube Shorts (7 total)
    { id: '1Ns75vnNVLA', title: 'Speaker at Enugu Tech Festival 2026', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/1Ns75vnNVLA/hqdefault.jpg' },
    { id: 'fVXLfMr-Opk', title: 'Enugu Tech Festival', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/fVXLfMr-Opk/hqdefault.jpg' },
    { id: 'Xrn-siN6WN4', title: 'Visit to the General Officer Commanding 82 Division Nigerian Army', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/Xrn-siN6WN4/hqdefault.jpg' },
    { id: 'Q0-ajDxG-Vk', title: 'With the Nigeria Former Chief of Army Staff Lt. Gen. Azubuike Ihejirika', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/Q0-ajDxG-Vk/hqdefault.jpg' },
    { id: '7XjGiP3K-5Q', title: 'Education is my passion. Every child deserves to be educated', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/7XjGiP3K-5Q/hqdefault.jpg' },
    { id: 'K08pElWnmXQ', title: 'Signing the Visitor\'s register during a visit to the GOC 82 DIV', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/K08pElWnmXQ/hqdefault.jpg' },
    { id: 'cgQvJ98xowc', title: 'August 13, 2025', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/cgQvJ98xowc/hqdefault.jpg' },
    // YouTube Videos (3 total)
    { id: '8aC3J2J7Msw', title: 'Video 1', category: 'Videos', isShort: false, thumbnail: 'https://img.youtube.com/vi/8aC3J2J7Msw/hqdefault.jpg' },
    { id: 'uZIoMSGGirc', title: 'Video 2', category: 'Videos', isShort: false, thumbnail: 'https://img.youtube.com/vi/uZIoMSGGirc/hqdefault.jpg' },
    { id: 'YmXKFyWsALo', title: 'Video 3', category: 'Videos', isShort: false, thumbnail: 'https://img.youtube.com/vi/YmXKFyWsALo/hqdefault.jpg' },
  ]

  const categories = [...new Set(videos.map(v => v.category))]

  return (
    <div className="pt-20">
      

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          {/* YouTube Shorts Section */}
          <div className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {videos.filter(v => v.isShort).map((video, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-gray-900" onClick={() => setSelectedVideo(video)}>
                  <div className="relative aspect-[9/16]">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/30 group-hover:bg-gray-800/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    {video.isShort && <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 rounded text-white text-xs font-semibold">SHORTS</div>}
                  </div>
                  <div className="p-4">
                    <span className="text-amber-600 text-xs font-semibold uppercase tracking-wider">{video.category}</span>
                    <h3 className="text-white font-semibold mt-1 line-clamp-2">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.filter(v => !v.isShort).map((video, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-gray-900" onClick={() => setSelectedVideo(video)}>
                  <div className="relative aspect-video">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/30 group-hover:bg-gray-800/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-amber-600 text-xs font-semibold uppercase tracking-wider">{video.category}</span>
                    <h3 className="text-white font-semibold mt-1 line-clamp-2">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => setSelectedVideo(null)}><X className="w-6 h-6" /></button>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`w-full ${selectedVideo.isShort ? 'max-w-sm' : 'max-w-4xl'}`} onClick={(e) => e.stopPropagation()}>
            <div className={`relative ${selectedVideo.isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-black rounded-lg overflow-hidden`}>
              <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0&modestbranding=1`} title={selectedVideo.title} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="mt-4">
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">{selectedVideo.category}</span>
              <h3 className="text-white text-xl font-semibold mt-1">{selectedVideo.title}</h3>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default GalleryVideos
