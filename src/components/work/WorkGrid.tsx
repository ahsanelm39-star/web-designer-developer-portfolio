'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Filter } from 'lucide-react';
import { Locale, BusinessSectorKey } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import { PROJECTS, BUSINESS_SECTORS } from '@/data/projects';

interface WorkGridProps {
  locale: Locale;
}

export default function WorkGrid({ locale }: WorkGridProps) {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  // Only display sector filters that actually have matching projects in our dataset!
  const availableSectorKeys = new Set(PROJECTS.map((p) => p.sector.key));
  const activeFilters = BUSINESS_SECTORS.filter(
    (sec) => sec.key === 'all' || availableSectorKeys.has(sec.key as BusinessSectorKey)
  );

  const filteredProjects =
    selectedSector === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.sector.key === selectedSector);

  return (
    <div className="space-y-12">
      {/* Business Sector Filter Navigation */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-accent" />
          <span>{isArabic ? 'تصفية حسب القطاع التجاري:' : 'Filter by Business Sector:'}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {activeFilters.map((sector) => {
            const isActive = selectedSector === sector.key;
            const count =
              sector.key === 'all'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.sector.key === sector.key).length;

            return (
              <button
                key={sector.key}
                type="button"
                onClick={() => setSelectedSector(sector.key)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'bg-foreground text-background font-semibold shadow-sm'
                    : 'bg-surface/60 border border-border/70 text-foreground/80 hover:bg-surface-hover hover:text-foreground'
                }`}
                role="tab"
                aria-selected={isActive}
              >
                <span>{sector.label[locale]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-background/20 text-background'
                      : 'bg-surface-elevated text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-border bg-surface/30 space-y-4">
          <p className="text-sm text-muted">{t.work.noResults}</p>
          <button
            type="button"
            onClick={() => setSelectedSector('all')}
            className="text-xs font-semibold text-accent hover:underline font-mono"
          >
            {t.work.resetFilter}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isClient = project.classification.key === 'client-project';

            return (
              <div
                key={project.slug}
                className="group rounded-2xl border border-border/60 bg-surface/40 hover:bg-surface/80 p-5 flex flex-col justify-between transition-all duration-300 space-y-5"
              >
                {/* Visual Preview */}
                <div className="space-y-4">
                  <Link
                    href={`/${locale}/work/${project.slug}`}
                    className="block relative aspect-[16/10] rounded-xl overflow-hidden border border-border/70 shadow-md group-hover:border-accent/40 transition-colors bg-surface-elevated"
                  >
                    <Image
                      src={project.previewImage}
                      alt={project.title[locale]}
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
                  </Link>

                  {/* Classification & Sector Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                        isClient
                          ? 'bg-accent-dim text-accent border border-accent/20'
                          : 'bg-surface border border-border text-foreground/80'
                      }`}
                    >
                      {project.classification.label[locale]}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-surface border border-border/50 text-muted">
                      {project.sector.label[locale]}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      <Link href={`/${locale}/work/${project.slug}`}>
                        {project.title[locale]}
                      </Link>
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-3">
                      {project.summary[locale]}
                    </p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold">
                  <Link
                    href={`/${locale}/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-foreground hover:text-accent transition-colors"
                  >
                    <span>{t.work.viewCaseStudy}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
            );
          })}
        </div>
      )}
    </div>
  );
}
