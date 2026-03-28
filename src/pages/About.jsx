import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Facebook, BookOpen, Globe, Award,Shield, Mail, Phone } from 'lucide-react'

const About = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/michael-onyema-edeh-ph-d-817928205/', label: 'LinkedIn', color: 'bg-[#0077b5]' },
    { icon: Facebook, href: 'https://web.facebook.com/prof.mikel', label: 'Facebook', color: 'bg-[#1877f2]' },
    { icon: BookOpen, href: 'https://scholar.google.com/citations?user=Y6UiUoEAAAAJ&hl=en', label: 'Google Scholar', color: 'bg-[#4285f4]' },
    { icon: Globe, href: 'https://www.researchgate.net/profile/Edeh-Onyema', label: 'ResearchGate', color: 'bg-[#00ccbb]' },
    { icon: Shield, label: 'Scopus', href: 'https://www.scopus.com/authid/detail.uri?authorId=57226165864', color: 'bg-[#E9711C]' },
    { icon: Award, label: 'Web of Science', href: 'https://www.webofscience.com/wos/author/record/ABO-8233-2022', color: 'bg-[#5C307F]' },
  ]

  const achievements = [
    { icon: Award, title: "Vice Chancellor's Research Excellence Award", year: '2023' },
    { icon: Award, title: "Chancellor's Best Staff Award", year: '2020' },
    { icon: Award, title: 'Student Spotlight, Peace Operations Training Institute, USA', year: '2011' },
    { icon: Award, title: 'United Nations Peace Medal', year: 'Military Service' },
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-serif text-3xl sm:text-4xl text-black font-bold mb-4">
                Edeh Michael Onyema, PhD
              </h1>
              <p className="text-xl text-gray-900 mb-6">Computer Science | Cybersecurity | AI/ML | Education | Health Informatics</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="mailto:mikedreamcometrue@gmail.com" className="flex items-center text-gray-800 hover:text-amber-400 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />mikedreamcometrue@gmail.com
                </a>
                <a href="tel:+2347039009048" className="flex items-center text-gray-800 hover:text-amber-400 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />+234 703 900 9048
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-3">Connect with me:</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`} aria-label={social.label}>
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex justify-center">
              <div className="relative">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute -inset-4 border-2 border-dashed border-amber-400/30 rounded-full" />
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl">
                  <img src="./hodpic5.png" alt="Edeh Michael Onyema, PhD" className="w-full h-full object-cover" onError={(e) => { e.target.src = '/sample-profile.jpg' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                  >
                    {[
                      { icon: BookOpen, value: '150+', label: 'Publications' },
                      { icon: Award, value: 'Top', label: 'Nigeria Scientist' },
                      { icon: Globe, value: '15+', label: 'Institutions' },
                      { icon: Shield, value: 'UN', label: 'Peace Medal' },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                        className="text-center"
                      >
                        <stat.icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                        <p className="text-2xl sm:text-3xl font-display font-bold text-black">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </motion.div>
                    ))}
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="prose prose-lg max-w-none text-gray-600 text-justify space-y-6">
              <p>Michael Onyema Edeh, PhD is a distinguished computer scientist, educator, and academic leader frequently recognized among Nigeria's top research scientists (Elsevier Scopus/Scival, 2021–2025). He currently serves as the Dean, Faculty of Allied Health and Applied Sciences at Coal City University Nigeria, where he formerly held the position of Deputy Dean, SIWES Coordinator, Director of ICT, and Head of Department of Mathematics and Computer Science.</p>
              <p>With a career rooted in teaching, research, and service, Prof. Michael Edeh has built a reputation for excellence in Cybersecurity, educational technology, artificial intelligence, and Health informatics. He is also the State Chairman of the Nigeria Computer Society, Enugu State Chapter, Nigeria.</p>
              <p>Prof. Edeh holds adjunct Professorial positions at numerous institutions in Nigeria and abroad, including Shobhit University (India), Saveetha Institute of Medical and Technical Sciences (India), Institute of Management and Technology (IMT), Enugu Nigeria; Enugu State college of Education Technical (ESCET) among others. He is also a Postdoctoral Fellow at the Research Institute of IoT Cybersecurity, National Kaohsiung University of Science and Technology, Taiwan.</p>
              <p>His research spans over 130 peer-reviewed publications across top-tier journals such as Springer, Elsevier, IEEE, MDPI, Wiley, Sage, De Gruyter and Taylor & Francis etc. He has authored several books indexed in Scopus and Web of science. His research publications have attracted thousands of citations on Google Scholar and over 392,000 reads on ResearchGate.</p>
              <p>In addition to his academic roles, he serves as an editor and reviewer for several international journals and conference proceedings. He has presented Keynote lectures and research papers at Several international conferences across the world, addressing topics from Cybersecurity, education technology, and Health informatics and Artificial intelligence.</p>
              <p>He is the recipient of multiple honors, including the Vice Chancellor's Research Excellence Award (2023), Chancellor's Best Staff Award (2020), and a United Nations Peace Medal for his earlier contribution to global peacekeeping during his military service. He features as Guest analyst on public affairs programs across various television and radio platforms, including Channels Television, Dream FM, Radio Nigeria, and several others.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Awards and Honors</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-amber-600 text-sm">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
