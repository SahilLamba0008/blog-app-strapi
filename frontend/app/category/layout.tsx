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
      <div className="h-[0.5px] w-full bg-gray-400 mt-14 mx-auto opacity-40" />
      <Pagination pageIndex={1} blogsPerPage={5} totalPages={5} />
    </section>
  );
}
