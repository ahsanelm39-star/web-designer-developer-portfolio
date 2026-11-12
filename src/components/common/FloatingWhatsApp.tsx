'use client';

import React, { useState } from 'react';
import { Locale } from '@/lib/types';

interface FloatingWhatsAppProps {
  locale: Locale;
}

export function WhatsAppSvg({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.33C16.32 14.2 15.1 13.6 14.87 13.52C14.65 13.44 14.49 13.4 14.32 13.65C14.16 13.9 13.69 14.45 13.54 14.62C13.4 14.78 13.25 14.81 13 14.68C12.75 14.56 11.95 14.29 11 13.45C10.27 12.79 9.77 11.98 9.63 11.73C9.48 11.48 9.61 11.35 9.74 11.22C9.85 11.11 9.99 10.93 10.12 10.78C10.24 10.63 10.29 10.52 10.37 10.36C10.45 10.19 10.41 10.05 10.35 9.93C10.29 9.8 9.79 8.58 9.59 8.08C9.39 7.6 9.19 7.66 9.04 7.65C8.9 7.65 8.74 7.64 8.57 7.64C8.41 7.64 8.15 7.7 7.92 7.95C7.7 8.2 7.07 8.79 7.07 10C7.07 11.21 7.95 12.38 8.07 12.54C8.2 12.71 9.8 15.17 12.24 16.22C12.82 16.47 13.27 16.62 13.63 16.73C14.21 16.92 14.74 16.89 15.16 16.83C15.63 16.76 16.61 16.24 16.81 15.66C17.02 15.09 17.02 14.6 16.96 14.5C16.9 14.39 16.82 14.45 16.57 14.33Z" />
    </svg>
  );
}

export default function FloatingWhatsApp({ locale }: FloatingWhatsAppProps) {
  const isArabic = locale === 'ar';
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = '201097926288';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const tooltipText = isArabic
    ? 'تواصل معي عبر واتساب'
    : "Let's talk on WhatsApp";

  return (
    <aside
      aria-label={tooltipText}
      className="fixed bottom-6 end-6 z-40 flex items-center gap-3 select-none pointer-events-auto pb-[env(safe-area-inset-bottom,0px)]"
    >
      {/* Desktop Tooltip Pill */}
      <div
        className={`hidden md:flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-md shadow-lg border border-border/80 transition-all duration-300 pointer-events-none whitespace-nowrap ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : isArabic
            ? 'opacity-0 -translate-x-2'
            : 'opacity-0 translate-x-2'
        } bg-surface/90 text-foreground`}
        aria-hidden="true"
      >
        <span>{tooltipText}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] ml-2 rtl:ml-0 rtl:mr-2 animate-pulse" />
      </div>

      {/* Circular Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[0_4px_24px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label={tooltipText}
      >
        {/* Soft, elegant pulsing glow ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          style={{ animationDuration: '3s' }}
          aria-hidden="true"
        />

        {/* Ambient radial green aura for dark & light modes */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/20 blur-sm pointer-events-none transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Icon */}
        <WhatsAppSvg className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" />
      </a>
    </aside>
  );
}
