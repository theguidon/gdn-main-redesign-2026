"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, XIcon } from "lucide-react";

const navItems = [{ label: "HOME", href: "/" }];

const sectionItems = [
  { label: "NEWS", href: "/sections/news" },
  { label: "BEYOND LOYOLA", href: "/sections/beyond-loyola" },
  { label: "OPINION", href: "/sections/opinion" },
  { label: "SPORTS", href: "/sections/sports" },
  { label: "FEATURES", href: "/sections/features" },
  { label: "INQUIRY", href: "/sections/inquiry" },
  { label: "SCITECH", href: "/sections/scitech" },
];

const specialItems = [
  { label: "VANTAGE MAGAZINE", href: "/specials/vantage-magazine" },
  { label: "MULTIMEDIA", href: "/specials/multimedia" },
  { label: "INTERACTIVES", href: "/specials/interactives" },
  { label: "ARCHIVE", href: "/specials/archive" },
];

export default function SideBar() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <button aria-label="Open menu">
          <MenuIcon className="w-6 h-6 text-white cursor-pointer" />
        </button>
      </DrawerTrigger>

      <DrawerContent className="w-[30vw] border-none h-full top-0 left-0 rounded-none flex flex-col p-0 overflow-clip items-stretch">
        <DrawerTitle className="hidden">Sidebar</DrawerTitle>
        {/* Top blue section: close button, logo, search */}
        <section className="bg-[#1c4480] text-white flex flex-col px-6 py-5 gap-4 w-full">
          <div className="flex justify-between items-center">
            <DrawerClose asChild>
              <button aria-label="Close menu">
                <XIcon className="w-7 h-7 cursor-pointer" />
              </button>
            </DrawerClose>
            <Image
              src="/Logo_Small.svg"
              width={48}
              height={48}
              alt="The GUIDON"
            />
          </div>
          <div className="flex items-center bg-white text-[#1c4480] rounded-sm px-3 gap-2">
            <SearchIcon className="w-4 h-4 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-(--opinion-gray) placeholder-(--opinion-gray) text-sm py-2.5 outline-none"
            />
          </div>
        </section>

        {/* Middle white section: nav links */}
        <section className="bg-white flex-1 overflow-y-auto px-0 py-4">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-5 px-4 text-2xl font-black text-[#101212] tracking-wide hover:text-[#1c4480] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Sections divider */}
            <li className="flex items-center gap-3 py-3">
              <span className="w-3 h-[2px] bg-[#1c4480]" />
              <span className="text-[#1c4480] font-bold font-chivo text-base">
                Sections
              </span>
              <span className="flex-1 h-[2px] bg-[#1c4480]" />
            </li>

            {sectionItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-5 text-2xl font-black text-[#101212] tracking-wide hover:text-[#1c4480] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Specials divider */}
            <li className="flex items-center gap-3 py-3 mt-1">
              <span className="w-3 h-[2px] bg-[#1c4480] shrink-0" />
              <span className="text-[#1c4480] font-bold font-chivo text-base">
                Specials
              </span>
              <span className="flex-1 h-[2px] bg-[#1c4480]" />
            </li>

            {specialItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-5 text-2xl font-black text-[#101212] tracking-wide hover:text-[#1c4480] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom blue section: newsletter */}
        <section className="bg-[#1c4480] text-white px-6 py-5 flex flex-col gap-3 shrink-0">
          <p className="text-sm">
            Like reading The GUIDON? Subscribe to our newsletter.
          </p>
          <div className="flex items-stretch h-[2.5em]">
            <Field className="grow">
              <Input
                id="sidebar-email"
                type="email"
                placeholder="Email"
                className="border-0 bg-white text-(--opinion-gray) placeholder-(--opinion-gray) h-full rounded-none"
              />
            </Field>
            <Button
              variant="default"
              className="w-1/3 h-full p-0 border-0 font-semibold text-sm bg-[#6A91CD] rounded-none"
            >
              Subscribe
            </Button>
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
}
