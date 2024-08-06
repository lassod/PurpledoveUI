import React from "react";
import Header from "../components/landingPage/Header";
import { navContent } from "../components/assets/data/Components";
import Footer from "../components/landingPage/Footer";
import { HeroContact } from "../components/landingPage/Hero";
import { Reveal3 } from "../components/animations/Text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, PlayCircle } from "lucide-react";

const Contact = () => {
	return (
		<div>
			<Header headerData={navContent} />
			<HeroContact />
			<section className="grid grid-cols-2 gap-24 items-center justify-between py-24 lg:px-24 px-8 max-w-screen-2xl mx-auto">
				<div className="flex flex-col gap-8">
					<h2>Contact us today and let us know what you need</h2>
					<Reveal3>
						<p className="max-w-lg xl:mt-3">We invite you to explore the transformative potential of PurpleDove ERP. Discover how our all-in-one platform can streamline your business operations, improve efficiency, and drive growth.</p>
					</Reveal3>
					<div className="flex items-center gap-2">
						<Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
							<Button className="flex items-center gap-2">
								<PlayCircle className="w-5" />
								Book A Demo Now
							</Button>
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-16">
					<div className="flex flex-col gap-2 max-w-sm">
						<div className="flex items-center gap-2">
							<div className="bg-[#F8E7F9] p-[5px] rounded-full w-12">
								<div className="bg-[#F5C3F7] flex items-center justify-center p-[5px] rounded-full w-full">
									<Phone className="w-5 text-[#A700AF]" />
								</div>
							</div>
						</div>
						<h5 className="mt-2">Call Us On</h5>
						<Reveal3>
							<p className="text-center">+2347064699173 </p>
						</Reveal3>
					</div>
					<div className="flex flex-col gap-2 max-w-sm">
						<div className="flex items-center gap-2">
							<div className="bg-[#F8E7F9] p-[5px] rounded-full w-12">
								<div className="bg-[#F5C3F7] flex items-center justify-center p-[5px] rounded-full w-full">
									<Mail className="w-5 text-[#A700AF]" />
								</div>
							</div>
						</div>
						<h5 className="mt-2">Call Us On</h5>
						<Reveal3>
							<p className="text-center">+2347064699173 </p>
						</Reveal3>
					</div>
				</div>
			</section>
			<Footer footerData={navContent} />
		</div>
	);
};

export default Contact;
