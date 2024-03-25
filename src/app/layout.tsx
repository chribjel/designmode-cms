import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { MutationObserverProvider } from "./MutationObserverProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Designmode CMS",
	description:
		"Demo of using the Browser native MutationObserver API together with document.designmode to create a CMS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					inter.className,
					"flex min-h-svh w-screen flex-col items-center"
				)}
			>
				<MutationObserverProvider>{children}</MutationObserverProvider>
				<footer className="flex w-full flex-col items-center justify-center gap-2 p-8 text-sm text-gray-600 sm:flex-row sm:gap-8">
					<Link
						className="font-bold hover:text-purple-600"
						href="https://x.com/chribjel"
						target="_blank"
					>
						Follow me on X (chribjel)
					</Link>
					<p className="font-bold">
						Created by{" "}
						<Link
							className="font-bold hover:text-purple-600"
							href="https://www.bjel.ke"
							target="_blank"
						>
							Christoffer Bjelke
						</Link>
					</p>
					<Link
						className="font-bold hover:text-purple-600"
						href="https://github.com/chribjel/designmode-cms"
						target="_blank"
					>
						View source on GitHub
					</Link>
				</footer>
				<Analytics />
			</body>
		</html>
	);
}
