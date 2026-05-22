import { clsx, type ClassValue } from "clsx"
import { Montserrat } from "next/font/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const scrollToSection = (id: string) => {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
};