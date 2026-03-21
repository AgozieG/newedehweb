import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, Play, X } from 'lucide-react'

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const testimonials = [
    { name: 'Jennifer Chukwukwe', role: 'PhD Student', content: 'Prof. Edeh has been an incredible mentor throughout my academic journey. His guidance and support have been instrumental in my research success.', rating: 5, image: '/sample-testimonial-1.jpg' },
    { name: 'Miracle Obasi', role: 'Research Assistant', content: 'Working with Prof. Edeh has been a transformative experience. His dedication to excellence and passion for research is truly inspiring.', rating: 5, image: '/sample-testimonial-2.jpg' },
    { name: 'Dr. Sarah Johnson', role: 'Colleague, Shobhit University', content: 'Prof. Edeh is a brilliant researcher and a wonderful collaborator. His contributions to the field of cybersecurity are remarkable.', rating: 5, image: '/sample-testimonial-3.jpg' },
    { name: "Emmanuel Nwosu', role: 'Former Student', content: 'The knowledge and skills I gained from Prof. Edeh's classes have been invaluable in my career. He is truly a gifted educator.', rating: 5, image: '/sample-testimonial-4.jpg' "},
  ]

  const videoTestimonials = [
    { id: 'oGauSY5-Y5Q', name: 'Student Testimonial', thumbnail: '/sample-short-testimonial-1.jpg', duration: '0:30', youtubeUrl: 'https://www.youtube.com/shorts/oGauSY5-Y5Q' },
    { id: 'short-2', name: 'Research Collaboration', thumbnail: '/sample-short-testimonial-2.jpg', duration: '0:45', youtubeUrl: 'https://www.youtube.com/embed/sample-short-2' },
    { id: 'short-3', name: 'Academic Journey', thumbnail: '/sample-short-testimonial-3.jpg', duration: '0:60', youtubeUrl: 'https://www.youtube.com/embed/sample-short-3' },
  ]

  const videos = [
    // YouTube Shorts (7 total)
    { id: 'oGauSY5-Y5Q', title: 'Student Testimonial', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/oGauSY5-Y5Q/hqdefault.jpg' },
    { id: 'fbLZbwzhw7Q', title: 'Student Testimonial', category: 'YouTube Shorts', isShort: true, thumbnail: 'https://img.youtube.com/vi/fbLZbwzhw7Q/hqdefault.jpg' },
    // YouTube Videos (3 total)
    // { id: '8aC3J2J7Msw', title: 'Video 1', category: 'Videos', isShort: false, thumbnail: 'https://img.youtube.com/vi/8aC3J2J7Msw/hqdefault.jpg' },
    // { id: 'uZIoMSGGirc', title: 'Video 2', category: 'Videos', isShort: false, thumbnail: 'https://img.youtube.com/vi/uZIoMSGGirc/hqdefault.jpg' },
    // { id: 'YmXKFyWsALo', title: 'Video 3', category: 'Videos', isShort: false, thumbnail: 'https://img.youtube.com/vi/YmXKFyWsALo/hqdefault.jpg' },
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

export default Testimonials
