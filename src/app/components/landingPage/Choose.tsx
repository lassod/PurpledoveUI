import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal1, Reveal2, Reveal3 } from "../animations/Text";
import ChooseImage from "../assets/images/ChooseImage.png";
import Image from "next/image";
import { chooseData, chooseDataPromo } from "../assets/data/Components";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Choose = () => {
	return (
		<section className="flex flex-col gap-16 py-24 md:px-24 px-8 max-w-screen-2xl mx-auto">
			<div className="grid grid-flow-col gap-44 items-center">
				<Reveal1>
					<h2 className="max-w-sm 2xl:max-w-md">Why Choose PurpleDove ERP?</h2>
				</Reveal1>
				<Reveal3>
					<p>Improve Your Business with our Cloud-based ERP Solution, Whether you&apos;re managing finance, inventory, or customer relationships, PurpleDove ERP offers an intuitive, user-friendly platform that consolidates all your processes into a single, streamlined system.</p>
				</Reveal3>
			</div>

			<div className="grid grid-cols-2 gap-20">
				<div className="relative overflow-hidden rounded-2xl">
					<Image className="absolute z-[-10] w-full" src={ChooseImage} alt="ChooseImage" />
					<div className="flex flex-col justify-between items-start p-6 w-full h-full">
						<div>
							<p className="text-white">Ready For The Future</p>
							<h3 className="text-white mt-4">Optimizing business processes effortlessly</h3>
						</div>
						<Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
							<Button className="flex items-center gap-2">
								Try PurpleDove For Free
								<ArrowUpRight className="w-5" />
							</Button>
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					{chooseData.map((item) => (
						<Reveal2 key={item.title}>
							<div className="flex items-start gap-5">
								<div className="bg-[#FBF2FB] flex items-center justify-center p-1 rounded-full w-10">
									<Check className="w-5 text-[#A700AF]" />
								</div>
								<div>
									<h5 className="mb-1">{item.title}</h5>
									<p>{item.text}</p>
								</div>
							</div>
						</Reveal2>
					))}
				</div>
			</div>
		</section>
	);
};

export const ChoosePromo = () => {
	return (
		<section className="grid grid-cols-2 gap-16 items-center justify-between py-24 lg:px-24 px-8 max-w-screen-2xl mx-auto">
			<div className="flex flex-col gap-8">
				<h2 className="max-w-md">Why Choose PurpleDove ERP?</h2>
				<Reveal3>
					<p className="max-w-lg">Discover the transformative power of PurpleDove ERP today and take the first step toward a smarter, more efficient business.</p>
				</Reveal3>
				<div className="flex items-center gap-5">
					<Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
						<Button className="flex items-center gap-2">
							Book A Demo Today
							<ArrowUpRight className="w-5" />
						</Button>
					</Link>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				{chooseDataPromo.map((item) => (
					<div className="flex flex-col gap-3 border rounded-xl p-6 bg-white" key={item.title}>
						<div className="bg-[#FBF2FB] flex items-center justify-center p-1 rounded-full w-9">
							<Check className="w-5 text-[#A700AF]" />
						</div>
						<h5 className="mb-1">{item.title}</h5>
						<Reveal3>
							<p>{item.text}</p>
						</Reveal3>
					</div>
				))}
			</div>
		</section>
	);
};
