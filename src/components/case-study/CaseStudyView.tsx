'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Check, Globe, MapPin, Building, Sparkles } from 'lucide-react';
import { ProjectData, Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import { PROJECTS } from '@/data/projects';

interface CaseStudyViewProps {
  project: ProjectData;
  locale: Locale;
}

export default function CaseStudyView({ project, locale }: CaseStudyViewProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowRight : ArrowLeft;
  const NextArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  // Find next project in sequence
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="min-h-screen pt-28 pb-24 bg-background transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Breadcrumb & Return to Selected Work */}
        <div>
          <Link
            href={`/${locale}/work`}
            className="group inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
            <span>{t.caseStudy.backToWork}</span>
          </Link>
        </div>

        {/* 01. Project Header & Strategic Introduction */}
        <header className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-dim text-accent border border-accent/20 font-medium">
              {project.classification.label[locale]}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border/70 text-muted">
              {project.sector.label[locale]}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border/70 text-muted/80">
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.18]">
            {project.title[locale]}
          </h1>

          <p className="text-lg sm:text-xl text-muted font-medium leading-relaxed">
            {project.subtitle[locale]}
          </p>

          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
              >
                <span>{t.caseStudy.liveProjectLink}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </header>

        {/* Hero Visual Presentation */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/70 shadow-2xl bg-surface-elevated">
          <Image
            src={project.previewImage}
            alt={project.title[locale]}
            fill
            unoptimized
            className="object-cover object-top"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* 02. Project Overview Snapshot (No technology fields per instructions) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/50 text-xs">
          <div className="space-y-1">
            <span className="font-mono text-muted uppercase tracking-wider block text-[10px]">
              {t.caseStudy.marketSector}
            </span>
            <span className="font-semibold text-foreground text-sm flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-accent shrink-0" />
              {project.sector.label[locale]}
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-muted uppercase tracking-wider block text-[10px]">
              {t.caseStudy.marketRegion}
            </span>
            <span className="font-semibold text-foreground text-sm flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              {project.market[locale]}
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-muted uppercase tracking-wider block text-[10px]">
              {t.caseStudy.languageSupport}
            </span>
            <span className="font-semibold text-foreground text-sm flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-accent shrink-0" />
              {project.languages[locale]}
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-muted uppercase tracking-wider block text-[10px]">
              {t.caseStudy.clientRole}
            </span>
            <span className="font-medium text-foreground text-xs leading-snug block">
              {project.role[locale]}
            </span>
          </div>
        </div>

        {/* 03 & 04. Context & Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl border border-border/60 bg-surface/30 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              01 · {t.caseStudy.context}
            </span>
            <h3 className="text-xl font-bold text-foreground">
              {isArabic ? 'طبيعة النشاط ومتطلبات الحضور' : 'Operational Scope & Business Context'}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {project.context[locale]}
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border/60 bg-surface/30 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              02 · {t.caseStudy.challenge}
            </span>
            <h3 className="text-xl font-bold text-foreground">
              {isArabic ? 'التحدي الاتصالي والواجهات' : 'The Core Communication Hurdle'}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {project.challenge[locale]}
            </p>
          </div>
        </div>

        {/* 05. Strategic Thinking */}
        <section className="p-8 sm:p-10 rounded-2xl border border-border/60 bg-surface/40 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            03 · {t.caseStudy.strategicThinking}
          </span>
          <p className="text-base text-foreground/90 font-medium leading-relaxed">
            {project.strategy.description[locale]}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {project.strategy.points.map((pt, i) => (
              <div key={i} className="p-4 rounded-xl border border-border/40 bg-background/50 space-y-2">
                <span className="font-mono text-xs font-bold text-accent">0{i + 1}</span>
                <p className="text-xs text-muted leading-relaxed">{pt[locale]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 06. Design & User Experience */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              04 · {t.caseStudy.designAndUx}
            </span>
            <h3 className="text-2xl font-bold text-foreground">
              {isArabic ? 'التصميم البصري وهندسة التجربة' : 'Visual Hierarchy & User Experience Decisions'}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {project.designAndUx.description[locale]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {project.designAndUx.points.map((pt, i) => (
              <div key={i} className="p-5 rounded-xl border border-border/50 bg-surface/40 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {pt[locale]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 07. Execution & Scope of Deliverables */}
        <section className="p-8 sm:p-10 rounded-2xl border border-border/60 bg-surface/40 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              05 · {t.caseStudy.execution}
            </span>
            <h3 className="text-2xl font-bold text-foreground">
              {t.caseStudy.deliverables}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {project.execution.description[locale]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/40">
            {project.deliverables[locale].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 08. Project Gallery (If multiple shots exist, e.g. for Mithaq) */}
        {/* {project.galleryImages && project.galleryImages.length > 1 && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                06 · {isArabic ? 'معرض لقطات الواجهة وتفاصيل البناء' : 'Interface Showcase & Visual Architecture'}
              </span>
              <h3 className="text-2xl font-bold text-foreground">
                {isArabic ? 'استعراض مقاطع الواجهة الحقيقية' : 'Curated Visual Architecture'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/60 shadow-lg bg-surface-elevated"
                >
                  <Image
                    src={img}
                    alt={`${project.title[locale]} - Shot 0${i + 1}`}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )} */}

        {/* 09. Delivery Context, Observations & Outcome */}
        <section className="p-8 rounded-2xl border border-border/60 bg-surface/20 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted font-semibold">
              07 · {t.caseStudy.observations}
            </span>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {project.observations[locale]}
            </p>
          </div>

          <div className="pt-4 border-t border-border/40 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
              {t.caseStudy.outcome}
            </span>
            <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
              {project.outcomeNotes[locale]}
            </p>
          </div>
        </section>

        {/* 10. Next Project Navigation */}
        {nextProject && (
          <div className="pt-12 border-t border-border/50">
            <Link
              href={`/${locale}/work/${nextProject.slug}`}
              className="group block p-8 rounded-2xl border border-border/60 bg-surface/40 hover:bg-surface/80 transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span>{t.caseStudy.nextProject}</span>
                <span className="group-hover:text-accent flex items-center gap-1 transition-colors">
                  {t.work.viewCaseStudy}
                  <NextArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                {nextProject.title[locale]}
              </h4>
              <p className="text-xs sm:text-sm text-muted font-mono">
                {nextProject.sector.label[locale]} · {nextProject.classification.label[locale]}
              </p>
            </Link>
          </div>
        )}

        {/* 11. Relevant Inquire CTA */}
        <div className="p-8 sm:p-12 rounded-2xl border border-accent/30 bg-accent-dim/30 text-center space-y-6">
          <Sparkles className="w-6 h-6 text-accent mx-auto" />
          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t.caseStudy.discussProjectHeading}
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              {isArabic
                ? 'يسعدني دراسة متطلبات نشاطك وبناء واجهة رقمية متقنة تخدم أهدافك التجارية بدقة.'
                : 'I would be glad to evaluate your commercial needs and build an authoritative digital presence tailored to your objectives.'}
            </p>
          </div>
          <Link
            href={`/${locale}/contact?project=${project.slug}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-md hover:opacity-95 transition-opacity"
          >
            <span>{t.caseStudy.discussProjectCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
