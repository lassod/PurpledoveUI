"use client";
import React from "react";
import Link from "next/link";
import Logo from "../assets/images/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { HeaderProps } from "../schema/Types";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = ({ headerData }: HeaderProps) => {
	return (
		<div className="z-50 fixed bg-[#fdfafdf5] top-0 right-0 left-0 shadow-sm">
			<div className="hidden lg:flex py-3 lg:pl-6 xl:pl-20 lg:pr-8 xl:pr-24 justify-between items-center max-w-screen-2xl mx-auto">
				<Image src={Logo} alt="Logo" />
				<ul className="flex gap-9">
					{headerData.map((item, index) => (
						<Link key={index} href={item.url}>
							<p className="hover:text-[#A700AF] hover:font-medium">{item.title}</p>
						</Link>
					))}
				</ul>
				<Link target="_blank" rel="noopener noreferrer" href="auth/signin">
					<Button>Get started</Button>
				</Link>
			</div>
			<div className="lg:hidden flex justify-between items-center pr-4 pl-3">
				<Image src={Logo} alt="Logo" />

				<MobileMenu headerData={headerData} />
			</div>
		</div>
	);
};

export default Header;

const MobileMenu = ({ headerData }: HeaderProps) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<MenuIcon className="w-[24px] h-[24px]" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col gap-3">
					{headerData.map((header) => (
						<section key={header.title}>
							<SheetClose asChild>
								<Link href={header.url}>{header.title}</Link>
							</SheetClose>
						</section>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};
