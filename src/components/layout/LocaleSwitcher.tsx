'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Locale } from '@/lib/types';

interface LocaleSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export default function LocaleSwitcher({ currentLocale, className }: LocaleSwitcherProps) {
  const pathname = usePathname() || '';
  const targetLocale: Locale = currentLocale === 'ar' ? 'en' : 'ar';

  // Compute the target pathname preserving the subpath
  let targetPath = pathname;
  if (pathname.startsWith('/ar')) {
    targetPath = pathname.replace(/^\/ar/, `/${targetLocale}`);
  } else if (pathname.startsWith('/en')) {
    targetPath = pathname.replace(/^\/en/, `/${targetLocale}`);
  } else {
    targetPath = `/${targetLocale}${pathname === '/' ? '' : pathname}`;
  }

  // Label to display (Arabic or English)
  const displayLabel = currentLocale === 'ar' ? 'EN' : 'عربي';

  return (
    <Link
      href={targetPath}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/50 bg-surface/40 hover:bg-surface-hover text-xs font-mono text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
      title={currentLocale === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
      aria-label={currentLocale === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
    >
      <Globe className="w-3.5 h-3.5 text-accent" />
      <span className="font-semibold">{displayLabel}</span>
    </Link>
  );
}
