'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, Mail, Linkedin, Sparkles } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';

interface ContactCtaProps {
  locale: Locale;
}

export default function ContactCta({ locale }: ContactCtaProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  return (
    <section className="py-24 bg-surface/40 border-t border-border/50 relative overflow-hidden transition-colors">
      <div className="absolute inset-0 spatial-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-surface/80 text-xs font-mono text-foreground/80">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>{isArabic ? 'جاهز للبدء في مشروعك' : 'Ready for Your Upcoming Project'}</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-sm tracking-wide shadow-xl shadow-accent/15 hover:opacity-95 transition-all transform hover:scale-[1.02]"
          >
            <span>{t.nav.startProject}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href="https://wa.me/201097926288"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-border/80 bg-surface/70 hover:bg-surface-hover text-foreground font-medium text-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>{isArabic ? 'محادثة سريعة عبر واتساب' : 'Quick Chat on WhatsApp'}</span>
          </a>
        </div>

        {/* Alternate Contact Channels */}
        <div className="pt-8 border-t border-border/40 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-muted">
          <a
            href="mailto:ah.dev.3@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>ah.dev.3@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-mohame-843909439"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn / Ahmed</span>
          </a>
        </div>
      </div>
    </section>
  );
}
