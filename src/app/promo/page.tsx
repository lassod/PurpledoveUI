import React from "react";
import Header from "../components/landingPage/Header";
import Footer from "../components/landingPage/Footer";
import { navContent, navContentPromo } from "../components/assets/data/Components";
import { Hero } from "../components/landingPage/Hero";
import { AboutPromo } from "../components/landingPage/About";
import { ChoosePromo } from "../components/landingPage/Choose";
import Features from "../components/landingPage/Features";
import Explore from "../components/landingPage/Explore";
import { TestimonialPromo } from "../components/landingPage/Testimonial";
import { ContactPromo } from "../components/landingPage/Contact";

const PromoLandingPage = () => {
	return (
		<div className="bg-[#FDFAFD]">
			<Header headerData={navContentPromo} />
			<Hero display={true} />
			<AboutPromo />
			<ChoosePromo />
			<Features display={true} />
			<Explore />
			<TestimonialPromo />
			<ContactPromo />
			<Footer footerData={navContentPromo} />
		</div>
	);
};

export default PromoLandingPage;
