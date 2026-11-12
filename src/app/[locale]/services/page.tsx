import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles, Building2, Rocket, UserCheck, Cuboid, Handshake } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import ContactCta from '@/components/sections/ContactCta';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  const isArabic = locale === 'ar';

  return {
    title: isArabic ? 'الخدمات والحلول الرقمية' : 'Services & Solutions',
    description: isArabic
      ? 'خدمات تصميم وتطوير المواقع المخصصة للشركات، صفحات الهبوط، المنصات الشخصية، والتجارب التفاعلية ثلاثية الأبعاد.'
      : 'Comprehensive website design and engineering services for commercial enterprises, marketing landing pages, executive portfolios, and interactive 3D experiences.',
  };
}

export default function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  const icons = [Building2, Rocket, UserCheck, Cuboid, Handshake];

  return (
    <div className="pt-32 pb-24 space-y-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            {t.services.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {t.services.title}
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Detailed Service Pillars */}
        <div className="space-y-12">
          {t.services.items.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl border border-border/70 bg-surface/50 p-8 sm:p-12 transition-all duration-300 hover:border-accent/40 space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title, Icon, Value Proposition */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-accent-dim text-accent border border-accent/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-accent">
                        0{index + 1}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border/70 text-muted">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h2>

                    <p className="text-sm text-muted leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="p-4 rounded-xl border border-border/40 bg-background/50 space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold">
                        {isArabic ? 'القيمة التجارية المضافة' : 'Business Value Impact'}
                      </span>
                      <p className="text-xs text-foreground/90 font-medium">
                        {service.value}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/${locale}/contact?service=${service.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-xs tracking-wide shadow-md hover:opacity-95 transition-opacity"
                      >
                        <span>{t.services.exploreCta}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Detailed Deliverables & Inclusions */}
                  <div className="lg:col-span-7 rounded-xl border border-border/50 bg-surface/40 p-6 sm:p-8 space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
                      {isArabic ? 'نطاق التسليم والمخرجات العملية:' : 'Scope of Execution & Tangible Deliverables:'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 p-3 rounded-lg border border-border/30 bg-background/40">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/90 leading-relaxed font-medium">
                            {del}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ContactCta locale={locale} />
    </div>
  );
}
