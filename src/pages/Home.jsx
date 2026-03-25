import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Video, X, ChevronRight, ChevronLeft, Linkedin, Facebook, Mail, Phone, BookOpen, Globe,Shield, Award, ChevronDown, ChevronUp, Users, BookMarked, Award as AwardIcon } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Home = () => {
  const [readMore, setReadMore] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (imageRef.current) observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: '130+', value: 'Publications', icon: BookMarked },
    { label: '30k+', value: 'Citations', icon: AwardIcon },
    { label: '15+', value: 'Years Exp.', icon: Award },
    { label: '20+', value: 'Institutions', icon: Users },
  ]

  const books = [
    
    {
      title: 'Leveraging the Potential of Artificial Intelligence in the Real World',
      subtitle: 'Smart Cities and Healthcare',
      publisher: 'Routledge',
      link: 'https://www.routledge.com/Leveraging-the-Potential-of-Artificial-Intelligence-in-the-Real-World-Smart-Cities-and-Healthcare/Tran-Onyema-Abougreen/p/book/9781032667485',
      image: './book2.jpg',
    },
    {
      title: 'Hybrid Intelligence',
      subtitle: 'Theories and Applications',
      publisher: 'Springer',
      link: 'https://link.springer.com/book/9789819677528',
      image: './book6.jpeg',
    },
    {
      title: 'Defending the Metaverse',
      subtitle: 'Cybersecurity Strategies for the Next Generation Internet',
      publisher: 'Routledge',
      link: 'https://www.routledge.com/Defending-the-Metaverse-Cybersecurity-Strategies-for-the-Next-Generation-Internet/Sheth-Ouaissa-Ouaissa-Onyema-Parekha/p/book/9781032946832',
      image: './book1.jpeg',
    },
    {
      title: 'Transformative Role of Transformer Models in Healthcare',
      subtitle: '',
      publisher: 'IGI Global',
      link: 'https://www.igi-global.com/book/transformative-role-transformer-models-healthcare/367328',
      image: './book7.jpeg',
    },
    {
      title: 'Artificial Intelligence and Cognitive Sciences for Emerging Technologies',
      subtitle: 'Volume 1',
      publisher: 'Springer',
      link: 'https://link.springer.com/book/9783032114105',
      image: './book9.PNG',
    },
    {
      title: 'Artificial Intelligence and Cognitive Sciences for Emerging Technologies',
      subtitle: 'Volume 2',
      publisher: 'Springer',
      link: 'https://link.springer.com/book/9783032144294',
      image: './book9.PNG',
    },
    { 
      title: 'Introduction to Compiler Construction', 
      subtitle: '2nd Edition', 
      publisher: 'Cropsworld Concepts', 
      image: './book3.jpg' 
    },
    { 
      title: 'Computer Installation Management', 
      subtitle: '', 
      publisher: 'Cropsworld Concepts',
      image: './book4.jpg'
    },
    { 
      title: 'Discrete Structures', 
      subtitle: 'Foundations and Applications for Computer Science', 
      publisher: 'Cropsworld Concepts', year: '2024', 
      image: './book5.jpg', editors: 'Ngene, N; Udeh, CC; and Edeh, MO. (Eds.)', isbn: '' 
    },
    { 
      title: 'Introduction to Computer Architecture and Embedded Design with Arduino', 
      subtitle: '', 
      publisher: 'Cropsworld Concepts',
      image: './book8.jpg'
    },
  ]

  const images = [
    { src: './z1.jpeg', alt: 'Professional Meeting' },
    { src: './z2.jpeg', alt: 'Professional Meeting' },
    { src: './z3.jpeg', alt: 'Professional Meeting' },
    { src: './z4.jpeg', alt: 'Professional Meeting' },
    { src: './z5.jpeg', alt: 'Professional Meeting' },
    { src: './z6.jpeg', alt: 'Professional Meeting' },
    { src: './z7.jpeg', alt: 'Professional Meeting' },
    { src: './z8.jpeg', alt: 'Professional Meeting' },
    { src: './z9.jpeg', alt: 'Professional Meeting' },
    { src: './z10.jpeg', alt: 'Professional Meeting' },
    { src: './z11.jpeg', alt: 'Professional Meeting' },
    { src: './e9.jpg', alt: 'Conference Presentation' },
    { src: './e10.jpg', alt: 'Academic Event' },
    { src: './m3.jpg', alt: 'Professional Meeting' },
    { src: './x6.jpg', alt: 'Professional Meeting' },
    { src: './m8.jpg', alt: 'Professional Meeting' },
    { src: './m9.jpg', alt: 'Professional Meeting' },
    { src: './t6.jpg', alt: 'Professional Meeting' },
    { src: './t7.jpg', alt: 'Professional Meeting' },
    { src: './a1.jpg', alt: 'Professional Meeting' },
    { src: './a2.jpg', alt: 'Professional Meeting' },
    { src: './a3.jpg', alt: 'Professional Meeting' },
    { src: './a5.jpg', alt: 'Professional Meeting' },
    { src: './a6.jpg', alt: 'Professional Meeting' },
    { src: './b2.jpg', alt: 'Professional Meeting' },
    { src: './b9.jpg', alt: 'Professional Meeting' },
    { src: './bg2.jpg', alt: 'Professional Meeting' },
    { src: './b7.jpg', alt: 'Professional Meeting' },
    { src: './cap.jpg', alt: 'Professional Meeting' },
    { src: './good.jpg', alt: 'Professional Meeting' },
    { src: './nice.jpg', alt: 'Professional Meeting' },
    { src: './q21.jpg', alt: 'Professional Meeting' },
    { src: './sit.jpg', alt: 'Professional Meeting' },
    { src: './a7.jpg', alt: 'Academic Event' },
    { src: './a8.jpg', alt: 'Academic Event' },
    { src: './about1.jpg', alt: 'Academic Event' },
    { src: './about2.jpg', alt: 'Academic Event' },
    { src: './m1.jpg', alt: 'Professional Meeting' },
    { src: './m2.jpg', alt: 'Professional Meeting' },
  ]

  const videos = [
  { id: "fVXLfMr-Opk", title: "Enugu Tech Festival",isShort: true },
  { id: "Xrn-siN6WN4", title: "Visit to the General Officer Commanding 82 Division Nigerian Army",isShort: true },
  { id: "1Ns75vnNVLA", title: "Speaker at Enugu Tech Festival 2026 organised by Enugu State government",isShort: true },
  { id: "Q0-ajDxG-Vk", title: "With the Nigeria Former Chief of Army Staff Lt. Gen.Azubuike Ihejirika",isShort: true },
  { id: "7XjGiP3K-5Q", title: "Education is my passion. Every child deserves to be educated",isShort: true },
  { id: "K08pElWnmXQ", title: "Signing the Visitor's register during a visit to the GOC 82 DIV NIGERIAN ARMY",isShort: true },
  { id: "cgQvJ98xowc", title: "August 13, 2025",isShort: true },
  { id: "UAYb8uk6LMw", title: "Video 2", category: "Videos", isShort: false, thumbnail: "https://img.youtube.com/vi/UAYb8uk6LMw/hqdefault.jpg" }
];
const categories = [...new Set(videos.map(v => v.category))]
const [selectedVideo, setSelectedVideo] = useState(null)

  const [booksEmblaRef, booksApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ])

  const [imagesEmblaRef, imagesApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  const [videosEmblaRef, videosApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ])

  const scrollPrev = (api) => api && api.scrollPrev()
  const scrollNext = (api) => api && api.scrollNext()

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/michael-onyema-edeh-ph-d-817928205/', label: 'LinkedIn', color: 'bg-[#0077b5]' },
    { icon: Facebook, href: 'https://web.facebook.com/prof.mikel', label: 'Facebook', color: 'bg-[#1877f2]' },
    { icon: BookOpen, href: 'https://scholar.google.com/citations?user=Y6UiUoEAAAAJ&hl=en', label: 'Google Scholar', color: 'bg-[#4285f4]' },
    { icon: Globe, href: 'https://www.researchgate.net/profile/Edeh-Onyema', label: 'ResearchGate', color: 'bg-[#00ccbb]' },
    { icon: Shield, label: 'Scopus', href: 'https://www.scopus.com/authid/detail.uri?authorId=57226165864', color: 'bg-[#E9711C]' },
    { icon: Award, label: 'Web of Science', href: 'https://www.webofscience.com/wos/author/record/ABO-8233-2022', color: 'bg-[#5C307F]' },
  ]

  const academicExperience = [
    'Shobhit University, India',
    'Southwestern University, Ogun State',
    'Coal City University, Enugu, Nigeria',
    'Spiritan University Nneochi, Abia State, Nigeria',
    'National Open University of Nigeria (NOUN)',
    'Alex Ekwueme Federal University, Ebonyi State, Nigeria',
    'Gregory University, Uturu, Abia State, Nigeria',
    'Enugu State College of Education Technical (ESCET), Enugu, Nigeria',
    'Institute of Management and Technology (IMT), Enugu, Nigeria',
    'African Thinkers Community of Inquiry College of Education (ATCOI-COE), Enugu, Nigeria',
    'Pogil College of Health Technology, Ogun State, Nigeria',
    'Saveetha School of Engineering, Saveetha Institute of Medical and Technical Sciences, Chennai, India',
    'Federal Science and Technical College, Ogun State, Nigeria',
    'Yeshwantrao Chavan College of Engineering, India',
    'Public Policy Analyst, Channels Television, FRCN',
  ]

  const leadershipRoles = [
    'Dean, Faculty of Allied Health and Applied Sciences, Coal City University, Enugu, Nigeria',
    'Postdoctoral Fellow, Research Institute of IoT/Cybersecurity, National Kaohsiung University of Science and Technology, Taiwan',
    'Adjunct Professor, Enugu State University of Science and Technology (ESUT), Nigeria',
    "Member,  TETFUND National Advisory Committee  on Robotics, Cybersecurity, Artificial Intelligence and Coding",
    'Member, International Advisory Board, Gurugram University, India',
    'Former Deputy Dean, Faculty of Allied Health and Applied Sciences, Coal City University, Enugu, Nigeria',
    'Former Director of ICT, Coal City University, Enugu, Nigeria',
    'Former Director of Student Industrial Work Experience Scheme (SIWES)/Internship, Coal City University, Enugu, Nigeria',
    'Former Head of Department, Mathematics and Computer Science, Coal City University, Enugu, Nigeria',
    'Professor, Dept. of Computer Science and Eng., Shobhit University, India',
    'Adjunct Professor, Institute of Management and Technology (IMT), Enugu, Nigeria',
    'Adjunct Professor, Enugu State College of Education Technical (ESCET), Nigeria',
    'Adjunct Professor, Saveetha Institute of Medical and Technical Sciences, Chennai, India',
    'Adjunct Senior Lecturer, Spiritan University, Abia State, Nigeria',
    'Overseas Mentor (Visiting Scholar), Yeshwantrao Chavan College of Engineering, Nagpur, India',
    'External Examiner, including for PhD',
    'State Chairman, Nigeria Computer Society, Enugu State Chapter, Nigeria',
    'Editor of several top ranked journals',
    'Distinguished Keynote Speaker (locally and internationally)',
    'Public Policy Analyst in several national media including Channels Television, FRCN, etc.',
    'Member, Central Planning Committee, Enugu Tech Festival by Enugu State Government Nigeria',
    'Military Veteran',
    'Nigeria Top Scientist/Scholar (Elsevier Scopus SciVal) for several years',
  ]
  

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-140  bg-gradient-to-br from-gray-50 via-white to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="order-2 lg:order-1 mb-90"
            >
              

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
              >
                 Michael Onyema Edeh, PhD
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-600 mb-3"
              >
                Computer Science | Cybersecurity | AI/ML | Education | Health Informatics
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                

          

                  {/* YouTube Videos Section */}
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {videos.filter(v => !v.isShort).map((video, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="relative rounded-xl  shadow-lg cursor-pointer group bg-gray-900" onClick={() => setSelectedVideo(video)}>
                          <div className="relative aspect-video h-auto w-120 bg-gray-800 rounded-lg overflow-hidden">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/30 group-hover:bg-gray-800/50 transition-colors">
                              <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-white ml-1" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {selectedVideo && (
                    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
                      <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => setSelectedVideo(null)}><X className="w-6 h-6" /></button>
                      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`w-full ${selectedVideo.isShort ? 'max-w-sm' : 'max-w-4xl'}`} onClick={(e) => e.stopPropagation()}>
                        <div className={`relative ${selectedVideo.isShort ? 'aspect-[9/16]' : 'aspect-video '} bg-black rounded-lg overflow-hidden`}>
                          <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0&modestbranding=1`} title={selectedVideo.title} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                        <div className="mt-4">
                          <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">{selectedVideo.category}</span>
                          <h3 className="text-white text-xl font-semibold mt-1">{selectedVideo.title}</h3>
                        </div>
                      </motion.div>
                    </div>
                  )}
                
              </motion.div>

              
            </motion.div>

            {/* Right Content - Image */}
            <div
              ref={imageRef}
              className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 order-1 lg:order-2 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Glow Effect Behind Image */}

                {/* Main Image - Original with background */}
                <div className="relative">
                  <img
                    src="./hodpic5.png"
                    alt="Edeh Michael Onyema, PhD"
                    className="relative z-10 w-full h-auto object-cover rounded-lg md:rounded-2xl"
                    onError={(e) => { e.target.src = './hodpic5.png' }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* About Section with Read More */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            

            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`text-gray-600 text-justify leading-relaxed text-lg ${readMore ? '' : 'line-clamp-6'}`}
              >
                <p className="mb-4">
                  Prof. Michael Onyema Edeh, PhD is a distinguished academic and public figure in the Nigerian and international educational communities, frequently recognized among Nigeria's top research scientists (Elsevier Scopus/Scival, 2021–2026). His leadership roles within academia, research output, and participation in professional and advisory boards underscore his expertise and influence in the fields of Computer science, Cybersecurity and educational technologies.
                </p>
                <p className="mb-4">
                  He currently serves as the Dean, Faculty of Allied Health and Applied Sciences at Coal City University Nigeria, where he formerly held the position of Deputy Dean, SIWES (Internship program) Coordinator, Director of ICT, and Head of Department of Mathematics and Computer Science. With a career rooted in teaching, research, and service, Prof. Michael Edeh has built a reputation for excellence in Cybersecurity, educational technology, artificial intelligence, and Health informatics.
                </p>
                <p className="mb-4">
                  He also contributes to initiatives on educational resilience, with involvement featured on UNESCO's Education4Resilience platform. He is also serves as the State Chairman of the Nigeria Computer Society, Enugu State Chapter, Nigeria.
                </p>
                {readMore && (
                  <>
                    <p className="mb-4">
                      Prof. Edeh holds adjunct Professorial positions at numerous institutions in Nigeria and abroad, including Shobhit University (India), Saveetha Institute of Medical and Technical Sciences (India), Institute of Management and Technology (IMT), Enugu Nigeria; Enugu State college of Education Technical (ESCET) among others. He is also a Postdoctoral Fellow at the Research Institute of IoT Cybersecurity, National Kaohsiung University of Science and Technology, Taiwan.
                    </p>
                    <p className="mb-4">
                      His research spans over 130 peer-reviewed publications across top-tier journals such as Springer, Elsevier, IEEE, MDPI, Wiley, Sage, De Gruyter and Taylor & Francis etc. He has authored several books indexed in Scopus and Web of science. His research publications have attracted thousands of citations on Google Scholar and over 394,000 reads on ResearchGate.
                    </p>
                    <p className="mb-4">
                      In addition to his academic roles, he serves as an editor and reviewer for several international journals and conference proceedings. He has presented Keynote lectures and research papers at Several international conferences across the world, addressing topics from Cybersecurity, education technology, and Health informatics and Artificial intelligence.
                    </p>
                    <p>
                      He is the recipient of multiple honors, including the Vice Chancellor's Research Excellence Award (2023), Chancellor's Best Staff Award (2020), Student Spotlight at Peace Operation Training Institute, USA in 2011, and a United Nations Peace Medal for his earlier contribution to global peacekeeping during his military service. He features as Guest analyst on public affairs programs across various television and radio platforms, including Channels Television, Dream FM, Radio Nigeria, and several others.
                    </p>
                  </>
                )}
              </motion.div>

              <button
                onClick={() => setReadMore(!readMore)}
                className="mt-6 inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                {readMore ? (
                  <>
                    Read Less <ChevronUp className="ml-1 w-5 h-5" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="ml-1 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <img src="./sit.jpg" alt="sit" className='w-full' />
      


      {/* Academic & Professional Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Academic and Professional Experience
            </h2>
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block text-black font-semibold text-sm tracking-wider mb-4"
              >
                Prof. Michael has taught, supervised, and mentored students in different institutions across the world including...
              </motion.span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {academicExperience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-amber-400"
              >
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Leadership, Administrative and Professional Roles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadershipRoles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4 hover:bg-amber-50 transition-colors duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Carousel */}
      <section className="py-20 bg-gradient-to-br from-white to-amber-50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Book <span className="text-dark">Publications</span>
            </h2>
            <p className="text-gray-700">Explore my published works</p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={booksEmblaRef}>
              <div className="flex">
                {books.map((book, index) => (
                  <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                          <img
                            src={book.image}
                            alt={book.title}
                            className=" w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => { e.target.src = '/sample-book-placeholder.jpg' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-2">
                            {book.publisher}
                          </p>
                          <h3 className="text-gray-900 font-semibold text-lg mb-1 line-clamp-2">
                            {book.title}
                          </h3>
                          {book.subtitle && (
                            <p className="text-gray-600 text-sm">{book.subtitle}</p>
                          )}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollPrev(booksApi)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-amber-500 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollNext(booksApi)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-amber-500 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Images Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={imagesEmblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg image-hover">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = '/sample-image-placeholder.jpg' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollPrev(imagesApi)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-amber-500 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollNext(imagesApi)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-amber-500 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Videos Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={videosEmblaRef}>
              <div className="flex items-start">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] px-4"
                  >
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-gray-900">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                      />
                      {/* Title bar */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                        <p className="text-white text-sm font-medium">{video.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev button */}
            <button
              onClick={() => scrollPrev(videosApi)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-amber-500 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={() => scrollNext(videosApi)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-amber-500 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div

            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
                Get In <span className="text-yellow-600">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8">
                For research collaborations, speaking engagements, or academic inquiries, please reach out through any of the channels below.
              </p>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:mikedreamcometrue@gmail.com"

                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6 text-yellow-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-dark font-medium group-hover:text-yellow-600 transition-colors">mikedreamcometrue@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="tel:+2347039009048"

                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6 text-amber-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone/WhatsApp</p>
                    <p className="text-dark font-medium group-hover:text-yellow-600 transition-colors">+234 703 900 9048</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Social Links */}
            <motion.div

              className="bg-cream rounded-2xl p-8"
            >
              <h3 className="font-serif text-xl font-bold text-dark mb-6">Social Accounts</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}

                    className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-elegant transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white`}>
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="text-dark font-medium text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Home
