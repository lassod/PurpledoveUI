import React from "react";
import { navContent } from "./components/assets/data/Components";
import Header from "./components/landingPage/Header";
import { Hero } from "./components/landingPage/Hero";
import { About } from "./components/landingPage/About";
import { Choose } from "./components/landingPage/Choose";
import { Testimonial } from "./components/landingPage/Testimonial";
import Demo from "./components/landingPage/Demo";
import { Contact } from "./components/landingPage/Contact";
import Footer from "./components/landingPage/Footer";
import WhatsApp from "./components/WhatsApp";

export default function Home() {
  return (
    <main>
      <Header headerData={navContent} />
      <Hero display={false} />
      <About />
      <Choose />
      <Testimonial />
      <Demo />
      <Contact />
      <Footer footerData={navContent} />
      <WhatsApp />
    </main>
  );
}
