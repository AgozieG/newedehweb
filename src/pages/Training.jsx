import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Code, BookOpen, Award } from 'lucide-react'

const Training = () => {
  const services = [
    { icon: Code, title: 'Customized Training Programs', description: 'Tailor-made workshops and seminars for students, educators, and professionals aimed at empowering participants with practical skills and cutting-edge knowledge in areas such as cybersecurity, machine learning, and digital transformation.' },
    { icon: BookOpen, title: 'Research and Development Support', description: 'Strategic advisory on research methodologies, academic program design, and innovative project implementation that align with current industry trends.' },
    { icon: Award, title: 'Leadership & Academic Excellence', description: 'Guidance on effective leadership in educational institutions, leveraging experience as Deputy Dean and Head of Department to help shape impactful academic policies and practices.' },
  ]

  const expertise = ['Cybersecurity', 'Machine Learning & AI', 'Health Informatics', 'Educational Technology', 'Computer Science Education', 'Research Methodology', 'Curriculum Development', 'Academic Leadership']

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/sample-training-hero.jpg" alt="Training" className="w-full h-full object-cover opacity-20" onError={(e) => { e.target.style.display = 'none' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Training & <span className="text-amber-400">Consultancy</span></h1>
            <p className="text-lg text-teal-100 leading-relaxed">Michael Onyema Edeh (PhD) brings extensive expertise in computer science and technology to his training and consultancy services.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">With a distinguished academic career spanning leadership roles at Coal City University, Shobhit University, and the Institute of Management and Technology (IMT) Enugu, he offers comprehensive programs designed to enhance technical skills and academic excellence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Areas of Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.map((item, index) => (
                <span key={index} className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Training <span className="gradient-text">Sessions</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["x7", "x5", "x4","m5","m6","t7"].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-200">
                <img src={`/${item}.jpg`} alt={`Training session ${item}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = './sit.jpg' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Training
