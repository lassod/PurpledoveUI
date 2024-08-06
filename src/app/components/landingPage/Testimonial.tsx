"use client";
import React from "react";
import { Reveal1, Reveal3 } from "../animations/Text";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { testimonialData, testimonialDataPromo } from "../assets/data/Components";
import Quote from "../assets/images/quote.svg";
import Stars from "../assets/images/stars.png";
import Image from "next/image";

export const Testimonial = () => {
	const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
	return (
		<Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
			<section className="flex flex-col gap-6 md:gap-16 py-8 lg:py-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto overflow-hidden">
				<div className="flex justify-between items-center gap-8">
					<div className="hidden md:block">
						<Reveal1>
							<h2>What our clients say</h2>
						</Reveal1>
						<Reveal3>
							<p className="mt-4 max-w-xl">We’ve helped countless businesses streamline their operations and achieve remarkable growth.</p>
						</Reveal3>
					</div>
					<div className="flex flex-col justify-between items-center gap-4 md:hidden">
						<p className="text-[#A700AF] font-medium">TESTIMONIALS</p>
						<Reveal1>
							<h2 className="max-w-[694px] text-center">What Our Clients Say About PurpleDove</h2>
						</Reveal1>
					</div>
					<div className="hidden md:flex gap-4 items-center">
						<CarouselNext />
						<CarouselPrevious />
					</div>
				</div>
				<CarouselContent className="hidden md:flex relative gap-10">
					{testimonialData.map((item) => (
						<CarouselItem key={item.number} className="relative max-w-[838px] h-[470px] p-0 rounded-lg overflow-hidden">
							<div className="relative border-2 border-gray-200 flex h-full flex-col justify-between rounded-xl gap-4 px-14 py-10">
								<div className="flex flex-col gap-4">
									<Image className="w-8" src={Quote} alt="Quote" />
									<h4>{item.title}</h4>
									<p className="mt-4">{item.text}</p>
								</div>
								<div className="flex flex-col gap-2">
									<h5 className="text-black">{item.name}</h5>
									<p>{item.position}</p>
								</div>
								<Image className="absolute bottom-0 right-0 " src={item.image} alt="Number" />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="w-[7500px] flex gap-6 md:hidden">
					<div className="testimonial-slider2 flex gap-6 w-[4000px]">
						{testimonialDataPromo.map((item) => (
							<div className="border bg-white rounded-xl p-10 flex flex-col gap-4 w-[471px]" key={item.name}>
								<div className="flex gap-4 items-center">
									<Image className="w-" src={item.image} alt="icon" />
									<div>
										<h5 className="mt-2">{item.name}</h5>
										<p>Business Owner</p>
									</div>
								</div>
								<p>{item.text}</p>
								<Image className="w-" src={Stars} alt="Stars" />
							</div>
						))}
					</div>
					<div className="testimonial-slider flex gap-6  w-[4000px]">
						{testimonialDataPromo.map((item) => (
							<div className="border bg-white rounded-xl p-10 flex flex-col gap-2 w-[471px]" key={item.name}>
								<div className="flex gap-4 items-center">
									<Image className="w-" src={item.image} alt="icon" />
									<div>
										<h5 className="mt-2">{item.name}</h5>
										<p>Business Owner</p>
									</div>
								</div>
								<p>{item.text}</p>
								<Image className="w-" src={Stars} alt="Stars" />
							</div>
						))}
					</div>
				</div>
			</section>
		</Carousel>
	);
};

export const TestimonialPromo = () => {
	return (
		<section className="flex flex-col gap-16 py-24 max-w-screen-2xl mx-auto overflow-hidden">
			<div className="flex flex-col justify-between items-center gap-4 px-4">
				<p className="text-[#A700AF] font-medium">TESTIMONIALS</p>
				<Reveal1>
					<h2 className="max-w-[694px] text-center">What Our Clients Say About PurpleDove</h2>
				</Reveal1>
			</div>
			<div className="w-[7400px] flex gap-6">
				<div className="testimonial-slider2 flex gap-6 w-[4000px]">
					{testimonialDataPromo.map((item) => (
						<div className="border bg-white rounded-xl p-10 flex flex-col gap-4 w-[471px]" key={item.name}>
							<div className="flex gap-4 items-center">
								<Image className="w-" src={item.image} alt="icon" />
								<div>
									<h5 className="mt-2">{item.name}</h5>
									<p>Business Owner</p>
								</div>
							</div>
							<p>{item.text}</p>
							<Image className="w-" src={Stars} alt="Stars" />
						</div>
					))}
				</div>
				<div className="testimonial-slider flex gap-6  w-[4000px]">
					{testimonialDataPromo.map((item) => (
						<div className="border bg-white rounded-xl p-10 flex flex-col gap-2 w-[471px]" key={item.name}>
							<div className="flex gap-4 items-center">
								<Image className="w-" src={item.image} alt="icon" />
								<div>
									<h5 className="mt-2">{item.name}</h5>
									<p>Business Owner</p>
								</div>
							</div>
							<p>{item.text}</p>
							<Image className="w-" src={Stars} alt="Stars" />
						</div>
					))}
				</div>
			</div>
			<div className="border-4 w-[7400px] flex flex-row-reverse">
				<div className="testimonial-slider3 flex gap-6 w-[4000px]">
					{testimonialDataPromo.map((item) => (
						<div className="border bg-white rounded-xl p-10 flex flex-col gap-4 w-[471px]" key={item.name}>
							<div className="flex gap-4 items-center">
								<Image className="w-" src={item.image} alt="icon" />
								<div>
									<h5 className="mt-2">{item.name}</h5>
									<p>Business Owner</p>
								</div>
							</div>
							<p>{item.text}</p>
							<Image className="w-" src={Stars} alt="Stars" />
						</div>
					))}
				</div>
				<div className="testimonial-slider4 flex gap-6 w-[4000px]">
					{testimonialDataPromo.map((item) => (
						<div className="border bg-white rounded-xl p-10 flex flex-col gap-2 w-[471px]" key={item.name}>
							<div className="flex gap-4 items-center">
								<Image className="w-" src={item.image} alt="icon" />
								<div>
									<h5 className="mt-2">{item.name}</h5>
									<p>Business Owner</p>
								</div>
							</div>
							<p>{item.text}</p>
							<Image className="w-" src={Stars} alt="Stars" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
