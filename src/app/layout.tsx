import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "PurpleDove - Transform Your Business With PurpleDove ERP",
	description: "Experience the unparalleled efficiency and growth potential with our cost-effective ERP solution, tailored to your needs.",
	keywords: "Scale Easier, Save Time and Money, Secure Cloud, User-Friendly Interface, Robust Analytics and Reporting, Customer Support",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
