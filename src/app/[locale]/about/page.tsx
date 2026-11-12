import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Code2, Sparkles, Building, Layers } from 'lucide-react';
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
    title: isArabic ? 'عن أحمد — مصمم ومطور مواقع' : 'About Ahmed — Website Designer & Developer',
    description: isArabic
      ? 'تعرف على أحمد، مصمم ومطور مواقع بخبرة عملية تزيد عن سنتين و26+ موقعاً منجزاً لمختلف القطاعات التجارية والوكالات.'
      : 'Learn more about Ahmed, independent Website Designer & Developer with 2+ years of experience and 26+ websites delivered across diverse commercial sectors.',
  };
}

export default function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  return (
    <div className="pt-32 pb-24 space-y-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Editorial Bio with Genuine Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-surface-elevated">
              <Image
                src="/images/ahmed-web.jpg"
                alt="Ahmed — Website Designer & Developer"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-6 right-6 rtl:right-auto rtl:-left-6 bg-surface/90 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-xs font-semibold text-foreground">Ahmed</p>
                <p className="text-[11px] font-mono text-muted">{t.brand.title}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                {t.about.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]">
                {t.about.title}
              </h1>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
            </div>

            <div className="pt-4 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl border border-border/60 bg-surface/50">
                <span className="block text-accent font-bold text-lg">26+</span>
                <span className="text-muted">{isArabic ? 'موقعاً منجزاً' : 'Delivered Sites'}</span>
              </div>
              <div className="p-3.5 rounded-xl border border-border/60 bg-surface/50">
                <span className="block text-accent font-bold text-lg">2+</span>
                <span className="text-muted">{isArabic ? 'سنوات خبرة' : 'Years Experience'}</span>
              </div>
              <div className="p-3.5 rounded-xl border border-border/60 bg-surface/50">
                <span className="block text-foreground font-bold text-lg">Dual</span>
                <span className="text-muted">{isArabic ? 'عربي وإنجليزي' : 'RTL & LTR Fluent'}</span>
              </div>
              <div className="p-3.5 rounded-xl border border-border/60 bg-surface/50">
                <span className="block text-foreground font-bold text-lg">Gulf</span>
                <span className="text-muted">{isArabic ? 'خبرة وكالات' : 'Agency Standard'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Philosophy & Principles */}
        <div className="p-8 sm:p-12 rounded-2xl border border-border/70 bg-surface/40 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              {isArabic ? 'فلسفة العمل والنهج' : 'Philosophy & Working Standards'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {isArabic ? 'ثلاث ركائز تبنى عليها كافة المشاريع' : 'Three Pillars Guiding Every Build'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-xl border border-border/40 bg-background/50">
              <div className="w-10 h-10 rounded-lg bg-accent-dim text-accent flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-foreground">
                {isArabic ? 'الهدف التجاري أولاً' : 'Commercial Intent First'}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {isArabic
                  ? 'الموقع ليس لوحة فنية معزولة، بل أداة تواصل مصممة لشرح قيمة ما تقدمه للعميل وحثه على اتخاذ إجراء حقيقي.'
                  : 'Websites must not exist as decorative art; they are commercial instruments engineered to clarify value and prompt visitor action.'}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border border-border/40 bg-background/50">
              <div className="w-10 h-10 rounded-lg bg-accent-dim text-accent flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-foreground">
                {isArabic ? 'المرونة التقنية المنضبطة' : 'Unbiased Technical Tooling'}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {isArabic
                  ? 'اختيار الأداة الأصلح لخدمة المشروع وميزانيته وسهولة صيانته، دون التقيد بنظام برمجي أو منصة واحدة بعينها.'
                  : 'Selecting the optimal technology based on business scope, client autonomy, and performance, without rigid dogma.'}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border border-border/40 bg-background/50">
              <div className="w-10 h-10 rounded-lg bg-accent-dim text-accent flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-foreground">
                {isArabic ? 'الاحترام المعماري للاتجاهين' : 'Bidirectional Typographic Rigor'}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {isArabic
                  ? 'تصميم مستقل ومحاذاة أصيلة للنصوص العربية والإنجليزية دون اللجوء لانعكاس القوالب التلقائي المشوه.'
                  : 'Treating Arabic RTL and English LTR as independent typographic disciplines rather than mirrored auto-flipped templates.'}
              </p>
            </div>
          </div>
        </div>

        {/* Agency Background & White-Label Experience */}
        <div className="rounded-2xl border border-border/70 bg-surface/50 p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              {isArabic ? 'التعاون مع الوكالات' : 'Agency Collaboration Credentials'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {isArabic ? 'خبرة معتمدة في تسليم مشاريع الوكالات' : 'Proven White-Label Delivery for Digital Agencies'}
            </h2>
          </div>

          <p className="text-sm text-muted leading-relaxed max-w-3xl">
            {isArabic
              ? 'أتاح لي العمل السابق كشريك تطوير أمامي مع وكالة تسويق رقمي في منطقة الخليج العربي بناء فهم عملي دقيق لمتطلبات تسليم المشاريع المعقدة؛ من الالتزام الدقيق بنماذج التصاميم المعتمدة، إلى المحافظة على معايير السرية التامة وجودة الكود والقدرة على التعامل مع وتيرة التسليم السريعة.'
              : 'Previous collaboration delivering white-label front-end builds for a Gulf-based digital agency has reinforced strict execution discipline: precise adherence to Figma specifications, confidential delivery workflows, and reliable responsiveness under tight commercial launch deadlines.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/work`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <span>{t.work.title}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <ContactCta locale={locale} />
    </div>
  );
}
