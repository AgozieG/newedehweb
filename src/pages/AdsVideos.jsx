import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Video, Play, X } from 'lucide-react'

const AdsVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    { id: '', title: '', thumbnail: './sample-ad-video-1.jpg', duration: '0:30', youtubeUrl: '' },
    { id: '', title: '', thumbnail: './sample-ad-video-2.jpg', duration: '0:45', youtubeUrl: '' },
    { id: '', title: '', thumbnail: './sample-ad-video-3.jpg', duration: '1:00', youtubeUrl: '' },
  ]

  return (
    <div className="pt-20">
      {/* <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <Video className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Promotional <span className="text-amber-400">Videos</span></h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Video advertisements and promotional content</p>
          </motion.div>
        </div>
      </section> */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-gray-900" onClick={() => setSelectedVideo(video)}>
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-60" onError={(e) => { e.target.src = './white.jpg' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-white text-xs">{video.duration}</div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => setSelectedVideo(null)}><X className="w-6 h-6" /></button>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe src={selectedVideo.youtubeUrl} title={selectedVideo.title} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedVideo.title}</h3>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default AdsVideos
