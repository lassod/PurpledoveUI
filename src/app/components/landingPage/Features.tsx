import React from "react";
import { Reveal1, Reveal3 } from "../animations/Text";
import Image from "next/image";
import { featuresData } from "../assets/data/Components";
import { AddContentProps } from "../schema/Types";

const Features = ({ display }: AddContentProps) => {
	return (
		<section className={`lg:flex flex-col gap-16 py-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto ${display && "hidden"}`}>
			<div className="flex flex-col justify-between items-center gap-4">
				<p className="text-[#A700AF] font-medium">Features</p>
				<Reveal1>
					<h2>Explore Our Comprehensive Modules</h2>
				</Reveal1>
			</div>
			<div className="grid grid-cols-3 gap-20">
				{featuresData.map((item) => (
					<div className="flex flex-col items-center justify-center gap-2 max-w-sm" key={item.title}>
						<div className="flex items-center gap-2">
							<div className={`p-[5px] rounded-full w-10 ${display ? "bg-white" : "bg-[#F8E7F9]"}`}>
								<div className={`flex items-center justify-center p-[5px] rounded-full w-full ${display ? "bg-[#0A0F290A]" : "bg-[#F5C3F7]"}`}>{display ? <Image className="w-4" src={item.icon2} alt="icon" /> : <Image className="w-4" src={item.icon} alt="icon" />}</div>
							</div>
						</div>
						<h5 className="mt-2">{item.title}</h5>
						<Reveal3>
							<p className="text-center">{item.text}</p>
						</Reveal3>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
