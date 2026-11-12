'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import { PROJECTS } from '@/data/projects';

interface FeaturedWorkProps {
  locale: Locale;
}

export default function FeaturedWork({ locale }: FeaturedWorkProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const featuredList = PROJECTS.filter((p) => p.featured);
  const mithaq = featuredList.find((p) => p.slug === 'mithaq-legal') || featuredList[0];
  const alawad = featuredList.find((p) => p.slug === 'al-awad-solutions') || featuredList[1];
  const safer = featuredList.find((p) => p.slug === 'safeer-al-oamara') || featuredList[2];
  const a2z = featuredList.find((p) => p.slug === 'mobile-car-wash-kuwait') || featuredList[3];

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/40">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              02 · {t.work.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {t.work.title}
            </h2>
            <p className="text-sm sm:text-base text-muted">
              {t.work.description}
            </p>
          </div>

          <Link
            href={`/${locale}/work`}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors self-start md:self-auto"
          >
            <span>{t.work.exploreAll}</span>
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* 1. Large Heroic Editorial Feature: Mithaq Legal */}
        {mithaq && (
          <div className="group relative rounded-2xl border border-border/60 bg-surface/40 hover:bg-surface/70 transition-all duration-300 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-dim text-accent border border-accent/30 font-medium">
                    {mithaq.classification.label[locale]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border/60 text-muted">
                    {mithaq.sector.label[locale]}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {mithaq.title[locale]}
                  </h3>
                  <p className="text-sm font-mono text-muted">
                    {mithaq.subtitle[locale]}
                  </p>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {mithaq.summary[locale]}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/${locale}/work/${mithaq.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    <span>{t.work.viewCaseStudy}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {mithaq.liveUrl && (
                    <a
                      href={mithaq.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground transition-colors"
                    >
                      <span>{t.work.viewLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Large Visual Mockup */}
              <div className="lg:col-span-7 relative">
                <Link
                  href={`/${locale}/work/${mithaq.slug}`}
                  className="block relative aspect-[16/10] rounded-xl overflow-hidden border border-border/70 shadow-2xl group-hover:border-accent/40 transition-colors bg-surface-elevated"
                >
                  <Image
                    src={mithaq.previewImage}
                    alt={mithaq.title[locale]}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2. Asymmetric Two-Column Showcase: Al Awad Solutions */}
        {alawad && (
          <div className="group relative rounded-2xl border border-border/60 bg-surface/40 hover:bg-surface/70 transition-all duration-300 overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Preview */}
              <div className="lg:col-span-7 order-2 lg:order-1 relative">
                <Link
                  href={`/${locale}/work/${alawad.slug}`}
                  className="block relative aspect-[16/10] rounded-xl overflow-hidden border border-border/70 shadow-2xl group-hover:border-accent/40 transition-colors bg-surface-elevated"
                >
                  <Image
                    src={alawad.previewImage}
                    alt={alawad.title[locale]}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
                </Link>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border/80 text-foreground/90 font-medium">
                    {alawad.classification.label[locale]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border/60 text-muted">
                    {alawad.sector.label[locale]}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {alawad.title[locale]}
                  </h3>
                  <p className="text-sm font-mono text-muted">
                    {alawad.subtitle[locale]}
                  </p>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {alawad.summary[locale]}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/${locale}/work/${alawad.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    <span>{t.work.viewCaseStudy}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {alawad.liveUrl && (
                    <a
                      href={alawad.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground transition-colors"
                    >
                      <span>{t.work.viewLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 & 4. Split Pair: Safeer Al Oamara & A2Z Car Wash */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[safer, a2z].filter(Boolean).map((project) => (
            <div
              key={project.slug}
              className="group rounded-2xl border border-border/60 bg-surface/40 hover:bg-surface/70 p-6 flex flex-col justify-between transition-all duration-300 space-y-6"
            >
              <div className="space-y-4">
                <Link
                  href={`/${locale}/work/${project.slug}`}
                  className="block relative aspect-[16/10] rounded-xl overflow-hidden border border-border/70 shadow-lg group-hover:border-accent/40 transition-colors bg-surface-elevated"
                >
                  <Image
                    src={project.previewImage}
                    alt={project.title[locale]}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </Link>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface border border-border/60 text-muted">
                    {project.sector.label[locale]}
                  </span>
                  <span className="text-[11px] font-mono text-muted/70">
                    {project.market[locale]}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title[locale]}
                  </h4>
                  <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                    {project.summary[locale]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <Link
                  href={`/${locale}/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>{t.work.viewCaseStudy}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-muted hover:text-foreground transition-colors"
                  >
                    <span>{t.work.viewLive}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
