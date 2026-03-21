import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Globe, Award } from 'lucide-react'

const Security = () => {
  const features = [
    { icon: Lock, title: 'Cybersecurity', description: 'Expertise in network security, threat detection, and vulnerability assessment using advanced technologies.' },
    { icon: Globe, title: 'Peacekeeping', description: 'Participated in several United Nations peacekeeping efforts with earned UN peace medal.' },
    { icon: Shield, title: 'Counter-Terrorism', description: 'Contributing to discourses on counter-terrorism strategies and security sector reforms.' },
    { icon: Award, title: 'Military Veteran', description: 'Over a decade of experience in active military service both domestically and internationally.' },
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/sample-security-hero.jpg" alt="Security" className="w-full h-full object-cover opacity-20" onError={(e) => { e.target.style.display = 'none' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <Shield className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6"><span className="text-amber-400">Security</span></h1>
            <p className="text-lg text-gray-300 leading-relaxed">Prof. Edeh is a military veteran with over a decade of experience in active military service both domestically and internationally.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">He has participated in several United Nations peacekeeping efforts and also earned UN peace medal. He contributes to discourses on counter-terrorism, community policing, and security sector reforms, emphasizing the need for inclusive, rights-based approaches to security challenges in contemporary Africa.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-red-600" />
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
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Security <span className="gradient-text">Experience</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["a1", "a3","a5","j2","j11","j14","j6","j4","j9"].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-200">
                <img src={`/${item}.jpg`} alt={`Security experience ${item}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = '/j4.jpg' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Security
