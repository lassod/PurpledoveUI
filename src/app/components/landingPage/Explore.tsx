import React from "react";
import { Reveal3 } from "../animations/Text";
//import { Counter } from "../animations/Counter";
import ExploreImg from "../assets/images/promo/promo-4.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Explore = () => {
	return (
		<section className="relative grid lg:grid-cols-2 py-8 lg:py-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto gap-8 md:gap-16">
			<div className="flex flex-col items-start gap-6 lg:gap-10 max-w-xl">
				<h5 className="text-gray-400 font-medium">EXPLORE</h5>
				<h2>See PurpleDove ERP in Action</h2>
				<Reveal3>
					<p>Experience the power of PurpleDove ERP with a personalised demo. Our experts will show you how our ERP system can transform your business operations and drive growth.</p>
				</Reveal3>
				{ /*<div className="flex items-center justify-between gap-14">
					<div className="flex flex-col items-center justify-center gap-1">
						<Counter target={3} className="text-[#A700AF]" />
						<p className="text-center">YEARS EXISTENCE</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Counter target={2.5} className="text-[#ab36b1]" />
						<p className="text-center">ACTIVE USERS</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Counter target={250} className="text-[#ab36b1]" />
						<p className="text-center">HAPPY CLIENTS</p>
					</div>
				</div> */}
				<Link href="https://calendly.com/lassod/purpledove-webinar-session" target="_blank" rel="noopener noreferrer">
					<Button className="flex items-center gap-2">
						Book A Demo Now
						<ArrowUpRight className="w-5" />
					</Button>
				</Link>
			</div>
			<div className="rounded-full rounded-br-none relative max-w-[894px] shadow-2xl shadow-[#F6E5F7] overflow-hidden">
				<Image className="w-full" src={ExploreImg} alt="ExploreImg" />
			</div>
		</section>
	);
};

export default Explore;
