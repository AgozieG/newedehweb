import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Lightbulb, Target } from 'lucide-react'

const Mentorship = () => {
  const features = [
    { icon: Heart, title: 'Personal Guidance', description: 'Providing one-on-one mentorship that combines academic rigor with empathy to help mentees navigate challenges.' },
    { icon: Lightbulb, title: 'Leadership Development', description: 'Fostering leadership skills and ethical reasoning in the next generation of scholars and changemakers.' },
    { icon: Target, title: 'Career Support', description: 'Helping mentees set and achieve professional goals through strategic guidance and support.' },
    { icon: Users, title: 'Community Building', description: 'Creating networks of support that extend beyond formal mentorship relationships.' },
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/sample-mentorship-hero.jpg" alt="Mentorship" className="w-full h-full object-cover opacity-20" onError={(e) => { e.target.style.display = 'none' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6"><span className="text-amber-400">Mentorship</span></h1>
            <p className="text-lg text-purple-100 leading-relaxed">Recognizing the transformative power of guidance and support, Prof. Edeh has mentored countless students, early-career professionals, and community leaders.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">His mentorship approach combines academic rigor with empathy, helping mentees navigate personal and professional challenges. Whether through formal supervision or informal advisory roles, he invests in the next generation of scholars and changemakers, fostering leadership, ethical reasoning, and a lifelong commitment to learning.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Mentorship <span className="gradient-text">Moments</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["x1", "x2", "sit", "a6","m1","x7"].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-200">
                <img src={`/public/${item}.jpg`} alt={`Mentorship moment ${item}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = '/public/m1.jpg' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mentorship
