import React from "react";
import { Reveal3 } from "../animations/Text";
import { Counter } from "../animations/Counter";
import ExploreImg from "../assets/images/promo/promo-4.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Explore = () => {
	return (
		<section className="relative grid grid-cols-2 gap-10 items-center justify-between py-24 lg:pl-24 pl-8 max-w-screen-2xl mx-auto">
			<div className="flex flex-col items-start gap-10 max-w-xl">
				<h5 className="text-gray-400 font-medium">EXPLORE</h5>
				<h2>See PurpleDove ERP in Action</h2>
				<Reveal3>
					<p>Experience the power of PurpleDove ERP with a personalised demo. Our experts will show you how our ERP system can transform your business operations and drive growth.</p>
				</Reveal3>
				<div className="flex items-center justify-between gap-14">
					<div className="flex flex-col items-center gap-1">
						<Counter target={3} className="text-[#A700AF]" />
						<p>YEARS EXISTENCE</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Counter target={2.5} className="text-[#ab36b1]" />
						<p>ACTIVE USERS</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Counter target={250} className="text-[#ab36b1]" />
						<p>HAPPY CLIENTS</p>
					</div>
				</div>
				<Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
					<Button className="flex items-center gap-2">
						Get started
						<ArrowUpRight className="w-5" />
					</Button>
				</Link>
			</div>
			<div className="relative max-w-[894px] overflow-hidden">
				<Image className="w-full" src={ExploreImg} alt="ExploreImg" />
			</div>
		</section>
	);
};

export default Explore;
