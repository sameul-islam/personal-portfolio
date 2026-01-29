import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";


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
    <html lang="en">
      <body>
        <Navbar/>
        <MobileNavbar/>
        {children}
      </body>
    </html>
  );
}