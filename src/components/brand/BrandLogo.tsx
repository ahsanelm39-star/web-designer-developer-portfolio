'use client';

import React from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';

interface BrandLogoProps {
  locale: Locale;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  clickable?: boolean;
  className?: string;
  onClick?: () => void;
}

export function BrandMark({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      {/* Subtle outer architectural boundary grid (hairline) */}
      <rect
        x="2"
        y="2"
        width="32"
        height="32"
        rx="8"
        className="stroke-border/60 transition-colors"
        strokeWidth="1"
      />

      {/* Structural isometric left facet of the architectural 'A' */}
      <path
        d="M18 6L7 28H12L15 22H21L18 16L18 6Z"
        className="fill-foreground transition-colors"
      />

      {/* Structural right facet with architectural depth */}
      <path
        d="M18 6L29 28H24L21 22H15L18 16L18 6Z"
        className="fill-foreground/80 transition-colors"
      />

      {/* Suspended architectural bridge (crossbar) */}
      <path
        d="M13.5 21H22.5L24 24H12L13.5 21Z"
        className="fill-accent transition-colors"
      />

      {/* Floating apex focal beacon (echoing the 3D scene) */}
      <polygon
        points="18,3 21,7.5 18,12 15,7.5"
        className="fill-accent transition-colors drop-shadow-[0_0_6px_rgba(212,255,50,0.4)]"
      />

      {/* Precision architectural coordinate ticks */}
      <circle cx="7" cy="28" r="1" className="fill-accent" />
      <circle cx="29" cy="28" r="1" className="fill-accent" />
    </svg>
  );
}

export default function BrandLogo({
  locale,
  size = 'md',
  showSubtitle = true,
  clickable = true,
  className = '',
  onClick,
}: BrandLogoProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  const markSize =
    size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const titleSize =
    size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleSize =
    size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  const content = (
    <div
      className={`group inline-flex items-center gap-3 select-none ${className}`}
    >
      {/* Vector Brand Mark */}
      <BrandMark className={markSize} />

      {/* Brand Text Lockup */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-mono ${titleSize} font-bold tracking-tight text-foreground flex items-center transition-colors group-hover:text-accent`}
        >
          AHMED<span className="text-accent">.</span>
        </span>
        {showSubtitle && (
          <span
            className={`${subtitleSize} tracking-wider uppercase font-mono text-muted group-hover:text-foreground transition-colors mt-0.5`}
          >
            {t.brand.title}
          </span>
        )}
      </div>
    </div>
  );

  if (!clickable) {
    return content;
  }

  return (
    <Link
      href={`/${locale}`}
      onClick={onClick}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
      aria-label={`${t.brand.name} — ${t.brand.title}`}
    >
      {content}
    </Link>
  );
}
