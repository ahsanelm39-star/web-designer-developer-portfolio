import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import '@/styles/globals.css';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LocaleProvider from '@/components/layout/LocaleProvider';
import MotionProvider from '@/components/animation/MotionProvider';
import PageTransitionProvider from '@/components/animation/PageTransitionProvider';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (locale !== 'ar' && locale !== 'en') {
    return {};
  }

  const t = TRANSLATIONS[locale];
  const baseUrl = 'https://ahmed-web1.vercel.app';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${t.brand.name} | ${t.brand.title}`,
      template: `%s | ${t.brand.name}`,
    },
    description: t.hero.description,
    keywords: [
      'Ahmed Website Developer',
      'Website Designer',
      'Business Website Development',
      'Custom Front-End Engineering',
      'Three.js Portfolio',
      'مصمم مواقع',
      'مطور مواقع',
      'تصميم مواقع شركات',
      'تطوير مواقع تجارية',
      'مواقع احترافية الكويت',
      'مواقع احترافية السعودية',
    ],
    authors: [{ name: 'Ahmed', url: baseUrl }],
    creator: 'Ahmed',
    publisher: 'Ahmed',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: `${t.brand.name} | ${t.brand.title}`,
      description: t.hero.description,
      url: `${baseUrl}/${locale}`,
      siteName: `${t.brand.name} — ${t.brand.title}`,
      locale: locale === 'ar' ? 'ar_AR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/ahmed-web.jpg',
          width: 1200,
          height: 630,
          alt: `${t.brand.name} — ${t.brand.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.brand.name} | ${t.brand.title}`,
      description: t.hero.description,
      images: ['/images/ahmed-web.jpg'],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (locale !== 'ar' && locale !== 'en') {
    notFound();
  }

  const isArabic = locale === 'ar';
  const t = TRANSLATIONS[locale as Locale];

  // Structured Data Schema (Person & ProfessionalService)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ahmed — Website Designer & Developer',
    description: t.hero.description,
    url: `https://ahmed-web1.vercel.app/${locale}`,
    telephone: '+201097926288',
    email: 'ah.dev.3@gmail.com',
    priceRange: '$$',
    knowsLanguage: ['Arabic', 'English'],
    knowsAbout: [
      'Website Design',
      'Front-End Engineering',
      'Next.js',
      'Three.js',
      'Webflow',
      'Commercial Landing Pages',
    ],
  };

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={locale}
      className="min-h-screen flex flex-col flex-1"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocaleProvider locale={locale as Locale}>
        <PageTransitionProvider locale={locale as Locale}>
          <MotionProvider>
            <Navbar locale={locale as Locale} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale as Locale} />
            <FloatingWhatsApp locale={locale as Locale} />
          </MotionProvider>
        </PageTransitionProvider>
      </LocaleProvider>
    </div>
  );
}
