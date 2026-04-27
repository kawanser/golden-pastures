import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Story/>
    </main>
  )
}

export default App