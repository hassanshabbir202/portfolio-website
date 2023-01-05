
import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import HeroSection from './components/hero/HeroSection'
import Navbar from './components/navbar/Navbar'
import Resume from './components/resume/Resume'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
