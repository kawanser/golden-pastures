import { useGSAP } from '@gsap/react';
import { Link } from "react-router-dom";
import React from 'react';
import gsap from 'gsap';

const SubHero = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#subhero",
        start: "top center",
        end: "top top",
        scrub: 1
      },
    });

    tl
      .from(".subhero-banner h1", {
        opacity: 0,
        y: 50,
        ease: 'power1.inOut',
      })
  }, [])

  return (
    <>
      <section id="subhero">
        <img src="/images/cow.jpg" alt="Image of a cow" />
        <div className="subhero-banner">
          <h1> Make Fresh Dairy Part of Your Everyday Life </h1>
          <button type="button">
            <Link to="/products">ORDER NOW</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default SubHero;