'use client';

import React from 'react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';

interface MethodologyProps {
  locale: Locale;
}

export default function Methodology({ locale }: MethodologyProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            04 · {t.methodology.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {t.methodology.title}
          </h2>
          <p className="text-sm sm:text-base text-muted">
            {t.methodology.description}
          </p>
        </div>

        {/* Architectural Timeline Sequence */}
        <div className="relative border-t border-border/50 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {t.methodology.steps.map((step, idx) => (
              <div
                key={step.number}
                className="group relative space-y-4 pt-4 border-t-2 border-border-strong hover:border-accent transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-muted uppercase">
                    {isArabic ? `مرحلة 0${idx + 1}` : `Phase 0${idx + 1}`}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Motto Banner */}
        <div className="p-6 rounded-2xl border border-border/50 bg-surface/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
            <h4 className="text-sm font-semibold text-foreground">
              {isArabic ? 'منهجية تحترم وقتك وميزانيتك' : 'Disciplined Execution & Zero Ambiguity'}
            </h4>
            <p className="text-xs text-muted">
              {isArabic
                ? 'وضوح كامل في كل خطوة مع تقارير تقدم واضحة وتوافق تام قبل الانتقال للمرحلة التالية.'
                : 'Full procedural clarity with tangible checkpoints before moving to each subsequent phase.'}
            </p>
          </div>
          <div className="font-mono text-xs text-accent px-4 py-2 rounded-full border border-accent/30 bg-accent-dim whitespace-nowrap">
            {isArabic ? 'ضمان التوافق والجودة' : 'QA Certified Process'}
          </div>
        </div>
      </div>
    </section>
  );
}
