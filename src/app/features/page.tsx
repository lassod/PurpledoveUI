import React from "react";
import Header from "../components/landingPage/Header";
import {
  navContent,
  FOOTER_CONTENT,
} from "../components/assets/data/Components";
import Footer from "../components/landingPage/Footer";
import { HeroFeatures } from "../components/landingPage/Hero";

import Features from "../components/landingPage/Features";
import WhatsApp from "../components/WhatsApp";

const FeaturesPage = () => {
  return (
    <div>
      <Header headerData={navContent} />
      <HeroFeatures />
      <Features display={false} />
      <Footer footerData={FOOTER_CONTENT} />
      <WhatsApp />
    </div>
  );
};

export default FeaturesPage;
