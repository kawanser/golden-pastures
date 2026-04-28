import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Story = () => {

  useGSAP(() => {
    const tl_1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-item-1",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
    });

    tl_1
      .from("#story h1", { opacity: 0, duration: 1.5, ease: "power1.inOut",})
      .from(".story-item-1 img", { opacity: 0, y: -100, duration: 1.5, ease: "power1.inOut",})
      .from(".story-item-1 p",{ opacity: 0, y: 100, duration: 1.5, ease: "power1.inOut",},"<")
      .to({}, { duration: 5 })
      .to(".story-item-1 img", { opacity: 0, y: 100, duration: 1.5, ease: "power1.inOut"})
      .to(".story-item-1 p",{ opacity: 0, y: -100, duration: 1.5, ease: "power1.inOut",},"<")
    
    const tl_2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-item-2",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
    });

    tl_2
      .from(".story-item-2 img", { opacity: 0, y: -100, duration: 1.5, ease: "power1.inOut",})
      .from(".story-item-2 p",{ opacity: 0, y: 100, duration: 1.5, ease: "power1.inOut",},"<")
      .to({}, { duration: 5 })
      .to(".story-item-2 img", { opacity: 0, y: 100, duration: 1.5, ease: "power1.inOut"})
      .to(".story-item-2 p",{ opacity: 0, y: -100, duration: 1.5, ease: "power1.inOut",},"<")

    const tl_3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-item-3",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
    });

    tl_3
      .from(".story-item-3 img", { opacity: 0, y: -100, duration: 1.5, ease: "power1.inOut"})
      .from(".story-item-3 p",{ opacity: 0, y: 100, duration: 1.5, ease: "power1.inOut"},"<")
      .to({}, { duration: 5 })
      .to(".story-item-3 img", { opacity: 0, y: 100, duration: 1.5, ease: "power1.inOut"})
      .to(".story-item-3 p", { opacity: 0, y: -100, duration: 1.5, ease: "power1.inOut", }, "<")
      .to("#story h1", { opacity: 0, duration: 1.5, ease: "power1.inOut"}, "<")
  }, []);

  return (
    <section id="story">
      <h1>OUR STORY</h1>
      <div id="story-container">
        <div className="container story-item-1">
          <img src="/images/farm.jpg" alt="Image of a barn in a field." />
          <p>
            A family-run dairy farm built on over 20 years of dedication and
            care.
          </p>
        </div>
        <div className="container story-item-2">
          <img
            src="/images/cow-2.jpg"
            alt="Image of cows being taken care of"
          />
          <p>
            Our cows are raised with ethical, stress-free practices and fed with
            high-quality organic feed.
          </p>
        </div>
        <div className="container story-item-3">
          <img src="/images/bottled-milk-2.jpg" alt="Image of a bottled milk" />
          <p>
            We produce fresh, high-quality dairy products you can trust every
            day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story