import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let relativeDate = "";

  if (yearsAgo > 0) {
    relativeDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    relativeDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    relativeDate = `${daysAgo}d ago`;
  } else {
    relativeDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (includeRelative) {
    return `${fullDate} (${relativeDate})`;
  }

  return fullDate;
}
