import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MutationObserverProvider } from "./MutationObserverProvider";

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
			<body className={inter.className}>
				<MutationObserverProvider>{children}</MutationObserverProvider>
			</body>
		</html>
	);
}
