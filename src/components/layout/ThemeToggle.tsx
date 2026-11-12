'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
  label?: string;
}

export default function ThemeToggle({ className, label }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center gap-2 p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-surface-hover transition-colors border border-border/50 text-xs font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
      aria-label={label || 'Toggle color theme'}
      title={label || 'Toggle theme'}
    >
      {mounted && theme === 'dark' ? (
        <Sun className="w-4 h-4 text-accent transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-foreground/80 transition-transform duration-300 hover:-rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
