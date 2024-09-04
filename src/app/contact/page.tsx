import React from "react";
import Header from "../components/landingPage/Header";
import { navContent } from "../components/assets/data/Components";
import Footer from "../components/landingPage/Footer";
import { HeroContact } from "../components/landingPage/Hero";
import { Reveal3 } from "../components/animations/Text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, PlayCircle } from "lucide-react";
import WhatsApp from "../components/WhatsApp";

const Contact = () => {
  // const phoneNumber = "+2347064699173";
  // const phoneNumber2 = "+447983451470";
  const emailAddress = "info@purpledove.net";
  return (
    <div>
      <Header headerData={navContent} />
      <HeroContact />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10  lg:gap-24 items-center justify-between lg:pt-10 pb-24 lg:px-24 sm:px-8 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2>Contact us today and let us know what you need</h2>
          <Reveal3>
            <p className="max-w-lg xl:mt-3">
              We invite you to explore the transformative potential of
              PurpleDove ERP. Discover how our all-in-one platform can
              streamline your business operations, improve efficiency, and drive
              growth.
            </p>
          </Reveal3>
          <div className="flex items-center gap-2">
            <Link
              href="https://calendly.com/lassod/purpledove-webinar-session"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <PlayCircle className="w-5" />
                Book A Demo Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:gap-16">
          {/* <div className="flex flex-col gap-2 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="bg-[#F8E7F9] p-[5px] rounded-full w-12">
                <div className="bg-[#F5C3F7] flex items-center justify-center p-[5px] rounded-full w-full">
                  <Phone className="w-5 text-[#A700AF]" />
                </div>
              </div>
            </div>
            <h5 className="mt-2">Call Us On</h5>
            <Reveal3>
              <span className="underline-offset-4">
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </span>
            </Reveal3>
            <Reveal3>
              <span className="underline-offset-4">
                <a href={`tel:${phoneNumber2}`}>{phoneNumber2}</a>
              </span>
            </Reveal3>
          </div>  */}
          <div className="flex flex-col gap-2 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="bg-[#F8E7F9] p-[5px] rounded-full w-12">
                <div className="bg-[#F5C3F7] flex items-center justify-center p-[5px] rounded-full w-full">
                  <Mail className="w-5 text-[#A700AF]" />
                </div>
              </div>
            </div>
            <h5 className="mt-2">Send Us a Mail</h5>
            <Reveal3>
              <span className="underline-offset-4">
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </span>
            </Reveal3>
          </div>
        </div>
      </section>
      <Footer footerData={navContent} />
      <WhatsApp />
    </div>
  );
};

export default Contact;
