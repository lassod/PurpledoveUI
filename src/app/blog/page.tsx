import React from "react";
import Header from "../components/landingPage/Header";
import Footer from "../components/landingPage/Footer";
import featured from "../components/assets/images/blog/featured.jpg";
import Avatar from "../components/assets/images/Avatar.png";
import { blogData, navContent } from "../components/assets/data/Components";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Blog = () => {
	return (
		<div>
			<Header headerData={navContent} />
			<section className="flex flex-col gap-10 items-center justify-between pt-48 pb-0 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
				<div className="flex flex-col gap-3 w-full">
					<h5 className="text-[#A700AF]">Our blog</h5>
					<h2>Resources and insights</h2>
					<p className="mt-3">The latest industry news, interviews, technologies, and resources.</p>
				</div>

				<div className="relative overflow-hidden w-full bg-[#11101163] rounded-2xl h-[343px] lg:h-[720px] xl:h-[920px]">
					<Image className="absolute z-[-10] w-full h-full sm:h-auto" src={featured} alt="featured" />
					<div className="absolute bottom-0 flex flex-col justify-between items-start p-5 md:p-10">
						<div>
							<h4 className="text-white">Balancing Business and Personal Life: Essential Tips Foe Owners</h4>
							<p className="text-white mt-3">As a small business owner, finding a balance between work and life can often feel like an elusive goal. The demands of running a business</p>
						</div>
						<div className="hidden lg:flex gap-10 mt-10">
							<div className="flex flex-col gap-4">
								<h5 className="text-white">Written by</h5>
								<div className="flex items-center gap-3">
									<Image src={Avatar} alt="Avatar" />
									<h5 className="text-white">Amélie Laurent</h5>
								</div>
							</div>
							<div className="flex flex-col gap-7">
								<h5 className="text-white">Published on</h5>
								<h5 className="text-white">10 April 2024</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center justify-between py-24 px-4 xl:px-24 lg:px-8 max-w-screen-2xl mx-auto">
				{blogData.map((item) => (
					<div className="flex flex-col items-start justify-start gap-4" key={item.title}>
						<div className="w-full">
							<Image className="w-full" src={item.image} alt="Image" />
						</div>
						<h5>{item.title}</h5>
						<p>{item.text}</p>
						<div className="flex items-center gap-3">
							<Image src={Avatar} alt="Avatar" />
							<div>
								<p className="text-black font-medium">Olivia Rhye</p>
								<p>20 Jan 2024</p>
							</div>
						</div>
						<div className="flex ">
							<Button variant={"ghost"} className="flex items-center gap-2">
								Read post
								<ArrowUpRight className="w-5" />
							</Button>
						</div>
					</div>
				))}
			</section>
			<section className="hidden sm:block pb-24 px-4 xl:px-24 lg:px-8 max-w-screen-2xl mx-auto">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#" isActive>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</section>
			<Footer footerData={navContent} />
		</div>
	);
};

export default Blog;
