import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export const truncateText = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

export const formatSocialUrl = (platform: string, handle: string) => {
  const baseUrls: Record<string, string> = {
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    email: "mailto:",
  };
  return baseUrls[platform] ? baseUrls[platform] + handle : handle;
};
