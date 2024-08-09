import React from "react";
import Header from "../components/landingPage/Header";
import Footer from "../components/landingPage/Footer";
import { navContentPromo } from "../components/assets/data/Components";
import { Hero } from "../components/landingPage/Hero";
import { AboutPromo } from "../components/landingPage/About";
import { ChoosePromo } from "../components/landingPage/Choose";
import Features from "../components/landingPage/Features";
import Explore from "../components/landingPage/Explore";
import { TestimonialPromo } from "../components/landingPage/Testimonial";
import { ContactPromo } from "../components/landingPage/Contact";
import WhatsApp from "../components/WhatsApp";

const PromoLandingPage = () => {
  return (
    <div className="bg-[#FDFAFD]">
      <Header headerData={navContentPromo} />
      <Hero display={true} />
      <AboutPromo />
      <ChoosePromo />

      <Features display={true} heading={true} />
      <Explore />
      <TestimonialPromo />
      <ContactPromo />
      <Footer footerData={navContentPromo} />
      <WhatsApp />
    </div>
  );
};

export default PromoLandingPage;
