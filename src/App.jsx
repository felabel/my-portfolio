import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MyServices from './components/MyServices'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import WorkFlow from './components/WorkFlow'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App bg-about-bg overflow-x-hidden">
      <NavBar />
      <HeroSection />
      {/* <HeroSection /> */}
      <AboutMe />
      <MyServices />
      <WorkFlow />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
