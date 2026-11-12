'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, Mail, Linkedin, Github, Sparkles } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import BrandLogo from '@/components/brand/BrandLogo';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  const quickLinks = [
    { href: `/${locale}`, label: isArabic ? 'الرئيسية' : 'Home' },
    { href: `/${locale}/work`, label: t.nav.work },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <footer className="hairline-t bg-background border-t border-border/50 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-border/40">
          {/* Brand & Value Statement */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo locale={locale} size="md" />
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 text-xs font-mono text-foreground/80">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{t.hero.statusAvailable}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/201097926288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-foreground/90 hover:text-accent transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span>WhatsApp (+20 109 792 6288)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ah.dev.3@gmail.com"
                  className="group inline-flex items-center gap-2 text-foreground/90 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span>ah.dev.3@gmail.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ahmed-mohame-843909439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-foreground/90 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ahsanelm39-star"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="group inline-flex items-center gap-2 text-foreground/90 hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4 text-accent" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Credibility Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>{t.footer.experienceBadge}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
