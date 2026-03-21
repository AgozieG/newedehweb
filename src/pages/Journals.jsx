import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Search, X } from 'lucide-react'

const Journals = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const journals = [
    { title: 'A novel deep learning model for predicting marine pollution for sustainable ocean management', authors: 'Edeh MO, Dalal S, Alhussein M, Aurangzeb K, Seth B, Kumar K', journal: 'PeerJ Computer Science', year: '2024', link: 'https://doi.org/10.7717/peerj-cs.2482', logo: 'PeerJ' },
    { title: 'A secure routing protocol for improving the energy efficiency in wireless sensor network applications for industrial manufacturing', authors: 'Onyema EM; Suguna S.K; Sundaravadivazhagan B; Rutvij, H.J; Ugwuja, NE; Chinecherem ED; Kumari K.S', journal: 'Next Energy (Elsevier)', year: '2025', link: 'https://doi.org/10.1016/j.nxener.2024.100219', logo: 'Elsevier' },
    { title: 'Forecasting students adaptability in online entrepreneurship education using modified ensemble machine learning model', authors: 'A. Malik; EM Onyema, S. Dalal, Umesh K; D Anand; A Sharma, S Simaiya', journal: 'Array (Elsevier)', year: '2023', link: 'https://doi.org/10.1016/j.array.2023.100303', logo: 'Elsevier' },
    { title: 'Evaluation of IoT-Enabled hybrid model for genome sequence analysis of patients in healthcare 4.0', authors: 'E.M. Onyema, U.K. Lilhore, P. Saurabh, S. Dalal, A.S. Nwaeze, A.T. Chijindu, L.C. Ndufeiya-Kumasi, S. Simaiya', journal: 'Measurement: Sensor (Elsevier)', year: '2023', link: 'https://doi.org/10.1016/j.measen.2023.100679', logo: 'Elsevier' },
    { title: 'Remote monitoring system using slow-fast deep convolution neural network model for identifying anti-social activities in surveillance applications', authors: 'Onyema, EM; Sundaravadivazhagn, B; Kanimozhi, S.S; Celestine, I; B.V.V. S Prasad; Chinecherem, DE', journal: 'Measurement: Sensors (Elsevier)', year: '2023', link: 'https://doi.org/10.1016/j.measen.2023.100718', logo: 'Elsevier' },
    { title: 'Transfer learned deep feature based crack detection using support vector machine: a comparative study', authors: 'Bhalaji Kharthik, K.S., Onyema, E.M., Mallik, S. et al.', journal: 'Scientific Reports (Springer)', year: '2024', link: '#', logo: 'Springer' },
    { title: 'Deep learning model for hair artifact removal and Mpox skin lesion analysis and detection', authors: 'Onyema, E.M., Gunapriya, B., Kavin, B.P. et al.', journal: 'Scientific Reports (Springer)', year: '2025', link: '#', logo: 'Springer' },
    { title: 'An efficient plant disease detection using transfer learning approach', authors: 'Sambana, B., Nnadi, H.S., Wajid, M.A. et al.', journal: 'Scientific Reports (Springer)', year: '2025', link: '#', logo: 'Springer' },
    { title: 'Smart Job Scheduling Model for Cloud Computing Network Application', authors: 'Onyema, E.M., Gude, V., Bhatt, A. et al.', journal: 'SN Computer Science (Springer)', year: '2024', link: '#', logo: 'Springer' },
    { title: 'Deep learning approach for Parkinson screening with geometric features from spiral and wave drawings', authors: 'Malik, M., Onyema, E.M., Uddin, M. et al.', journal: 'Multimedia Tools and Applications (Springer)', year: '2025', link: '#', logo: 'Springer' },
    { title: 'Super learner model for classifying leukemia through gene expression monitoring', authors: 'Selvaraj, S., Alsayed, A.O., Ismail, N.A., Balasubramanian, PK; Onyema EM; Gan, HS; and Uchechi, AQ', journal: 'Discover Oncology (Springer)', year: '2024', link: 'https://doi.org/10.1007/s12672-024-01337-x', logo: 'Springer' },
    { title: 'Breast Cancer Diagnosis Using Virtualization and Extreme Learning Algorithm Based on Deep Feed Forward Networks', authors: 'Shankar GS, Onyema EM, Kavin BP, Gude V, Prasad BS', journal: 'Biomedical Engineering and Computational Biology', year: '2024', link: 'https://doi.org/10.1177/11795972241278907', logo: 'SAGE' },
    { title: 'Assessment of Dynamic Swarm Heterogeneous Clustering in Cognitive Radio Sensor Networks', authors: 'Ruby B, Onyema, EM, Khalid KA, Celestine I, Shahab SB, Tripti S, Amir M', journal: 'Wireless Communication and Mobile Computing (Wiley)', year: '2022', link: 'https://doi.org/10.1155/2022/7359210', logo: 'Wiley' },
    { title: 'Prospects and Challenges of Using Machine Learning for Academic Forecasting', authors: 'Onyema, EM; Almuzaini, KK; Onu, FU; Verma, D; Gregory, US; Puttaramaiah, M; Afriyie, RK', journal: 'Computational Intelligence and Neuroscience (Hindawi)', year: '2022', link: 'https://doi.org/10.1155/2022/5624475', logo: 'Hindawi' },
    { title: 'Application of Machine Learning for Cardiovascular Disease Risk Prediction', authors: 'Surjeet, D; Pallavi, G; EM Onyema; Adnan, A; Amena, M; Majed, A.A; Halifa, A', journal: 'Computational Intelligence and Neuroscience (Hindawi)', year: '2023', link: 'https://doi.org/10.1155/2023/9418666', logo: 'Hindawi' },
    { title: 'Artificial Intelligence-Based Teleophthalmology Application for Diagnosis of Diabetics Retinopathy', authors: 'S. Ghouali, EM Onyema; MS. Guellil; M A. Wajid; O. Clare; W. Cherifi; M. Feham', journal: 'IEEE Open Journal of Engineering in Medicine and Biology', year: '2022', link: 'https://doi.org/10.1109/ojemb.2022.3192780', logo: 'IEEE' },
    { title: 'Human Emotions Recognition, Analysis and Transformation by the Bioenergy Field in Smart Grid Using Image Processing', authors: 'Chhabra, G.; Onyema, E.M.; Kumar, S.; Goutham, M.; Mandapati, S.; Iwendi, C', journal: 'Electronics (MDPI)', year: '2022', link: 'https://doi.org/10.3390/electronics11234059', logo: 'MDPI' },
    { title: 'A Security Policy Protocol for Detection and Prevention of Internet Control Message Protocol Attacks in Software Defined Networks', authors: 'Onyema, E.M; Kumar, MA; Balasubaramanian, S; Bharany, S; Rehman, AU; Eldin, ET; Shafiq, M', journal: 'Sustainability (MDPI)', year: '2022', link: 'https://doi.org/10.3390/su141911950', logo: 'MDPI' },
    { title: 'A data-driven framework for future healthcare diagnosis through predictive analytics', authors: 'Onyema, EM, Sharanya S, Karthikeyan S, Prabukavin B, and Annamalai, DA', journal: 'Drug Discovery and Telemedicine: Through Artificial Intelligence, Computer Vision, and IoT (De Gruyter)', year: '2025', link: 'https://doi.org/10.1515/9783111504667-005', logo: 'De Gruyter' },
    { title: 'ChatGPT Application in Educational Setting: Benefits and Drawback', authors: 'Onyema, EM; Anichebe, GE; Richard-Nnabu, NE; Udeh, CC; Ikechukwu, FJ; Ugboaja, S.G; Chinecherem, DE', journal: 'Tropical Journal of Applied Natural Science', year: '2024', link: 'https://tjansonline.org/view-paper.php?id=49', logo: 'TJANS' },
    { title: 'Smartphone Usage among Computer Science Students in Higher Education during Covid-19 Lockdown', authors: 'Edeh M.O; Ugboaja, S.G; Ugwuja, N.E; Igwe, J.S; Daniel, I.E; Richard-Nnabu, N.E', journal: 'Journal of Computer Science and its Application (Nigeria Computer Society)', year: '2022', link: 'https://www.ajol.info/index.php/jcsia/article/view/252419', logo: 'NCS' },
  ]

  const getLogoColor = (logo) => {
    const colors = { 'Elsevier': 'bg-red-600', 'Springer': 'bg-blue-600', 'IEEE': 'bg-indigo-600', 'MDPI': 'bg-green-600', 'Wiley': 'bg-blue-800', 'Hindawi': 'bg-orange-500', 'SAGE': 'bg-purple-600', 'De Gruyter': 'bg-gray-700', 'PeerJ': 'bg-teal-500', 'TJANS': 'bg-cyan-600', 'NCS': 'bg-green-700' }
    return colors[logo] || 'bg-gray-500'
  }

  // Filter journals based on search term
  const filteredJournals = useMemo(() => {
    if (!searchTerm.trim()) return journals
    
    const lowerSearch = searchTerm.toLowerCase()
    return journals.filter((journal) => 
      journal.title.toLowerCase().includes(lowerSearch) ||
      journal.authors.toLowerCase().includes(lowerSearch) ||
      journal.journal.toLowerCase().includes(lowerSearch) ||
      journal.year.includes(searchTerm)
    )
  }, [searchTerm, journals])

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Journal <span className="text-amber-400">Publications</span></h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Over 130 peer-reviewed publications across top-tier international journals</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, author, journal, or year..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-300 focus:border-amber-500 focus:outline-none transition-colors text-gray-900"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 p-1 hover:bg-gray-200 rounded transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                )}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-gray-500 mt-3"
              >
                {searchTerm ? `Found ${filteredJournals.length} result${filteredJournals.length !== 1 ? 's' : ''}` : `Showing all ${journals.length} publications`}
              </motion.p>
            </div>
          </motion.div>

          {/* Results */}
          <div className="space-y-6">
            {filteredJournals.length > 0 ? (
              filteredJournals.map((journal, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.02 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getLogoColor(journal.logo)}`}>{journal.logo}</span>
                        <span className="text-sm text-gray-500">{journal.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{journal.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{journal.authors}</p>
                      <p className="text-amber-600 text-sm font-medium">{journal.journal}</p>
                    </div>
                    <a href={journal.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-200 hover:bg-amber-500 hover:text-white transition-colors flex-shrink-0">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No publications found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journals
