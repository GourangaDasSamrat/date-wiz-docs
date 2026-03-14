import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'success' | 'tip';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const styles: Record<CalloutType, { wrapper: string; icon: string; Icon: typeof Info }> = {
  info: {
    wrapper: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100',
    icon: 'text-blue-500',
    Icon: Info,
  },
  warning: {
    wrapper: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100',
    icon: 'text-amber-500',
    Icon: AlertTriangle,
  },
  success: {
    wrapper: 'bg-brand-50 dark:bg-brand-950/40 border-brand-200 dark:border-brand-800 text-brand-900 dark:text-brand-100',
    icon: 'text-brand-500',
    Icon: CheckCircle,
  },
  tip: {
    wrapper: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-100',
    icon: 'text-purple-500',
    Icon: Lightbulb,
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const { wrapper, icon, Icon } = styles[type];
  return (
    <div className={`flex gap-3 p-4 my-5 rounded-xl border ${wrapper}`}>
      <Icon size={18} className={`${icon} shrink-0 mt-0.5`} />
      <div className="text-sm leading-relaxed">
        {title && <p className="font-semibold mb-1">{title}</p>}
        {children}
      </div>
    </div>
  );
}
