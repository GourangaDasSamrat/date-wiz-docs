'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, siteConfig } from '@/lib/navigation';
import { Zap } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-4">
        {/* Logo mark in sidebar */}
        <div className="flex items-center gap-2.5 mb-8 px-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-sm">
            <Zap size={14} className="text-white" strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{siteConfig.name}</span>
            <span className="ml-2 badge bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-400">
              v{siteConfig.version}
            </span>
          </div>
        </div>

        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h5 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider
                             text-slate-400 dark:text-slate-500">
                {section.title}
              </h5>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                      >
                        {item.title}
                        {item.badge && (
                          <span className="ml-auto badge bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-400">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
