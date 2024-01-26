export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full flex-1">{children}</section>;
}
