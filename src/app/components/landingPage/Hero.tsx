"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/images/heroImage.png";
import heroImage2 from "../assets/images/promo/promo-1.png";
// import heroLogos from "../assets/images/heroLogos.png";
import ContactImage from "../assets/images/ContactImage.svg";
import featuresImg from "../assets/images/featuresImg.png";
import aboutImg from "../assets/images/aboutImg.png";
import aboutLogo from "../assets/images/aboutLogo.png";
import eclipse from "../assets/images/eclipse.png";
import { Reveal3 } from "../animations/Text";
import Image from "next/image";
// import { Counter } from "../animations/Counter";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
// import { google } from "googleapis";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { formSchemaContact } from "../schema/Forms";
import { AddContentProps } from "../schema/Types";

export const Hero = ({ display }: AddContentProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between pt-36 sm:pt-48 pb-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-8 items-start">
        {/* {display && (
					<Link href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-[#F6E5F7] p-2 rounded-full max-w-[404px]">
						<p className="text-white font-medium bg-[#A700AF] py-1 px-4 rounded-full">NEW</p>
						<p className="text-black text-[13px] sm:text-[14px] font-medium">Visit the PurpleDove website</p>
						<ChevronRight />
					</Link>
				)} */}
        <h1>Transform Your Business With PurpleDove ERP</h1>
        <Reveal3>
          <p className="max-w-lg xl:mt-3">
            Experience the unparalleled efficiency and growth potential with our
            cost-effective ERP solution, tailored to your needs.
          </p>
        </Reveal3>

        <Link
          href="https://calendly.com/lassod/purpledove-webinar-session"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center gap-2">
            Schedule A Demo
            <ArrowUpRight className="w-5" />
          </Button>
        </Link>
      </div>
      <div className="relative">
        {display ? (
          <Image className="w-full" src={heroImage2} alt="heroImage2" />
        ) : (
          <Image className="w-full" src={heroImage} alt="heroImage" />
        )}

        {/* {!display && (
					<div className="rounded-lg p-6 absolute bottom-6 right-6 bg-white">
						<Image className="w-full" src={heroLogos} alt="heroLogos" />
						<Counter target={200} className="mt-12 mb-2" />
						<p className="text-black">Happy Clients</p>
					</div>
				)} */}
      </div>
    </section>
  );
};

export const HeroFeatures = () => {
  return (
    <section className="relative grid-cols-1 grid md:grid-cols-2 gap-10 items-center justify-between pt-36 sm:pt-48 pb-20 lg:pb-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-10 max-w-md">
        <h2>Discover Our Powerful Modules</h2>
        <Reveal3>
          <p>
            Empowering your enterprise with cutting-edge tools to maximize
            productivity and streamline your operations.
          </p>
        </Reveal3>
        {/* <div className="flex items-center justify-between gap-2">
					<div className="flex flex-col items-center gap-1">
						<Counter target={3} className="" />
						<p>Years existence</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<h3>2.5k</h3>
						<p>Active users</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Counter target={250} className="" />
						<p>Happy clients</p>
					</div>
				</div> */}
      </div>
      <div className="h-[367px] lg:h-[425px] rounded-[30px] overflow-hidden">
        <Image className="w-full" src={featuresImg} alt="featuresImg" />
        <Image
          className="hidden lg:block max-w-screen-sm absolute bottom-0 right-0 z-[-10]"
          src={eclipse}
          alt="eclipse"
        />
      </div>
    </section>
  );
};

export const HeroAbout = () => {
  return (
    <section className="relative grid lg:grid-cols-2 gap-40 items-center justify-between pt-36 sm:pt-48 pb-24 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-10">
        <h2>
          Our cloud-based solution is designed to streamline the diverse needs
          of businesses
        </h2>
        <Reveal3>
          <p>
            The journey of PurpleDove began with a simple yet profound idea – to
            develop a dynamic and comprehensive software solution that could
            adapt to the evolving needs of modern enterprises in Africa.
          </p>
        </Reveal3>
      </div>
      <div className="relative hidden lg:block">
        <Image className="max-w-[378px]" src={aboutImg} alt="aboutImg" />
        <div className="rounded-xl flex gap-4 p-6 absolute bottom-24 left-[-40px] bg-white max-w-[350px]">
          <Image className="max-w-[120px]" src={aboutLogo} alt="aboutLogo" />
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">25+</h4>
            <p className="text-black">Core Team Members</p>
          </div>
        </div>
      </div>
      <Image
        className="hidden lg:block max-w-screen-sm absolute bottom-0 right-0 z-[-10]"
        src={eclipse}
        alt="eclipse"
      />
    </section>
  );
};

