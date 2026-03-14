interface Prop {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Prop</th>
            <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Type</th>
            <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Default</th>
            <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {props.map((prop) => (
            <tr key={prop.name} className="bg-white dark:bg-slate-950">
              <td className="px-4 py-3 font-mono text-brand-700 dark:text-brand-400 whitespace-nowrap">
                {prop.name}
                {prop.required && (
                  <span className="ml-1 text-red-500" title="Required">*</span>
                )}
              </td>
              <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-400 text-xs whitespace-nowrap">
                {prop.type}
              </td>
              <td className="px-4 py-3 font-mono text-slate-500 dark:text-slate-500 text-xs">
                {prop.default ?? '—'}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
