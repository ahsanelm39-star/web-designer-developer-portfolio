'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MotionProviderProps {
  children: React.ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  // 1. Scroll-triggered reveal animations & section choreography
  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Small timeout to allow Next.js hydration and DOM layout
      const timer = setTimeout(() => {
        // Sections Entrance
        const sections = document.querySelectorAll('section, article > header, article > section');
        sections.forEach((sec) => {
          gsap.fromTo(
            sec,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: sec,
                start: 'top 88%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        });

        // Staggered Cards / Grids
        const grids = document.querySelectorAll('.grid');
        grids.forEach((grid) => {
          const directCards = grid.querySelectorAll(':scope > div, :scope > article');
          if (directCards.length > 1) {
            gsap.fromTo(
              directCards,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
                scrollTrigger: {
                  trigger: grid,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  once: true,
                },
              }
            );
          }
        });

        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    }, containerRef);

    return () => ctx.revert();
  }, [pathname, prefersReduced]);

  // 2. Magnetic buttons on desktop
  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;
    const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isPointerFine) return;

    const ctx = gsap.context(() => {
      const magneticTargets = document.querySelectorAll('a.group, button, .magnetic-btn');

      magneticTargets.forEach((target) => {
        const el = target as HTMLElement;

        const onMouseMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distX = (e.clientX - centerX) * 0.22;
          const distY = (e.clientY - centerY) * 0.22;

          gsap.to(el, {
            x: distX,
            y: distY,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };

        const onMouseLeave = () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.4)',
            overwrite: 'auto',
          });
        };

        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    }, containerRef);

    return () => ctx.revert();
  }, [pathname, prefersReduced]);

  // 3. Subtle non-intrusive cursor follower on desktop
  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;
    const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isPointerFine || !cursorRef.current) return;

    const cursor = cursorRef.current;
    let mouseX = -100;
    let mouseY = -100;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseEnterInteractive = () => {
      gsap.to(cursor, {
        scale: 2.2,
        opacity: 0.5,
        duration: 0.2,
      });
    };

    const handleMouseLeaveInteractive = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0.8,
        duration: 0.2,
      });
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });

    // Interactive element listeners
    const attachInteractive = () => {
      const interactiveEls = document.querySelectorAll('a, button, input, textarea, select');
      interactiveEls.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };

    const timer = setTimeout(attachInteractive, 200);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [pathname, prefersReduced]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Subtle Spatial Cursor Follower */}
      {!prefersReduced && (
        <div
          ref={cursorRef}
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50 w-3 h-3 rounded-full bg-accent opacity-80 blur-[0.5px] transition-opacity duration-300 hidden md:block"
        />
      )}
      {children}
    </div>
  );
}
