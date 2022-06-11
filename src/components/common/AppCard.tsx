export default function AppCard({
  checked,
  children,
  className,
}: {
  checked: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} rounded-md border border-b-2 border-gray-500 bg-white p-8 shadow hover:border-sky-600 dark:bg-gray-800 dark:hover:border-sky-400 ${
        checked ? 'border-sky-600 dark:border-sky-400' : 'border-transparent'
      }`}
    >
      {children}
    </div>
  );
}
