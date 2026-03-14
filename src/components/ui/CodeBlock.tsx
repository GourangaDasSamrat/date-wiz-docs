'use client';

import { Highlight, themes, type Language } from 'prism-react-renderer';
import { Check, Copy } from 'lucide-react';
import { useClipboard } from '@/lib/clipboard';

interface CodeBlockProps {
  code: string;
  language?: Language;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const { copied, copy } = useClipboard();

  return (
    <div className="code-block my-4 shadow-sm">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {filename && (
            <span className="text-xs text-slate-400 font-mono">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {language && (
            <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">
              {language}
            </span>
          )}
          <button
            onClick={() => copy(code.trim())}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs
                       text-slate-400 hover:text-white hover:bg-slate-700
                       transition-all duration-150"
            aria-label="Copy code"
          >
            {copied ? (
              <><Check size={13} className="text-brand-400" /><span className="text-brand-400">Copied!</span></>
            ) : (
              <><Copy size={13} /><span>Copy</span></>
            )}
          </button>
        </div>
      </div>

      {/* Code */}
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto p-5 text-sm leading-relaxed`}
            style={{ ...style, background: '#0f172a', margin: 0 }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-5 text-slate-600 select-none text-right text-xs w-8">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token, j) => (
                    <span key={j} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

/** Inline code snippet — same style, no chrome */
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded-md text-[0.875em] font-mono
                     bg-brand-50 dark:bg-brand-950
                     text-brand-700 dark:text-brand-400
                     border border-brand-100 dark:border-brand-900">
      {children}
    </code>
  );
}
