import CategoriesTab from "@/components/common/CategoriesTab";
import Pagination from "@/components/common/Pagination";

export default function CategoriesLayout({
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
