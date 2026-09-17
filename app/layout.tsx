import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fit Life Ayurvedic | Premium Wellness",
  description: "Discover thoughtfully crafted Ayurvedic wellness products made with traditional herbs and modern quality standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#FAF7EF] text-[#17231D] selection:bg-[#174A3A] selection:text-[#FAF7EF]`}
      >
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
