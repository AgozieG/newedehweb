import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Microscope, FileText, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const Research = () => {
  const researchAreas = [
    { icon: Microscope, title: 'Cybersecurity', description: 'Advanced research in network security, IoT security, and threat detection using machine learning and deep learning techniques.' },
    { icon: BookOpen, title: 'Artificial Intelligence & Machine Learning', description: 'Developing innovative AI/ML models for healthcare, education, and smart city applications.' },
    { icon: FileText, title: 'Health Informatics', description: 'Research on digital health technologies, medical data analysis, and healthcare information systems.' },
    { icon: Award, title: 'Educational Technology', description: 'Exploring the impact of emerging technologies on learning outcomes and educational resilience.' },
  ]

  const stats = [
    { number: '150+', label: 'Publications' },
    { number: '400K+', label: 'ResearchGate Reads' },
    { number: 'Multiple', label: 'Books Authored' },
    { number: 'Global', label: 'Collaborations' },
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6"><span className="text-amber-400">Research</span> Excellence</h1>
            <p className="text-lg text-gray-300 leading-relaxed">At the core of Prof. Edeh's academic work is a deep commitment to rigorous, interdisciplinary research. His scholarly pursuits span public policy, education, governance, and development studies.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">{stat.number}</p>
                <p className="text-amber-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Research <span className="gradient-text">Areas</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 -mt-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Explore <span className="gradient-text">Publications</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ name: 'Journal Articles', path: '/journals', count: '150+ Articles' }, { name: 'Books', path: '/books', count: 'Multiple Books' }, { name: 'Newspapers', path: '/news', count: 'Media Features' }, { name: 'Conferences', path: '/presentations', count: 'Presentations' }].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                <Link to={item.path} className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-amber-600 text-sm">{item.count}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">Interested in <span className="text-amber-400">Collaboration?</span></h2>
            <p className="text-gray-300 mb-8 text-lg">Prof. Edeh is available for research collaborations and assignments.</p>
            <Link to="/send-file" className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors duration-300">Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Research
