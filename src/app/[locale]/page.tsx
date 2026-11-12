import React from 'react';
import { Locale } from '@/lib/types';
import Hero from '@/components/sections/Hero';
import Credibility from '@/components/sections/Credibility';
import FeaturedWork from '@/components/sections/FeaturedWork';
import ServicesOverview from '@/components/sections/ServicesOverview';
import Methodology from '@/components/sections/Methodology';
import Capabilities from '@/components/sections/Capabilities';
import AboutOverview from '@/components/sections/AboutOverview';
import ContactCta from '@/components/sections/ContactCta';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  return (
    <>
      <Hero locale={locale} />
      <Credibility locale={locale} />
      <FeaturedWork locale={locale} />
      <ServicesOverview locale={locale} />
      <Methodology locale={locale} />
      <Capabilities locale={locale} />
      <AboutOverview locale={locale} />
      <ContactCta locale={locale} />
    </>
  );
}
