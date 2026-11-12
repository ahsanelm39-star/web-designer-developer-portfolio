import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from '@/lib/types';
import { PROJECTS } from '@/data/projects';
import CaseStudyView from '@/components/case-study/CaseStudyView';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const locales: Locale[] = ['ar', 'en'];
  const params: { locale: string; slug: string }[] = [];

  locales.forEach((locale) => {
    PROJECTS.forEach((project) => {
      params.push({
        locale,
        slug: project.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const isArabic = locale === 'ar';
  const pageTitle = `${project.title[locale]} — ${
    isArabic ? 'دراسة حالة المشروع' : 'Client Case Study'
  }`;

  return {
    title: pageTitle,
    description: project.summary[locale],
    openGraph: {
      title: pageTitle,
      description: project.summary[locale],
      images: [
        {
          url: project.previewImage,
          width: 1200,
          height: 630,
          alt: project.title[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: project.summary[locale],
      images: [project.previewImage],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} locale={locale} />;
}
