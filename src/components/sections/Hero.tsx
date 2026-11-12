'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import HeroScene from '@/components/3d/HeroScene';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, clearProps: 'transform,opacity' }
      )
        .fromTo(
          '.hero-eyebrow',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, clearProps: 'transform,opacity' },
          '-=0.4'
        )
        .fromTo(
          '.hero-headline',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.85, clearProps: 'transform,opacity' },
          '-=0.3'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, clearProps: 'transform,opacity' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, clearProps: 'transform,opacity' },
          '-=0.4'
        )
        .fromTo(
          '.hero-portrait',
          { opacity: 0, scale: 0.92, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, clearProps: 'transform,opacity' },
          '-=0.3'
        )
        .fromTo(
          '.hero-stats-item',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, clearProps: 'transform,opacity' },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [locale, prefersReduced]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle background spatial grid */}
      <div className="absolute inset-0 spatial-grid opacity-[0.03] dark:opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Status & Eyebrow */}
            <div className="space-y-3">
              <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-surface/60 backdrop-blur-sm text-xs font-mono text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>{t.hero.statusAvailable}</span>
              </div>
              <p className="hero-eyebrow text-xs font-mono tracking-widest uppercase text-muted">
                {t.hero.eyebrow}
              </p>
            </div>

            {/* Primary Headline */}
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.18] sm:leading-[1.15]">
              {t.hero.headline}
            </h1>

            {/* Supporting Copy */}
            <p className="hero-description text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/${locale}/work`}
                className="hero-cta group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm tracking-wide shadow-lg shadow-accent/10 hover:opacity-95 transition-all"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="hero-cta group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border/80 bg-surface/50 hover:bg-surface-hover text-foreground font-medium text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Real Portrait & Verified Experience Card */}
            <div className="hero-portrait pt-6 border-t border-border/40 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/40 shadow-md shrink-0">
                <Image
                  src="/images/ahmed-web.jpg"
                  alt="Ahmed — Website Designer & Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm text-foreground">Ahmed</span>
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono text-muted">· {t.brand.title}</span>
                </div>
                <p className="text-xs text-muted/90 font-mono mt-0.5">
                  26+ {isArabic ? 'موقعاً منجزاً' : 'Websites Built'} · 2+ {isArabic ? 'سنوات خبرة' : 'Years Experience'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Architectural Scene */}
          <div className="lg:col-span-5 relative w-full h-[440px] sm:h-[500px] lg:h-[560px] flex items-center justify-center">
            <HeroScene className="w-full h-full" />
          </div>
        </div>

        {/* Horizontal Credibility Strip */}
        <div className="mt-16 pt-8 border-t border-border/40 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="hero-stats-item space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-foreground">26+</div>
            <div className="text-xs font-semibold text-foreground/90">{t.hero.stats.projects}</div>
            <div className="text-[11px] font-mono text-muted">{t.hero.stats.projectsSub}</div>
          </div>
          <div className="hero-stats-item space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-foreground">2+</div>
            <div className="text-xs font-semibold text-foreground/90">{t.hero.stats.experience}</div>
            <div className="text-[11px] font-mono text-muted">{t.hero.stats.experienceSub}</div>
          </div>
          <div className="hero-stats-item space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-foreground">RTL / LTR</div>
            <div className="text-xs font-semibold text-foreground/90">{t.hero.stats.bilingual}</div>
            <div className="text-[11px] font-mono text-muted">{t.hero.stats.bilingualSub}</div>
          </div>
          <div className="hero-stats-item space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-foreground">Agency</div>
            <div className="text-xs font-semibold text-foreground/90">{t.hero.stats.collaboration}</div>
            <div className="text-[11px] font-mono text-muted">{t.hero.stats.collaborationSub}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
