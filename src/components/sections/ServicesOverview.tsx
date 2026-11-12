'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';

interface ServicesOverviewProps {
  locale: Locale;
}

export default function ServicesOverview({ locale }: ServicesOverviewProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 bg-surface/30 border-t border-b border-border/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/40">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              03 · {t.services.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {t.services.title}
            </h2>
            <p className="text-sm sm:text-base text-muted">
              {t.services.description}
            </p>
          </div>

          <Link
            href={`/${locale}/services`}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors self-start md:self-auto"
          >
            <span>{isArabic ? 'كافة تفاصيل الخدمات' : 'View Full Services Page'}</span>
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* 4 Main Services in Architectural Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className="shadow-sm group rounded-2xl border border-border/60 bg-surface/50 hover:bg-surface/80 p-8 flex flex-col justify-between transition-all duration-300 space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent">
                    0{index + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border/70 text-muted">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Business Value Highlight */}
                <div className="p-4 rounded-xl border border-border/40 bg-background/50 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold">
                    {isArabic ? 'القيمة التجارية المباشرة' : 'Commercial Value'}
                  </span>
                  <p className="text-xs text-foreground/90 font-medium">
                    {item.value}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted">
                    {isArabic ? 'يشمل نطاق العمل:' : 'Scope & Inclusions:'}
                  </span>
                  <ul className="space-y-2">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                        <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-border/40">
                <Link
                  href={`/${locale}/contact?service=${item.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>{t.services.exploreCta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
