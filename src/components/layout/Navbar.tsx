'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import ThemeToggle from './ThemeToggle';
import LocaleSwitcher from './LocaleSwitcher';
import MobileNav from './MobileNav';
import BrandLogo from '@/components/brand/BrandLogo';

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const t = TRANSLATIONS[locale];

  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleOpenMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/work`, label: t.nav.work },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-border/50 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Brand Identity */}
            <BrandLogo locale={locale} size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 p-1 bg-surface/50 border border-border/40 backdrop-blur-md rounded-full shadow-inner">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href.includes('/work') && pathname?.startsWith(`/${locale}/work`));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? 'text-accent-foreground bg-accent font-semibold shadow-sm'
                        : 'text-foreground/80 hover:text-foreground hover:bg-surface-hover'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Desktop Controls & CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              <LocaleSwitcher currentLocale={locale} />
              <ThemeToggle label={t.nav.themeToggle} />

              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background font-medium text-xs tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>{t.nav.startProject}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Controls & Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <LocaleSwitcher currentLocale={locale} />
              <ThemeToggle label={t.nav.themeToggle} />
              <button
                type="button"
                onClick={handleOpenMobileMenu}
                className="p-2 rounded-lg border border-border/60 hover:bg-surface-hover text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={t.nav.openMenu}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-dialog"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
        locale={locale}
      />
    </>
  );
}
