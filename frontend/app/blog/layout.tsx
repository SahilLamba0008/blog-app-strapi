export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full px-28">{children}</section>;
}
