import CategoriesTab from "@/components/common/CategoriesTab";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-28">
      <CategoriesTab />
      {children}
    </section>
  );
}
