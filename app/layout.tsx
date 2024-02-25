import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";
import NavBar from "@/components/NavBar/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Ceylong Grocery",
  description: "Sri Lankan grocery store based in latvia",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="res.cloudinary.com" />
      </head>

      <body className={poppins.className}>
        <Toaster />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
