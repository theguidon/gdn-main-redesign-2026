import type { Metadata } from "next";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The GUIDON",
  description:
    "The GUIDON is the official student publication of the Ateneo de Manila University. © 2026 The GUIDON All Rights Reserved",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-full h-[116px] py-4 px-12 bg-[#1c4480] text-white">
          <section className="w-full flex flex-nowrap justify-between items-center h-min">
            <MenuIcon />
            <Image
              src="/GUIDON_Logo.svg"
              width={320}
              height={50}
              alt="The GUIDON"
            />
            <SearchIcon />
          </section>
        </header>
        {children}
        <footer className="w-full grid grid-cols-3 grid-rows-1 justify-items-center gap-16 pb-8 pt-12 px-12 bg-[#1c4480] text-white">
          <section>
            <section className="w-full pb-4 border-white border-b">
              <Image
                src="/GUIDON_Logo.svg"
                width={360}
                height={50}
                alt="The GUIDON"
              />
              <p className="pt-3">
                The GUIDON is the official student publication of the Ateneo de
                Manila University.
              </p>
            </section>
            <p className="w-full pt-5">
              © 2026 The GUIDON All Rights Reserved
              <br />
              Designed and Developed by Digital Development 2025–2026
            </p>
          </section>
          <section className="flex flex-nowrap gap-8">
            <ul>
              <li>
                <p>Browse</p>
              </li>
              <li>
                <p>Beyond Loyola</p>
              </li>
              <li>
                <p>Opinion</p>
              </li>
              <li>
                <p>Sports</p>
              </li>
              <li>
                <p>Features</p>
              </li>
              <li>
                <p>Inquiry</p>
              </li>
              <li>
                <p>SciTech</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>More</p>
              </li>
              <li>
                <p>Vantage Magazine</p>
              </li>
              <li>
                <p>Multimedia</p>
              </li>
              <li>
                <p>Interactives</p>
              </li>
              <li>
                <p>Archives</p>
              </li>
              <li>
                <p>Take the Lede</p>
              </li>
              <li>
                <p>About</p>
              </li>
            </ul>
          </section>
          <section>
            <section>
              <p>Like reading the GUIDON? Subscribe to our newsletter</p>
            </section>
            <section>
              <p>Follow The GUIDON on:</p>
            </section>
          </section>
        </footer>
      </body>
    </html>
  );
}
