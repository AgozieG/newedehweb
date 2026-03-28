import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Users, Lightbulb } from 'lucide-react'

const Education = () => {
  const features = [
    { icon: BookOpen, title: 'Curriculum Development', description: 'Designing comprehensive and innovative curricula that meet international standards and prepare students for the challenges of the modern world.' },
    { icon: Users, title: 'Teacher Training', description: 'Empowering educators with the skills and knowledge needed to deliver effective, engaging, and inclusive instruction.' },
    { icon: Lightbulb, title: 'Educational Technology', description: 'Integrating cutting-edge technologies into teaching and learning processes to enhance educational outcomes.' },
    { icon: GraduationCap, title: 'Policy Reform', description: 'Contributing to education policy development that promotes access, equity, and quality in learning.' },
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/sample-education-hero.jpg" alt="Education" className="w-full h-full object-cover opacity-20" onError={(e) => { e.target.style.display = 'none' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6"><span className="text-amber-400">Education</span></h1>
            <p className="text-lg text-blue-100 leading-relaxed">A passionate advocate for transformative education, Prof. Edeh has dedicated his academic career to enhancing learning systems and promoting inclusive access to quality education.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">His research explores curriculum development, education policy reform, and teacher training, with a special focus on marginalized and underserved populations. As an educator, he fosters critical thinking, innovation, and civic responsibility among his students, believing that education is the cornerstone of societal advancement and personal empowerment.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-blue-600" />
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
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Educational <span className="gradient-text">Initiatives</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["x6", "s1", "m1","e10", "e9", "a8", "a7", "a6","bg2"].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-200">
                <img src={`./${item}.jpg`} alt={`Educational initiative ${item}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = './x6.jpg' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
