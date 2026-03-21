import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Facebook,Shield,Award, BookOpen, Globe } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/michael-onyema-edeh-ph-d-817928205/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://web.facebook.com/prof.mikel', label: 'Facebook' },
    { icon: BookOpen, href: 'https://scholar.google.com/citations?user=Y6UiUoEAAAAJ&hl=en', label: 'Google Scholar' },
    { icon: Globe, href: 'https://www.researchgate.net/profile/Edeh-Onyema', label: 'ResearchGate' },
    { icon: Shield, label: 'Scopus', href: 'https://www.scopus.com/authid/detail.uri?authorId=57226165864', color: 'bg-[#E9711C]' },
    { icon: Award, label: 'Web of Science', href: 'https://www.webofscience.com/wos/author/record/ABO-8233-2022', color: 'bg-[#5C307F]' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:mikedreamcometrue@gmail.com" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5 mr-3" />mikedreamcometrue@gmail.com
              </a>
              <a href="tel:+2347039009048" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5 mr-3" />+234 703 900 9048
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">About Me</a></li>
              <li><a href="/research" className="text-gray-300 hover:text-amber-400 transition-colors">Research</a></li>
              <li><a href="/books" className="text-gray-300 hover:text-amber-400 transition-colors">Books</a></li>
              <li><a href="/test" className="text-gray-300 hover:text-amber-400 transition-colors">Testimonials</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-amber-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className=" mt-20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Credits */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2">Designed and Developed by:</p>
            <p className="text-white font-medium">Web Development Team</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a
              href="tel:09130730895"
              className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm">09130730895</span>
            </a>
            <a
              href="mailto:webdevdes989@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm">webdevdes989@gmail.com</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Edeh Michael Onyema, PhD. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
