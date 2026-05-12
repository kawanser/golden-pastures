import React from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";

const Contact = () => {
  return (
    <>
      <Nav />
      <main id="contact">
        <h1>LOOKING FORWARD TO HEARING FROM YOU!</h1>
        <form>
          <input type="text" name="fullname" placeholder="Full name" />
          <input type="email" name="email" placeholder="E-mail" />
          <textarea name="message" placeholder=" Message" rows="15"></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
