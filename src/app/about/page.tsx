import React from "react";
import Header from "../components/landingPage/Header";
import { aboutData, navContent } from "../components/assets/data/Components";
import Footer from "../components/landingPage/Footer";
import { HeroAbout } from "../components/landingPage/Hero";
import aboutImg2 from "../components/assets/images/aboutImg2.png";
import { Reveal1, Reveal3 } from "../components/animations/Text";
import Image from "next/image";
import Contact from "../components/landingPage/Contact";

const About = () => {
	return (
		<div>
			<Header headerData={navContent} />
			<HeroAbout />
			<section className="grid grid-cols-2 items-center gap-16 py-24 md:px-24 px-8 max-w-screen-2xl mx-auto">
				<div className="rounded-xl overflow-hidden">
					<Image src={aboutImg2} alt="aboutImg2" />
				</div>
				<div className="flex flex-col gap-5">
					<Reveal1>
						<h2>About us</h2>
					</Reveal1>
					<p>
						The journey of PurpleDove began with a simple yet profound idea – to develop a dynamic and comprehensive software solution that could adapt to the evolving needs of modern enterprises in Africa. Our cloud-based Enterprise Resource Planning (ERP) solution is designed to streamline the diverse needs of businesses. Whether SME, a large enterprise, or a public entity, PurpleDove ERP provides a scalable tailored solution that enhances daily business operations thereby automating repetitive tasks and enhancing efficiency What sets us apart is our commitment to understanding that every business is unique, with its own set of challenges, opportunities, and goals. That’s why our first step is always to take the time to listen, learn, and gain a deep understanding of your operational processes, workflows, pain points, and aspirations. Our modular approach allows you to choose the features and functionalities that matter most to your business, ensuring that you get a solution that is perfectly aligned with your goals and
						objectives.
					</p>
				</div>
			</section>
			<section className="py-24 md:px-24 px-8 max-w-screen-2xl mx-auto">
				{aboutData.map((item) => (
					<div className={`grid grid-cols-2 gap-16 ${item.top && "pb-16"} ${item.bottom && "pt-16"} ${item.border && "border-t border-b py-16"}`} key={item.title}>
						<h4>{item.title}</h4>
						<Reveal3>
							<p>{item.text}</p>
						</Reveal3>
					</div>
				))}
			</section>

			<Contact />
			<Footer footerData={navContent} />
		</div>
	);
};

export default About;
