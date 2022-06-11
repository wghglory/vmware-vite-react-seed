export default function PageContainer({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto py-10 px-6 ${className}`}>
      <h2 className="mb-8 text-3xl">{title}</h2>
      {children}
    </div>
  );
}
