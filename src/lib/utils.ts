import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Locale } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // If path already starts with /ar or /en, replace it
  const cleanPath = path.replace(/^\/(ar|en)(\/|$)/, '/');
  const normalized = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  if (normalized === '/') {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}
