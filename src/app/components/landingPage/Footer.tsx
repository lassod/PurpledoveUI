"use client";
import React from "react";
import Link from "next/link";
import Logo from "../assets/images/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FooterProps } from "../schema/Types";
import { Reveal3, Reveal5 } from "../animations/Text";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";

const Footer = ({ footerData }: FooterProps) => {
	return (
		<section className="bg-[#F6E5F7] py-24 lg:px-8 xl:px-24 px-4 flex flex-col gap-8 max-w-screen-2xl mx-auto">
			<div className="flex justify-between items-center border-b border-gray-300 pb-4">
				<Image src={Logo} alt="Logo" />

				<div className="flex items-center gap-8">
					<h4 className="hidden md:block">Ready to get started?</h4>
					<Link target="_blank" rel="noopener noreferrer" href="auth/signin">
						<Button>Get started</Button>
					</Link>
				</div>
			</div>
			<Reveal3>
				<p>Elevate your business to new heights with PurpleDove ERP.</p>
			</Reveal3>
			<ul className="flex gap-9">
				{footerData.map((item, index) => (
					<Link key={index} href={item.url}>
						<p className="text-black hover:text-[#A700AF] font-semibold">{item.title}</p>
					</Link>
				))}
			</ul>
			<div className="mt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
				<Reveal3>
					<p>© 2024 Oyoyo events. All rights reserved.</p>
				</Reveal3>
				<div className="flex gap-5">
					<Reveal5>
						<Link href="https://www.facebook.com/oyoyoapp">
							<FacebookIcon className="w-5" />
						</Link>
					</Reveal5>
					<Reveal5>
						<Link href="https://www.youtube.com/channel/UCGBaVqXjFh2fPpOkd2I2-vQ">
							<Twitter className="w-5" />
						</Link>
					</Reveal5>
					<Reveal5>
						<Link href=".https://www.instagram.com/oyoyoeventsapp?igsh=MWk1MDIycGl0YWF6ZA==">
							<Instagram className="w-5" />
						</Link>
					</Reveal5>
				</div>
			</div>
		</section>
	);
};

export default Footer;
