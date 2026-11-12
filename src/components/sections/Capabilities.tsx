'use client';

import React from 'react';
import { Code2, LayoutGrid, CheckCircle } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';

interface CapabilitiesProps {
  locale: Locale;
}

export default function Capabilities({ locale }: CapabilitiesProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  const customTech = [
    { name: 'React & Next.js', desc: isArabic ? 'بنية تطبيقات ويب فائقة السرعة والتجاوب' : 'High-speed, production-grade web architecture' },
    { name: 'TypeScript', desc: isArabic ? 'هندسة كود منضبطة خالية من الأخطاء العشوائية' : 'Strict type-safe architectural reliability' },
    { name: 'Tailwind CSS', desc: isArabic ? 'تصميم واجهات معيارية دقيقة خفيفة الحجم' : 'Utility-first modular styling and zero bloat' },
    { name: 'Three.js & WebGL', desc: isArabic ? 'تجارب تفاعلية وبصرية ثلاثية أبعاد محسنة الأداء' : 'High-performance interactive 3D spatial scenes' },
    { name: 'GSAP & Motion', desc: isArabic ? 'حركات سينمائية متناسقة مرتبطة بسلوك التمرير' : 'Scroll-triggered choreography and kinetic rhythm' },
  ];

  const visualTech = [
    { name: 'Webflow', desc: isArabic ? 'مواقع بصرية متقدمة مع لوحة تحكم سهلة للعميل' : 'High-end visual builds with client CMS autonomy' },
    { name: 'Framer', desc: isArabic ? 'إطلاق سريع وتفاعل بصري حديث للشركات الناشئة' : 'Rapid deployment with slick interactive aesthetics' },
    { name: 'GoHighLevel', desc: isArabic ? 'صفحات هبوط تسويقية متكاملة مع مسارات إدارة العملاء' : 'Marketing funnels tied directly into CRM pipelines' },
    { name: 'Wix Studio', desc: isArabic ? 'مواقع تجارية مرنة لخدمة الأنشطة المحلية' : 'Flexible commercial platforms for local businesses' },
  ];

  return (
    <section className="py-24 bg-surface/30 border-t border-b border-border/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            05 · {t.capabilities.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {t.capabilities.title}
          </h2>
          <p className="text-sm sm:text-base text-muted">
            {t.capabilities.description}
          </p>
        </div>

        {/* Dual Pillar Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Custom Front-End Pillar */}
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent-dim text-accent border border-accent/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {t.capabilities.customTitle}
                </h3>
                <span className="text-xs font-mono text-muted">
                  React · Next.js · TypeScript · Three.js · GSAP
                </span>
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              {t.capabilities.customDesc}
            </p>

            <ul className="space-y-3 pt-2">
              {customTech.map((item) => (
                <li key={item.name} className="flex items-start gap-2.5 text-xs">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground/90 font-mono">{item.name}</span>
                    <span className="text-muted block mt-0.5">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Development Pillar */}
          <div className="rounded-2xl border border-border/70 bg-surface/60 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-surface border border-border-strong text-foreground">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {t.capabilities.visualTitle}
                </h3>
                <span className="text-xs font-mono text-muted">
                  Webflow · Framer · GoHighLevel · Wix Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              {t.capabilities.visualDesc}
            </p>

            <ul className="space-y-3 pt-2">
              {visualTech.map((item) => (
                <li key={item.name} className="flex items-start gap-2.5 text-xs">
                  <CheckCircle className="w-4 h-4 text-foreground/70 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground/90 font-mono">{item.name}</span>
                    <span className="text-muted block mt-0.5">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Philosophy Core Message Banner */}
        <div className="p-6 rounded-2xl border border-accent/30 bg-accent-dim/40 text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            {isArabic ? 'المبدأ الجوهري' : 'Working Philosophy'}
          </span>
          <p className="text-sm font-medium text-foreground leading-relaxed">
            "{t.capabilities.coreMessage}"
          </p>
        </div>
      </div>
    </section>
  );
}
