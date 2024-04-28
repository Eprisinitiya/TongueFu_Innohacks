import React from 'react'
// import Tongue from '../features/tongue_twister/Tongue'
import HeroSection from '../components/home_component/HeroSection'
import Features from '../components/home_component/Features'
import Stats from '../components/home_component/Stats'
import Testimonials from '../components/home_component/Testimonials'
import CallToAction from '../components/home_component/CallToAction'
import Blog from '../components/home_component/Blog'
function Home() {
  return (
    <div className="bg-slate-900">
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
		  <CallToAction/>
		  <Blog/>
    </div>
  )
}

export default Home