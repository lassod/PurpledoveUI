"use client";
import React from "react";
import Link from "next/link";
import Logo from "../assets/images/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { HeaderProps } from "../schema/Types";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = ({ headerData }: HeaderProps) => {
	return (
		<div id="home" className="z-50 fixed bg-[#fdfafdf5] top-0 right-0 left-0 shadow-sm">
			<div className="hidden lg:flex py-3 pl-20 pr-24 justify-between items-center max-w-screen-2xl mx-auto">
				<Image src={Logo} alt="Logo" />
				<ul className="flex gap-9">
					{headerData.map((item, index) => (
						<Link key={index} href={item.url}>
							<p className="hover:text-[#A700AF] hover:font-medium">{item.title}</p>
						</Link>
					))}
				</ul>
				<div className="flex items-center gap-3">
					<Link target="_blank" rel="noopener noreferrer" href="auth/signin" className="getInTouch">
						<Button>Get started</Button>
					</Link>
				</div>

				{/* MOBILE MENU */}

				{/* <div className={`mobileMenu ${activeMenu}`}>
					<div className="dark_bg"></div>
					<div className="hamburger" onClick={handleMenu}>
						<Image src={Hamburger} alt="Hamburger" onClick={handleClose} />
					</div>
					<Image src={Close} alt="Close" className="close" onClick={handleClose} />
					<div className="navContent">
						{navContent.map((item, index) => {
							return (
								<Link key={index} href={item.url} onClick={handleClose}>
									{item.title}
								</Link>
							);
						})}
						<span className="flex w-full items-center px-0">
							<Link rel="noopener noreferrer" href="auth/login" className="w-full">
								<Button variant={"secondary"}>Login in</Button>
							</Link>
							<Link rel="noopener noreferrer" href="auth/signup" className="w-full">
								<Button variant={"secondary"}>Sign up</Button>
							</Link>
						</span>
					</div>
				</div> */}
			</div>
			<div className="lg:hidden">
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
