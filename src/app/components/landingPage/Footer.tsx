"use client";
import React from "react";
import Link from "next/link";
import Logo from "../assets/images/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FooterProps } from "../schema/Types";
import { Reveal3, Reveal5 } from "../animations/Text";
import { FacebookIcon, Instagram, Linkedin } from "lucide-react";

const Footer = ({ footerData }: FooterProps) => {
  return (
    <section className="bg-[#F6E5F7] py-24 lg:px-8 xl:px-24 px-4 flex flex-col gap-8 max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center border-b border-gray-300 pb-4">
        <Image src={Logo} alt="Logo" />

        <div className="flex items-center gap-8">
          <h4 className="hidden md:block">Ready to get started?</h4>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/lassod/purpledove-webinar-session"
          >
            <Button>Get started</Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
        <Reveal3>
          <p className="max-w-[320px]">
            Elevate your business to new heights with PurpleDove ERP.
          </p>
        </Reveal3>
        <p className="text-black max-w-[409px] font-medium">
          Our Address: Bookshop House 13th floor, 50/52 Broad Street, Marina,
          Lagos, Nigeria.
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:flex gap-4 sm:gap-9 flex-wrap">
        {footerData.map((item, index) => (
          <Link key={index} href={item.url}>
            <p className="text-black hover:text-[#A700AF] font-semibold">
              {item.title}
            </p>
          </Link>
        ))}
      </ul>
      <div className="mt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <Reveal3>
          <p>@ 2024 PurpleDove ERP. All rights reserved.</p>
        </Reveal3>
        <div className="flex gap-5">
          <Reveal5>
            <Link href="https://www.facebook.com/purpledoveerp">
              <FacebookIcon className="w-5" />
            </Link>
          </Reveal5>
          <Reveal5>
            <Link href="https://www.linkedin.com/company/purpledove">
              <Linkedin className="w-5" />
            </Link>
          </Reveal5>
          <Reveal5>
            <Link href=" https://instagram.com/purpledoveerp ">
              <Instagram className="w-5" />
            </Link>
          </Reveal5>
        </div>
      </div>
    </section>
  );
};

export default Footer;
