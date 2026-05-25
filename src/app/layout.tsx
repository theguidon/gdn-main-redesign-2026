import type { Metadata } from "next";
import { HamburgerIcon, SearchIcon } from "lucide-react";
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
        <header>
          <section>
            <HamburgerIcon />
            <Image src="/GUIDON_Logo.svg" alt="The GUIDON" />
            <SearchIcon />
          </section>
        </header>
        {children}
        <footer>
          <section>
            <section>
              <Image src="/GUIDON_Logo.svg" alt="The GUIDON" />
              <p>
                The GUIDON is the official student publication of the Ateneo de
                Manila University.
              </p>
            </section>
            <section>
              <p>
                © 2026 The GUIDON All Rights Reserved
                <br />
                Designed and Developed by Digital Development 2025–2026
              </p>
            </section>
          </section>
          <section>
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
