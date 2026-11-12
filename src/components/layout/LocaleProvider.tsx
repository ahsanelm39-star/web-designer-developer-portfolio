'use client';

import React, { useEffect } from 'react';
import { Locale } from '@/lib/types';

interface LocaleProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

export default function LocaleProvider({ locale, children }: LocaleProviderProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return <>{children}</>;
}
