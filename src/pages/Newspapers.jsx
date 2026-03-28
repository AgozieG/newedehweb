import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Newspaper } from 'lucide-react'

const Newspapers = () => {
  const articles = [
    { title: 'Key Insights from the 2024 Senegalese Presidential Election', newspaper: 'Vanguard', date: 'April 1, 2024', link: 'https://www.vanguardngr.com/2024/04/key-insights-from-the-2024-senegalese-presidential-election/', logo: 'Vanguard', color: 'bg-red-700' },
    { title: 'Digital Migration of Banking Customers in Nigeria: Pros and Cons', newspaper: 'The Nation', date: 'February 9, 2023', link: 'https://thenationonlineng.net/digital-migration-of-banking-customers-in-nigeria-pros-and-cons/', logo: 'The Nation', color: 'bg-green-700' },
    { title: 'Matters arising from remote education', newspaper: 'The Nation', date: 'September 6, 2020', link: 'https://thenationonlineng.net/matters-arising-from-remote-education/', logo: 'The Nation', color: 'bg-green-700' },
    { title: 'KIDNAPPING: The new threat to education in Nigeria', newspaper: 'Vanguard', date: 'March 1, 2021', link: 'https://www.vanguardngr.com/2021/03/kidnapping-the-new-threat-to-education-in-nigeria/', logo: 'Vanguard', color: 'bg-red-700' },
    { title: "Edeh ranked among Nigeria's top 500 in global research index", newspaper: 'The Sun', date: '', link: 'https://thesun.ng/edeh-ranked-among-nigerias-top-500-in-global-research-index/', logo: 'The Sun', color: 'bg-orange-600' },
    { title: 'Prospects of computer science', newspaper: 'The Nation', date: 'August 30, 2021', link: 'https://thenationonlineng.net/prospects-of-computer-science/', logo: 'The Nation', color: 'bg-green-700' },
    { title: 'Nigeria not winning war against insecurity- Retired Army Officer', newspaper: 'Champion Newspapers', date: 'October 3, 2025', link: 'https://championnews.com.ng/2025/10/03/nigeria-not-winning-war-against-insecurity-retired-army-officer/', logo: 'Champion', color: 'bg-blue-700' },
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <Newspaper className="w-16 h-16 mx-auto mb-6 text-amber-500" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-amber-500">Newspaper Publications</h1>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">Featured articles and opinion pieces in leading Nigerian newspapers</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-100">
                    <div className={`${article.color} p-4 flex items-center justify-between`}>
                      <span className="text-white font-bold text-lg">{article.newspaper}</span>
                      <ExternalLink className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-gray-900 font-semibold text-lg mb-3 line-clamp-3 flex-1">{article.title}</h3>
                      {article.date && <p className="text-gray-500 text-sm mt-auto">{article.date}</p>}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newspapers
