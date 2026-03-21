import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Journals from './pages/Journals'
import Books from './pages/Books'
import Newspapers from './pages/Newspapers'
import Conferences from './pages/Conferences'
import Education from './pages/Education'
import Security from './pages/Security'
import Mentorship from './pages/Mentorship'
import Training from './pages/Training'
import Policy from './pages/Policy'
import GalleryImages from './pages/GalleryImages'
import GalleryVideos from './pages/GalleryVideos'
import Testimonials from './pages/Testimonials'
import AdsFliers from './pages/AdsFliers'
import AdsVideos from './pages/AdsVideos'
import Submit from './pages/Submit'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/books" element={<Books />} />
          <Route path="/news" element={<Newspapers />} />
          <Route path="/presentations" element={<Conferences />} />
          <Route path="/education" element={<Education />} />
          <Route path="/security" element={<Security />} />
          <Route path="/mentor" element={<Mentorship />} />
          <Route path="/training" element={<Training />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/pics" element={<GalleryImages />} />
          <Route path="/rec" element={<GalleryVideos />} />
          <Route path="/test" element={<Testimonials />} />
          <Route path="/fliers" element={<AdsFliers />} />
          <Route path="/advid" element={<AdsVideos />} />
          <Route path="/send-file" element={<Submit />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
