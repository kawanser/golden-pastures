import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';

const SubHero = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#subhero",
        start: "top center",
        end: "center center",
        scrub: 1,
        snap: {
          snapTo: 0.1,
          directional: false,
          duration: 0.5,
          ease: "power1.inOut",
        },
      },
    });

    tl.from(".subhero-banner h1", {
      opacity: 0,
      y: 50,
      ease: 'power1.inOut'
    }).from(".subhero-banner button", {
      opacity: 0,
      y: 50,
      ease: 'power1.inOut'
    });
  }, [])

  return (
    <>
      <section id="subhero">
        <img src="/images/cow.jpg" alt="Image of a cow" />
        <div className="subhero-banner">
          <h1> Make Fresh Dairy Part of Your Everyday Life </h1>
          <button type="button">ORDER NOW</button>
        </div>
      </section>
    </>
  );
}

export default SubHero;