// const auth = new google.auth.JWT({
//   email: process.env.SERVICE_ACCOUNT_EMAIL,
//   key: process.env.SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// interface Props {
//   firstname: string;
//   lastname: string;
//   company: string;
//   email: string;
//   phone: string;
// }

// const writeToSheet = async (value: Props) => {
//   const { firstname, lastname, company, email, phone }: Props = value;

//   const sheets = google.sheets({ version: "v4", auth });
//   const spreadsheetId = "1bMc-jAzg6fizQ-_gvK2lvDb-URHe1BOElVmYq820cBo";
//   const range = "purpleDoveContact!A1";
//   const valueInputOption = "USER_ENTERED";

//   const requestBody = {
//     values: [[firstname, lastname, company, email, phone]],
//   };

//   try {
//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption,
//       requestBody,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error writing to sheet:", error);
//     return error;
//   }
// };

export const HeroContact = () => {
  const form = useForm<z.infer<typeof formSchemaContact>>({
    resolver: zodResolver(formSchemaContact),
  });

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaContact>> = async (
    values
  ) => {
    console.log("onSubmit called");
    console.log("Form values: ", values);

    try {
      setLoading(true);

      const response = await fetch(
        "https://lassod.purpledove.net/api/resource/PurpleDoveUsers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        form.reset({
          first_name: "",
          last_name: "",
          company_name: "",
          email: "",
          phone: "",
        }); // Reset the form fields to empty values
        setFormSubmitted(true); // Mark form as submitted

        // Set a timeout to revert formSubmitted back to false after 15 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 10000);
        console.log(await response.json());
      } else {
        console.error("Form submission failed!");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      form.reset({
        first_name: "",
        last_name: "",
        company_name: "",
        email: "",
        phone: "",
      }); // Reset the form fields to empty values
    } finally {
      setLoading(false);
      form.reset({
        first_name: "",
        last_name: "",
        company_name: "",
        email: "",
        phone: "",
      }); // Reset the form fields to empty values
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 pt-36 sm:pt-48 pb-24 md:px-24 sm:px-8 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-5">
        <h2>Get Started with PurpleDove ERP</h2>
        <Reveal3>
          <p className="text">
            Sign up for a free demo and see the difference PurpleDove ERP can
            make!
          </p>
        </Reveal3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="grid grid-cols-2 gap-4 max-w-full">
              <FormField
                control={form.control}
                name="first_name" // Update the name to match the schema
                render={({ field }) => (
                  <FormItem>
                    <Label>First Name</Label>
                    <Input placeholder="First name" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name" // Update the name to match the schema
                render={({ field }) => (
                  <FormItem>
                    <Label>Last Name</Label>
                    <Input placeholder="Last name" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="company_name" // Update the name to match the schema
              render={({ field }) => (
                <FormItem>
                  <Label>Company name</Label>
                  <Input placeholder="Enter company name" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email" // Update the name to match the schema
              render={({ field }) => (
                <FormItem>
                  <Label>Email</Label>
                  <Input placeholder="you@company.com" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone" // Update the name to match the schema
              render={({ field }) => (
                <FormItem>
                  <Label>Phone number</Label>
                  <Input placeholder="+1 (555) 98363" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full mt-5"
              type="submit"
              disabled={loading || formSubmitted}
            >
              {loading ? (
                <div className="flex flex-row gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                </div>
              ) : formSubmitted ? (
                "your form was submitted successfully"
              ) : (
                "Send"
              )}
            </Button>
          </form>
        </Form>
      </div>
      <div className="rounded-xl hidden lg:block overflow-hidden">
        <Image src={ContactImage} alt="ContactImage" />
      </div>
    </section>
  );
};
