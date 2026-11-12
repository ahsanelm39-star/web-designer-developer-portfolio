'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, ArrowLeft, MessageSquare, Mail } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import ThemeToggle from './ThemeToggle';
import LocaleSwitcher from './LocaleSwitcher';
import BrandLogo from '@/components/brand/BrandLogo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export default function MobileNav({ isOpen, onClose, locale }: MobileNavProps) {
  const pathname = usePathname();
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  // Prevent background scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  // Close ONLY when pathname genuinely changes, NOT on initial mount
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { href: `/${locale}/work`, label: t.nav.work, num: '01' },
    { href: `/${locale}/services`, label: t.nav.services, num: '02' },
    { href: `/${locale}/about`, label: t.nav.about, num: '03' },
    { href: `/${locale}/contact`, label: t.nav.contact, num: '04' },
  ];

  return (
    <div
      id="mobile-nav-dialog"
      className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-2xl transition-all duration-300 md:hidden animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={t.nav.openMenu}
    >
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-border/40">
        <BrandLogo locale={locale} size="sm" onClick={onClose} />
        <div className="flex items-center gap-2">
          <LocaleSwitcher currentLocale={locale} />
          <ThemeToggle />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg border border-border/60 hover:bg-surface-hover text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={t.nav.closeMenu}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Nav Links Body */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`group flex items-center justify-between py-4 border-b border-border/30 text-2xl font-semibold tracking-tight transition-colors ${
                  isActive ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-muted group-hover:text-accent/80">
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                </div>
                <ArrowIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions inside Drawer */}
        <div className="space-y-4 pt-8">
          <Link
            href={`/${locale}/contact`}
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-xl bg-accent text-accent-foreground font-semibold text-center block text-sm tracking-wide shadow-lg shadow-accent/10 hover:opacity-95 transition-opacity"
          >
            {t.nav.startProject}
          </Link>

          <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted">
            <a
              href="https://wa.me/201097926288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <a
              href="mailto:ah.dev.3@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              ah.dev.3@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
