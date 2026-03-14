'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Github, Moon, Sun, Zap, Package } from 'lucide-react';
import { siteConfig } from '@/lib/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-slate-200 dark:border-slate-800
                       bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left — Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600
                          flex items-center justify-center shadow-sm
                          group-hover:shadow-brand-400/30 group-hover:shadow-md transition-all duration-200">
            <Zap size={16} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">
            date<span className="text-brand-500">-wiz</span>
          </span>
        </Link>

        {/* Center — Version badge */}
        <div className="hidden md:flex items-center gap-1 px-3 py-1 rounded-full
                        bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            v{siteConfig.version}
          </span>
          <span className="mx-1.5 text-slate-300 dark:text-slate-600">·</span>
          <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold">
            zero deps · &lt;2KB
          </span>
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-1">
          <a
            href={siteConfig.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link hidden sm:flex"
            aria-label="npm package"
          >
            <Package size={16} />
            <span className="text-sm">npm</span>
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label="GitHub repository"
          >
            <Github size={16} />
            <span className="hidden sm:inline text-sm">GitHub</span>
          </a>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="nav-link"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
