import React from "react";
import Nav from "./../components/Nav";
import Hero from "./../components/Hero";
import Story from "./../components/Story";
import Testimonials from "./../components/Testimonials";
import SubHero from "./../components/SubHero";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Story />
      <Testimonials />
      <SubHero />
      <Footer />
    </main>
  );
};

export default About;
