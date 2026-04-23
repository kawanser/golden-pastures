import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  useGSAP(() => {
    gsap.to('.hero-banner', {
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-banner',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        ease: 'power1.inOut',
      }
    })
  },[])

  return (
    <>
      <section id="hero">
        <video
          src="/videos/cheese.mp4"
          muted
          playsInline
          preload="auto"
          autoPlay
        >
        </video>
        <div className='hero-banner'>
          <h1> GOLDEN PASTURES </h1>
          <h5>
            Fresh, organic dairy delivered straight from our
            <br/>
            farm to your home or business.
          </h5>
          <button
            type='button'
          >
            Get in touch
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;