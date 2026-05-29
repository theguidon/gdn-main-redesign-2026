import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { Section } from "./types";
import { sectionInfo } from "./constants";
import Chip from "@/components/chip";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function wrapAuthorInSpans(author: string) {
  return "<span class='font-bold text-[#1c4480]'>" + author + "</span>";
}

export function bylinesToP(authors: string[]) {
  if (authors.length == 0) return "";
  if (authors.length == 1) return "By " + wrapAuthorInSpans(authors[0]);
  if (authors.length == 2)
    return (
      "By " +
      wrapAuthorInSpans(authors[0]) +
      " and " +
      wrapAuthorInSpans(authors[1])
    );
  else {
    return (
      "By " +
      authors.slice(0, -1).map(wrapAuthorInSpans).join(", ") +
      ", and " +
      wrapAuthorInSpans(authors[authors.length - 1])
    );
  }
}

export function printTwoDigit(num: number) {
  if (num < 10) return "0" + num;
  return num.toString();
}

export function formatDate(date: Date) {
  const dateString = dayjs(date).format("MMMM D YYYY");
  const timeString = dayjs(date).format("H:mm A");
  return (
    "Published <span class='font-bold'>" +
    dateString +
    "</span> at <span class='font-bold'>" +
    timeString +
    "</span>"
  );
}

export function chipFromSection(section: Section) {
  const { name, color } = sectionInfo[section];

  return Chip({ text: name, bgColor: color });
}

export function chipFromCategory(catID: number) {
  if (Object.values(Section).includes(catID)) {
    return chipFromSection(catID as Section);
  }

  // TODO: fetch category name and color from API if not in Section enum
  return null;
}
