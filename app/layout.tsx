import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Providers} from "@/lib/redux/provider";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "An Authentication Using Next Auth",
  description: " Developed by Femi Abim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
