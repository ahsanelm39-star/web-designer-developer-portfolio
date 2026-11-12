import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import WorkGrid from '@/components/work/WorkGrid';
import ContactCta from '@/components/sections/ContactCta';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  const isArabic = locale === 'ar';

  return {
    title: isArabic ? 'الأعمال والمشاريع المختارة' : 'Selected Work & Case Studies',
    description: isArabic
      ? 'استعرض كافة المشاريع المنجزة للعملاء والمفاهيم التطويرية المستقلة لأحمد مصنفة حسب القطاع التجاري.'
      : 'Explore all delivered client projects and independent web concepts engineered by Ahmed, categorized by business sector.',
  };
}

export default function WorkPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = TRANSLATIONS[locale];

  return (
    <div className="pt-32 pb-24 space-y-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            {t.work.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {t.work.allProjectsTitle}
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {t.work.allProjectsDesc}
          </p>
        </div>

        {/* Interactive Filter & Projects Grid */}
        <WorkGrid locale={locale} />
      </div>

      <ContactCta locale={locale} />
    </div>
  );
}
