import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import LocomotiveScroll from 'locomotive-scroll';
import Projects from './components/Projects Highlights/Projects';
import StrAproch from './components/Stretigic Page Components/StrAproch';
import Testimonials from './components/Testimonials/Testimonials';
import Buisness from './components/Digital Buisness/Buisness';
import Insight from './components/Buisness Insight/Insight';
import Questions from './components/Questions/Questions';
import Schedule from './components/Schedule';
import Footer from './components/Footer/Footer';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <Landing />
      <div className='relative bg-zinc-200'>
      <Projects />
      <StrAproch />
      <Testimonials />
      <Buisness />
      <Insight />
      <Questions />
      <Schedule />
      <Footer />
      </div>
    </div>
  )
}

export default App