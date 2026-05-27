import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

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

export function formatDate(date: Date) {
  return dayjs(date).format("MMMM D YYYY, H:mm A");
}
