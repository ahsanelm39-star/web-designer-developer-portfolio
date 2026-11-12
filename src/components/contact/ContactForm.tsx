'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MessageSquare, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';

interface ContactFormProps {
  locale: Locale;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const searchParams = useSearchParams();
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  const defaultService = searchParams?.get('service') || searchParams?.get('project') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: defaultService || 'business-website',
    description: '',
    referenceUrl: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent, mode: 'whatsapp' | 'email') => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setStatus('error');
      setErrorMessage(t.contact.validationError);
      return;
    }

    setStatus('submitting');

    // Build structured inquiry text
    const lines = [
      `*New Project Inquiry — استفسار مشروع جديد*`,
      `• *Name / الاسم:* ${formData.name}`,
      `• *Email / البريد:* ${formData.email}`,
      formData.company ? `• *Company / النشاط:* ${formData.company}` : null,
      `• *Project Type / نوع المشروع:* ${formData.projectType}`,
      formData.referenceUrl ? `• *Reference / المرجع:* ${formData.referenceUrl}` : null,
      ``,
      `• *Project Overview / تفاصيل المشروع:*`,
      `${formData.description}`,
    ].filter(Boolean);

    const messageText = lines.join('\n');

    if (mode === 'whatsapp') {
      const whatsappNumber = '201097926288';
      const encodedMsg = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

      setTimeout(() => {
        setStatus('success');
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 500);
    } else {
      // Mailto link fallback
      const subject = encodeURIComponent(`Project Inquiry: ${formData.company || formData.name}`);
      const body = encodeURIComponent(messageText);
      const mailtoUrl = `mailto:ah.dev.3@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setStatus('success');
        window.location.href = mailtoUrl;
      }, 500);
    }
  };

  return (
    <div className="rounded-2xl border border-border/70 bg-surface/50 p-6 sm:p-10 shadow-xl space-y-8">
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          {t.contact.formTitle}
        </h3>
        <p className="text-xs sm:text-sm text-muted">
          {t.contact.formDesc}
        </p>
      </div>

      {status === 'error' && (
        <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {status === 'success' && (
        <div className="p-4 rounded-xl border border-accent/40 bg-accent-dim text-accent text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{t.contact.successMessage}</span>
        </div>
      )}

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-xs font-mono font-medium text-foreground/90">
              {t.contact.nameLabel} <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.namePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-mono font-medium text-foreground/90">
              {t.contact.emailLabel} <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.emailPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Company / Project Name */}
          <div className="space-y-2">
            <label htmlFor="company" className="block text-xs font-mono font-medium text-foreground/90">
              {t.contact.companyLabel}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder={t.contact.companyPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <label htmlFor="projectType" className="block text-xs font-mono font-medium text-foreground/90">
              {t.contact.projectTypeLabel}
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [&>option]:bg-surface [&>option]:text-foreground"
            >
              {t.contact.projectTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reference URL */}
        <div className="space-y-2">
          <label htmlFor="referenceUrl" className="block text-xs font-mono font-medium text-foreground/90">
            {t.contact.refLabel}
          </label>
          <input
            id="referenceUrl"
            name="referenceUrl"
            type="url"
            value={formData.referenceUrl}
            onChange={handleChange}
            placeholder={t.contact.refPlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-xs font-mono font-medium text-foreground/90">
            {t.contact.descriptionLabel} <span className="text-accent">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            value={formData.description}
            onChange={handleChange}
            placeholder={t.contact.descriptionPlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, 'whatsapp')}
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-xs tracking-wide shadow-md hover:opacity-95 disabled:opacity-50 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.contact.submitWhatsapp}</span>
          </button>

          {/* <button
            type="button"
            onClick={(e) => handleSubmit(e, 'email')}
            disabled={status === 'submitting'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border/80 bg-surface/70 hover:bg-surface-hover text-foreground font-medium text-xs transition-colors"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>{t.contact.submitEmail}</span>
          </button> */}
        </div>

        <p className="text-[11px] font-mono text-muted/80 leading-relaxed pt-2">
          {t.contact.writtenNote}
        </p>
      </form>
    </div>
  );
}
