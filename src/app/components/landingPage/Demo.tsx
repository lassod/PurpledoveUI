import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import demoImage1 from "../assets/images/demoImage1.png";
import demoImage2 from "../assets/images/demoImage2.png";
import { Reveal3 } from "../animations/Text";
import Image from "next/image";

const Demo = () => {
	return (
		<section className="flex flex-col gap-10 items-center justify-between py-24 lg:px-24 px-8 max-w-screen-2xl mx-auto">
			<section className="grid grid-cols-2 gap-10 items-center justify-between">
				<div className="flex flex-col gap-8">
					<h2 className="max-w-md">Industries We Serve</h2>
					<Reveal3>
						<p className="max-w-lg">PurpleDove ERP is versatile and adaptable, serving a wide range of industries including General Services, Consultancy, Distribution & Sales, Real Estate, Manufacturing, Education, Hospitality, Healthcare, Agriculture, and Not-for-Profit organisations.</p>
					</Reveal3>
					<div className="flex items-center gap-5">
						<Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
							<Button className="flex items-center gap-2">
								Get Started
								<ArrowUpRight className="w-5" />
							</Button>
						</Link>
						<Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
							<Button variant={"outline"} className="flex items-center gap-2">
								<PlayCircle className="w-5" />
								Book A Demo Now
							</Button>
						</Link>
					</div>
				</div>
				<div className="relative">
					<Image className="w-full" src={demoImage1} alt="demoImage1" />
				</div>
				<Image className="max-w-[893px]" src={demoImage2} alt="demoImage2" />
			</section>
		</section>
	);
};

export default Demo;
