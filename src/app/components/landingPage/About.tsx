import React from "react";
import { ShieldCheck } from "lucide-react";
import { Reveal1, Reveal3 } from "../animations/Text";
import Star from "../assets/images/Star.png";
import PromoImg from "../assets/images/promo/promo-2.png";
import Image from "next/image";
import { Counter } from "../animations/Counter";

export const About = () => {
	const text = "OPTIMIZE   YOUR  BUSINESS   TODAY  ";

	const animatedText = text.split("").map((char, i) => (
		<h3 className="absolute left-[50%]" key={i} style={{ transform: `rotate(${i * 10.3}deg)` }}>
			{char}
		</h3>
	));
	return (
		<section className="bg-[#F6E5F7] flex flex-col md:flex-row gap-24 items-center justify-between py-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
			<div className="flex flex-col gap-8 max-w-4xl">
				<Reveal1>
					<h2>The ultimate all-in-one solution designed for African businesses.</h2>
				</Reveal1>
				<Reveal3>
					<p>PurpleDove ERP is designed to streamline your business operations; From account to inventory, payroll to asset, finance to HR, CRM to Sales, experience an intuitive and powerful ERP solution that scales with your business requirements.</p>
				</Reveal3>
				<div className="flex items-center gap-2">
					<div className="bg-[#FCCFFD] p-[4px] rounded-full w-14 md:w-10">
						<div className="bg-[#F5C3F7] p-[3px] rounded-full w-full">
							<ShieldCheck className="w-full text-[#A700AF]" />
						</div>
					</div>
					<div className="font-medium text-black">We are in compliance with the Nigeria Data Protection Requirements</div>
				</div>
			</div>

			<div className="hidden md:visible">
				<div className="relative w-[201px] h-[201px] rounded-full flex items-center justify-center">
					<Image src={Star} alt="Star" />
					<div className="animate-text absolute w-full h-full">{animatedText}</div>
				</div>
			</div>
		</section>
	);
};

export const AboutPromo = () => {
	return (
		<section className="bg-[#F6E5F7] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center justify-between py-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
			<div className="relative max-w-[447px] border-4 mx-auto">
				<Image className="max-w-full" src={PromoImg} alt="PromoImg" />
				<div className="w-[100px] sm:w-[224px] rounded-lg p-6 absolute top-16 lg:top-auto lg:bottom-10 right-[-10px] sm:right-[-60px] bg-white">
					<Counter target={250} className="mb-4" />
					<p className="text-black">Happy Clients</p>
				</div>
			</div>
			<div className="flex flex-col gap-8 max-w-4xl">
				<Reveal1>
					<h2>Are you ready to elevate your business to new heights of efficiency and productivity? </h2>
				</Reveal1>
				<Reveal3>
					<p>PurpleDove ERP is an all-in-one ERP system tailored to meet your unique needs, streamline your operations, and drive unparalleled growth. With PurpleDove ERP, you can manage everything including accounting, payroll, inventory, assets, projects, customer relationship management (CRM), human resource management, sales, procurement, data analytics, point-of-sale (POS), custom reporting, quality control, and manufacturing within a user-friendly and cost-effective platform.</p>
				</Reveal3>
			</div>
		</section>
	);
};
