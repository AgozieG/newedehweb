import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Mic, FileText, Globe } from 'lucide-react'

const Policy = () => {
  const features = [
    { icon: FileText, title: 'Evidence-Based Policy', description: 'Focusing on evidence-based policy formulation and impact evaluation to promote sustainable development.' },
    { icon: Scale, title: 'Governance Frameworks', description: 'Developing governance frameworks that improve transparency, efficiency, and equity in public administration.' },
    { icon: Mic, title: 'Media Analysis', description: 'Featuring prominently in media houses including Channels Television, Radio Nigeria, and others.' },
    { icon: Globe, title: 'Collaboration', description: 'Collaborating with government bodies, NGOs, and international partners to provide actionable policy recommendations.' },
  ]

  const mediaOutlets = ['Channels Television', 'Radio Nigeria (FRCN)', 'Dream FM', 'The Nation Newspaper', 'Vanguard Newspaper', 'The Sun Newspaper']

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/sample-policy-hero.jpg" alt="Policy" className="w-full h-full object-cover opacity-20" onError={(e) => { e.target.style.display = 'none' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <Scale className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Public Policy <span className="text-amber-400">Analysis</span></h1>
            <p className="text-lg text-indigo-100 leading-relaxed">Prof. Michael Onyema Edeh brings a critical lens and strategic insight to the field of public policy analysis.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">His work focuses on evidence-based policy formulation, impact evaluation, and governance frameworks that promote sustainable development. With a keen interest in socio-political systems, Prof. Edeh evaluates how policies affect communities and institutions, aiming to improve transparency, efficiency, and equity in public administration.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Featured Media Outlets</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {mediaOutlets.map((item, index) => (
                <span key={index} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Media <span className="gradient-text">Appearances</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["s3", "b2", "good","q21","n8","n9","q1","q2","q22"].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-200">
                <img src={`./${item}.jpg`} alt={`Media appearance ${item}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = './q22.jpg' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Policy
