import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Calendar, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Conferences = () => {
  const conferences = [
    { title: 'Speaker - Enugu Technology Festival', location: 'Enugu International Conference Center', year: '2026', type: 'Keynote', flier: './public/present15.jpeg' },
    { title: 'Changing the Narrative of Leadership in Nigeria in 2023: The role of Social Media', location: 'Online', year: '2023', type: 'Host', flier: './public/present12.jpg' },
    { title: 'CyberSecurity In Education Sector: Threats And Solutions', location: 'EST Essaouria, Cadi Ayyad University, Morocco', year: '2025', type: 'Keynote', flier: './public/con2.jpg' },
    { title: 'Cybersecurity In A Hyper Connected World', location: 'Online', year: '2025', type: 'Invited Talk', flier: './public/present2.jpg' },
    { title: 'Computer Application to Business: Prospects and Challenges', location: 'Online', year: '2022', type: 'Speaker', flier: './public/present1.jpg' },
    { title: 'HealthCare Innovation And Smart Systems', location: 'India', year: '2024', type: 'Invited Talk', flier: './public/present3.jpg' },
    { title: 'Hybrid Intelligence: Theories And Applications', location: 'International Conference On HITA 2024', year: '2024', type: 'Invited Talk', flier: './public/present4.jpg' },
    { title: 'Hackathon on Practical Development and Deployment of Deep Learning Models(Pre-Trained Models)', location: 'Nigeria Computer Society (NCS), Enugu State Chapter, Nigeria', year: '2024', type: 'Host', flier: './public/present5.jpg' },
    { title: 'Hybrid Intelligence: Theories And Applications', location: 'International Conference On HITA 2024. Shobhit University Gangoh', year: '2024', type: 'Keynote Speaker', flier: './public/present6.jpg' },
    { title: 'Cyber Security, Intelligence and National Security', location: 'Coal City University, Enugu, Nigeria', year: '2021', type: 'Invited Talk', flier: './public/present7.jpg' },
    { title: 'Social Media as a Tool for Social Justice, Education and Carreer Advancement', location: 'Coal City University, Enugu, Nigeria', year: '2021', type: 'Keynote Speaker', flier: './public/present8.jpg' },
    { title: 'Harnessing the Potentials of Emerging Technologies to Solve Real World Problems', location: 'Coal City University, Enugu, Nigeria', year: '2023', type: 'Keynote Speaker', flier: './public/present9.jpg' },
    { title: 'Cybersecurity Concerns in Education Sector: Understanding the Vulnerabilities and Solutions', location: 'Shobhit University', year: '2021', type: 'Keynote Speaker', flier: './public/present10.jpg' },
    { title: 'Advancing Technology-Based Learning in Nigeria: Prospects, Challenges and Strategies', location: 'Nigeria Computer Society (NCS), Nigeria', year: '2022', type: 'Keynote Speaker', flier: './public/present11.jpg' },
    { title: 'Leveraging the Potential of Machine Learning in Real World', location: 'Online', year: '2022', type: 'Host', flier: './public/present13.jpg' },
    { title: 'Artificial Intelligence And Robotics in Life Science', location: 'Rama University', year: '2024', type: 'Paper Presentation', flier: './public/present14.jpg' },
    { title: 'Sustainability and Development in SAARC Nations: Key Issues, Opportunities and Challenges', location: 'RANGAPARA, ASSAM, INDIA', year: '2025', type: 'Invited Talk', flier: './public/con1.jpg' },
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <Mic className="w-16 h-16 mx-auto mb-6 text-amber-500" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-amber-500">Conferences and <span className="text-amber-500">Presentations</span></h1>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">Keynote speeches, invited talks, and research presentations at international conferences</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {conferences.map((conference, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-amber-400">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  {/* Flier Image */}
                  <div className="md:col-span-1 flex items-center justify-center">
                    <div className="w-auto h-auto rounded-lg overflow-hidden bg-gray-200 shadow-md border-2 border-gray-300 hover:border-amber-400 transition-colors duration-300">
                      <img
                        src={conference.flier}
                        alt={conference.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"%3E%3Crect fill="%23e5e7eb" width="300" height="400"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="14" fill="%239ca3af"%3EFlier Image%3C/text%3E%3C/svg%3E'
                        }}
                      />
                    </div>
                  </div>

                  {/* Conference Details */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">{conference.type}</span>
                      <span className="flex items-center text-sm text-gray-500"><Calendar className="w-4 h-4 mr-1" />{conference.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{conference.title}</h3>
                    <p className="flex items-start text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-amber-500" />
                      <span>{conference.location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">Invite Prof. Edeh to Speak</h2>
            <p className="text-lg text-amber-100 mb-8">Available for keynote speeches, invited talks, and conference presentations on cybersecurity, AI/ML, education technology, and health informatics.</p>
            <Link to="/send-file" className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">Request Speaking Engagement</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Conferences
