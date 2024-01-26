export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="h-full w-full">{children}</section>;
}
