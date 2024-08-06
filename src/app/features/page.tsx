import React from "react";
import Header from "../components/landingPage/Header";
import { navContent } from "../components/assets/data/Components";
import Footer from "../components/landingPage/Footer";
import { HeroFeatures } from "../components/landingPage/Hero";

import Features from "../components/landingPage/Features";

const FeaturesPage = () => {
	return (
		<div>
			<Header headerData={navContent} />
			<HeroFeatures />
			<Features display={false} />
			<Footer footerData={navContent} />
		</div>
	);
};

export default FeaturesPage;
