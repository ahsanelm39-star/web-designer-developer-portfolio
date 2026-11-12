'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { Locale } from '@/lib/types';
import { BrandMark } from '@/components/brand/BrandLogo';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PageTransitionContextValue {
  isNavigating: boolean;
  startTransition: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue>({
  isNavigating: false,
  startTransition: () => {},
});

export const usePageTransition = () => useContext(PageTransitionContext);

interface PageTransitionProviderProps {
  children: React.ReactNode;
  locale: Locale;
}

export default function PageTransitionProvider({
  children,
  locale,
}: PageTransitionProviderProps) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const [isNavigating, setIsNavigating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isArabic = locale === 'ar';

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hideOverlay = useCallback(() => {
    if (!overlayRef.current) {
      setIsNavigating(false);
      return;
    }

    if (prefersReduced) {
      overlayRef.current.style.display = 'none';
      setIsNavigating(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.display = 'none';
        }
        setIsNavigating(false);
      },
    });

    tl.to(contentRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.3,
      ease: 'power2.in',
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.1'
    );
  }, [prefersReduced]);

  const showOverlay = useCallback(() => {
    if (!overlayRef.current) return;
    setIsNavigating(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    overlayRef.current.style.display = 'flex';

    if (prefersReduced) {
      overlayRef.current.style.opacity = '1';
      return;
    }

    gsap.killTweensOf([overlayRef.current, contentRef.current, progressRef.current]);

    const tl = gsap.timeline();

    tl.set(overlayRef.current, { opacity: 0 })
      .set(contentRef.current, { opacity: 0, y: 15, scale: 0.98 })
      .set(progressRef.current, { width: '0%' })
      .to(overlayRef.current, {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      })
      .to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: 'back.out(1.2)',
        },
        '-=0.15'
      )
      .to(
        progressRef.current,
        {
          width: '85%',
          duration: 0.6,
          ease: 'power1.inOut',
        },
        '-=0.2'
      );

    // Fail-safe: ensure overlay never gets stuck if navigation aborts
    timeoutRef.current = setTimeout(() => {
      hideOverlay();
    }, 1800);
  }, [prefersReduced, hideOverlay]);

  // When pathname changes, complete progress bar and dismiss overlay
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: '100%',
          duration: 0.2,
          ease: 'power2.out',
          onComplete: () => {
            // Small pause for page paint
            setTimeout(hideOverlay, 180);
          },
        });
      } else {
        hideOverlay();
      }
    }
  }, [pathname, hideOverlay]);

  // Intercept clicks on internal links to trigger transition
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');

      // Ignore external links, mailto, whatsapp, target="_blank", downloads, or anchor hash jumps
      if (
        !href ||
        target === '_blank' ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('https://wa.me') ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('#') ||
        href === pathname ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      // If it's an internal route that differs from the current path
      if (href.startsWith('/') && href !== pathname) {
        showOverlay();
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname, showOverlay]);

  return (
    <PageTransitionContext.Provider
      value={{ isNavigating, startTransition: showOverlay }}
    >
      {/* Full-Screen Branded Transition Overlay */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{ display: 'none' }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl select-none pointer-events-auto"
      >
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-center space-y-6 text-center max-w-xs px-6"
        >
          {/* Branded Vector Mark */}
          <div className="relative">
            <BrandMark className="w-14 h-14" />
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full -z-10 animate-pulse-slow" />
          </div>

          {/* Wordmark & Discipline */}
          <div className="space-y-1">
            <span className="font-mono text-2xl font-bold tracking-tight text-foreground flex items-center justify-center">
              AHMED<span className="text-accent">.</span>
            </span>
            <p className="text-xs font-mono uppercase tracking-widest text-muted">
              {isArabic
                ? 'تصميم وتطوير المواقع'
                : 'Website Designer & Developer'}
            </p>
          </div>

          {/* Precision Architectural Progress Bar */}
          <div className="w-36 h-1 rounded-full bg-border/60 overflow-hidden relative">
            <div
              ref={progressRef}
              className="absolute top-0 bottom-0 start-0 w-0 bg-accent rounded-full shadow-[0_0_8px_var(--accent)]"
            />
          </div>

          {/* Subtitle status indicator */}
          <div className="text-[11px] font-mono text-muted/70 tracking-wider">
            {isArabic ? 'جاري التحميل...' : 'Loading experience...'}
          </div>
        </div>
      </div>

      {children}
    </PageTransitionContext.Provider>
  );
}
