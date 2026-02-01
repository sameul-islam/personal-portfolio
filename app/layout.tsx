import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import ScrollToTop from "@/components/ScrollToTop";


export const metadata: Metadata = {
  title: "Sameul's | portfolio",
  description: "Explore About Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar/>
        <MobileNavbar/>
        {children}
        <ScrollToTop/>
      </body>
    </html>
  );
}