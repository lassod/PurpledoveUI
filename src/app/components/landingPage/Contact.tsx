"use client";
import React from "react";
import { Reveal1, Reveal3 } from "../animations/Text";
import Image from "next/image";
import ContactImage from "../assets/images/contact.png";
import Arrow from "../assets/images/Arrow.svg";
import Ornament from "../assets/images/Ornament.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Headphones, PhoneCall } from "lucide-react";

export const Contact = () => {
	return (
		<section className="relative py-24 lg:px-8 xl:px-24 px-4 hidden lg:block max-w-screen-2xl mx-auto">
			<div className="bg-[#6C0871] rounded-xl p-10 flex gap-8">
				<div className=" relative flex flex-col gap-8 justify-start items-start max-w-[60%]">
					<Reveal1>
						<h2 className="text-white">Contact us today and let us know what you need</h2>
					</Reveal1>
					<Reveal3>
						<p className="text-white max-w-[80%]">We invite you to explore the transformative potential of PurpleDove ERP. Discover how our all-in-one platform can streamline your business operations, improve efficiency, and drive growth.</p>
					</Reveal3>
					<Link href="https://calendly.com/lassod/purpledove-webinar-session" target="_blank" rel="noopener noreferrer">
						<Button variant={"secondary"} className="mt-6">
							Contact Us
						</Button>
					</Link>
					<div className="absolute right-[-30%] top-0 ">
						<Image className="mt-14 h-14" src={Arrow} alt="Arrow" />
					</div>
				</div>
			</div>
			<Image className="absolute max-w-[440px] xl:max-w-[640px] bottom-0 right-0" src={ContactImage} alt="ContactImage" />
		</section>
	);
};

export const ContactPromo = () => {
	return (
		<section className="relative pt-0 xl:pt-24 pb-24 px-4 max-w-screen-2xl mx-auto overflow-hidden">
			<div className="flex flex-col items-center gap-16">
				<Reveal1>
					<h2 className="max-w-[694px] text-center">Contact us today and let us know what you need</h2>
				</Reveal1>
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
					<div className="border bg-white rounded-xl py-7 px-5 flex flex-col gap-6 w-full md:max-w-[354px] items-center">
						<PhoneCall className="text-[#A700AF]" />
						<div className="flex flex-col items-center gap-3">
							<h5>Contact Us</h5>
							<p className="text-center">Contact us to seek help from us, we will help you as soon as possible</p>
							<p className="text-center">+234 706 469 9173 / +44 7983 451470</p>
							<Button className="mt-6">Call us now</Button>
						</div>
					</div>
					<div className="border bg-white rounded-xl py-7 px-5 flex flex-col gap-6 w-full md:max-w-[354px] items-center">
						<Headphones className="text-[#A700AF]" />
						<div className="flex flex-col items-center gap-3">
							<h5>Customer Service</h5>
							<p className="text-center">Contact us to seek help from us, we will help you as soon as possible</p>
							<p className="text-center">info.purpledove.net@gmail.com</p>
							<Button className="mt-6">Contact us</Button>
						</div>
					</div>
				</div>
			</div>
			<Image className="absolute hidden xl:block bottom-0 right-0" src={Ornament} alt="Ornament" />
			<Image className="absolute hidden xl:block top-0 left-0 rotate-180" src={Ornament} alt="Ornament" />
		</section>
	);
};
