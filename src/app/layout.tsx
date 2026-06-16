import TitleLine from "../components/title-line.tsx";
import type { Metadata } from "next";
import { MenuIcon, SearchIcon } from "lucide-react";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import {
  roboto,
  chivo,
  tiemposHeadline,
  tiemposText,
  tiemposFine,
} from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SideBar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "The GUIDON",
  description:
    "The GUIDON is the official student publication of the Ateneo de Manila University. © 2026 The GUIDON All Rights Reserved",
};

const menuNoHighlight = cn(
  navigationMenuTriggerStyle(),
  `hover:bg-transparent! focus:bg-transparent! bg-transparent! ${chivo.className}`,
);

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
        "font-sans",
        chivo.variable,
        tiemposHeadline.variable,
        tiemposText.variable,
        tiemposFine.variable,
        roboto.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-full h-[116px] py-4 px-12 bg-[#1c4480] text-white flex flex-col items-center font-chivo">
          <section className="w-full flex flex-nowrap justify-between items-center h-min">
            <SideBar />
            <Image
              src="/GUIDON_Logo.svg"
              width={320}
              height={50}
              alt="The GUIDON"
            />
            <SearchIcon />
          </section>
          <NavigationMenu className="mt-2 hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={menuNoHighlight}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={menuNoHighlight}>
                  Sections
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-40">
                    {[
                      "News",
                      "Opinion",
                      "Sports",
                      "Beyond Loyola",
                      "Features",
                      "Inquiry",
                      "SciTech",
                    ].map((item) => (
                      <li key={item}>
                        <NavigationMenuLink
                          href={`/sections/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className={menuNoHighlight}
                        >
                          {item}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={menuNoHighlight}>
                  Specials
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48">
                    {[
                      "Vantage Magazine",
                      "Multimedia",
                      "Interactives",
                      "Archive",
                    ].map((item) => (
                      <li key={item}>
                        <NavigationMenuLink
                          href={`/specials/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className={menuNoHighlight}
                        >
                          {item}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/take-the-lede"
                  className={menuNoHighlight}
                >
                  Take the Lede
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className={menuNoHighlight}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
        {children}
        <section className="w-full flex flex-col md:flex-row md:items-end md:px-[10%] md:pt-10 font-chivo">
          <form className="basis-3/5 flex flex-col gap-3 bg-(--light-gray) p-6 border border-black/10 md:shadow-[0_8px_16px_-6px_rgba(0,0,0,0.2)]">
            <TitleLine title={"Tell Us What You Think!"} />
            <p className="text-md text-(--alt-black) font-tiempos-headline">
              Have any questions, clarifications, or comments? Send us a message
              through the form below.
            </p>
            <section className="flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-bold font-(--opinion-gray) font-roboto"
                >
                  Email:
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Email"
                  className="bg-white text-gray-500"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-bold font-(--opinion-gray) font-roboto"
                >
                  Message:
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Message"
                  className="flex-1 w-full bg-white text-gray-500 p-2 text-sm resize-none min-h-[80px]"
                />
              </div>
              <div>
                <Button
                  variant="default"
                  className="bg-(--graphic-design-blue) text-white font-bold p-4 rounded-sm"
                >
                  Send
                </Button>
              </div>
            </section>
          </form>
          <section className="basis-2/5 flex flex-col gap-3 bg-white p-6 border border-black/10 md:shadow-[0_8px_16px_-6px_rgba(0,0,0,0.2)]">
            <TitleLine title={"Take the Lede"} />
            <p className="text-md font-tiempos-headline text-(--alt-black)">
              Fill out our form in the Contribute page and write for The GUIDON!
              Click the button below to view our Take the Lede Crowdsourcing
              Form.
            </p>
            <div>
              <Button
                variant="default"
                className="bg-(--graphic-design-blue) text-white font-bold p-4 rounded-sm"
              >
                Contribute
              </Button>
            </div>
          </section>
        </section>
        <footer className="w-full flex flex-col items-stretch md:grid md:grid-cols-3 md:grid-rows-1 justify-items-center md:gap-4 lg:gap-16 pb-8 pt-12 px-6 md:px-8 lg:px-12 bg-[#1c4480] text-white">
          <section>
            <section className="w-full pb-4 border-white border-b mb-4 md:mb-0">
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
            <p className="w-full pt-5 hidden md:block">
              © 2026 The GUIDON All Rights Reserved
              <br />
              Designed and Developed by Digital Deve/lopment 2025–2026
            </p>
          </section>
          <section className="flex flex-wrap gap-8 mb-4 md:mb-0 border-white border-b pb-2 md:p-0 md:border-none">
            <ul>
              <li>
                <p className="font-bold">Browse</p>
              </li>
              <li>
                <Link href="/sections/beyond-loyola">
                  <p>Beyond Loyola</p>
                </Link>
              </li>
              <li>
                <Link href="/sections/opinion">
                  <p>Opinion</p>
                </Link>
              </li>
              <li>
                <Link href="/sections/sports">
                  <p>Sports</p>
                </Link>
              </li>
              <li>
                <Link href="/sections/features">
                  <p>Features</p>
                </Link>
              </li>
              <li>
                <Link href="/sections/inquiry">
                  <p>Inquiry</p>
                </Link>
              </li>
              <li>
                <Link href="/sections/scitech">
                  <p>SciTech</p>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <p className="font-bold">More</p>
              </li>
              <li>
                <Link href="/vantage-magazine">
                  <p>Vantage Magazine</p>
                </Link>
              </li>
              <li>
                <Link href="/multimedia">
                  <p>Multimedia</p>
                </Link>
              </li>
              <li>
                <Link href="/interactives">
                  <p>Interactives</p>
                </Link>
              </li>
              <li>
                <Link href="/archives">
                  <p>Archives</p>
                </Link>
              </li>
              <li>
                <Link href="/take-the-lede">
                  <p>Take the Lede</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </section>
          <section className="pb-4 mb-4 border-white border-b md:pb-0 md:mb-0 md:border-none">
            <section className="border-white border-b mb-3">
              <p>Like reading the GUIDON? Subscribe to our newsletter</p>
              <section
                className={`flex flex-nowrap items-stretch mt-2 mb-5 h-[2.5em] ${chivo.className}`}
              >
                <Field className="grow">
                  <Input
                    id="email"
                    type="email"
                    className="border-0 bg-white text-[#898989] h-full"
                    placeholder="Email"
                  />
                </Field>
                <Button
                  variant="default"
                  className="w-1/3 p-0 m-0 h-full border-0 font-semibold text-md bg-[#6A91CD]"
                >
                  Subscribe
                </Button>
              </section>
            </section>
            <section>
              <p>Follow The GUIDON on:</p>
              <section className="flex flex-nowrap gap-4 mt-2 text-2xl">
                <Link href="www.facebook.com/TheGUIDON">
                  <FaFacebook color="white" />
                </Link>
                <Link href="www.twitter.com/TheGUIDON">
                  <FaXTwitter color="white" />
                </Link>
                <Link href="www.instagram.com/TheGUIDON">
                  <FaInstagram color="white" />
                </Link>
              </section>
            </section>
          </section>
          <p className="w-full pt-2 block md:hidden">
            © 2026 The GUIDON All Rights Reserved
            <br />
            Designed and Developed by Digital Development 2025–2026
          </p>
        </footer>
      </body>
    </html>
  );
}
