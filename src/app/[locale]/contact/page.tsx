import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { MessageSquare, Mail, Linkedin, Sparkles, Clock, Globe } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';
import ContactForm from '@/components/contact/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  const isArabic = locale === 'ar';

  return {
    title: isArabic ? 'تواصل مع أحمد — ابدأ مشروعك' : 'Contact Ahmed — Start a Project',
    description: isArabic
      ? 'تواصل مع أحمد لمناقشة مشروع موقعك الجديد، صفحات الهبوط، أو التعاون مع الوكالات عبر واتساب أو البريد الإلكتروني.'
      : 'Get in touch with Ahmed to discuss your upcoming website project, commercial landing page, or agency collaboration.',
  };
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  return (
    <div className="pt-32 pb-24 space-y-16 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            {t.contact.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Two-Column Inquiry Layout: Form on Left/Right, Verified Channels & Badges on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Functional Inquiry Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-96 rounded-2xl border border-border/70 bg-surface/50 animate-pulse" />}>
              <ContactForm locale={locale} />
            </Suspense>
          </div>

          {/* Direct Communication Channels & Information Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border/70 bg-surface/50 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-foreground">
                {t.contact.directChannelsTitle}
              </h3>

              <div className="space-y-4 text-sm">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/201097926288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-border/60 bg-background/50 hover:border-accent/50 hover:bg-surface-hover transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-accent-dim text-accent">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        WhatsApp
                      </p>
                      <p className="text-xs font-mono text-muted">
                        +20 109 792 6288
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-accent">
                    {isArabic ? 'محادثة فورية' : 'Direct Chat'}
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:ah.dev.3@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-xl border border-border/60 bg-background/50 hover:border-accent/50 hover:bg-surface-hover transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-surface text-foreground">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        Email
                      </p>
                      <p className="text-xs font-mono text-muted">
                        ah.dev.3@gmail.com
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted">
                    {isArabic ? 'استفسار رسمي' : 'Official Inquiry'}
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ahmed-mohame-843909439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-border/60 bg-background/50 hover:border-accent/50 hover:bg-surface-hover transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-surface text-foreground">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-xs font-mono text-muted">
                        linkedin.com/in/ahmed-mohame-843909439
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted">
                    {isArabic ? 'الملف المهني' : 'Profile'}
                  </span>
                </a>
              </div>
            </div>

            {/* Availability & Communication Notes */}
            <div className="rounded-2xl border border-border/60 bg-surface/30 p-6 space-y-4 text-xs font-mono text-muted">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Globe className="w-4 h-4 text-accent" />
                <span>{isArabic ? 'طبيعة التواصل المهني' : 'Communication Protocol'}</span>
              </div>
              <p className="leading-relaxed">
                {t.contact.writtenNote}
              </p>
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1.5 text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  {isArabic ? 'الرد خلال ساعات العمل' : 'Prompt Written Response'}
                </span>
                <span>{isArabic ? 'التوقيت المصري والخليجي' : 'Egypt & GCC Time Zones'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
