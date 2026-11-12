'use client';

import React from 'react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';

interface CredibilityProps {
  locale: Locale;
}

export default function Credibility({ locale }: CredibilityProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  return (
    <section className="py-20 border-t border-b border-border/50 bg-surface/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
          {/* Left Title & Framing */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              01 · {t.credibility.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-snug">
              {t.credibility.title}
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {t.credibility.description}
            </p>
          </div>

          {/* Right Proof Numbers in Editorial Grid (Not generic rounded cards) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-x-8 gap-y-12">
            <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent/80 pl-6 rtl:pl-0 rtl:pr-6 space-y-2">
              <span className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                {t.credibility.stat1Number}
              </span>
              <p className="text-xs sm:text-sm font-medium text-foreground/90">
                {t.credibility.stat1Label}
              </p>
              <p className="text-xs text-muted font-mono">
                {isArabic ? 'شركات ومطاعم ومقاولات وأزياء' : 'Commercial, hospitality & retail sectors'}
              </p>
            </div>

            <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-border-strong pl-6 rtl:pl-0 rtl:pr-6 space-y-2">
              <span className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                {t.credibility.stat2Number}
              </span>
              <p className="text-xs sm:text-sm font-medium text-foreground/90">
                {t.credibility.stat2Label}
              </p>
              <p className="text-xs text-muted font-mono">
                {isArabic ? 'تصميم وتطوير واجهات متقدمة' : 'Focused design & technical engineering'}
              </p>
            </div>

            <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-border-strong pl-6 rtl:pl-0 rtl:pr-6 space-y-2">
              <span className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                RTL & LTR
              </span>
              <p className="text-xs sm:text-sm font-medium text-foreground/90">
                {t.credibility.stat4Label}
              </p>
              <p className="text-xs text-muted font-mono">
                {isArabic ? 'معالجة طباعية مستقلة للاتجاهين' : 'Native bidirectional typography'}
              </p>
            </div>

            <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent/80 pl-6 rtl:pl-0 rtl:pr-6 space-y-2">
              <span className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                Agency
              </span>
              <p className="text-xs sm:text-sm font-medium text-foreground/90">
                {isArabic ? 'شراكة مع وكالة خليجية' : 'Gulf Agency Collaboration'}
              </p>
              <p className="text-xs text-muted font-mono">
                {isArabic ? 'تنفيذ وتسليم بمواصفات الوكالة' : 'White-label delivery standards'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
