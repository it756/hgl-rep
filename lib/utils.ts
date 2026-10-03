import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  amount: number,
  currency: "ZMK" | "ZMW" | "EUR" = "ZMK",
): string {
  return `ZMK ${amount.toFixed(2)}`;
}
