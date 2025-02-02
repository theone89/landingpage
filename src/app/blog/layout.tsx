import Sidebar from "./components/Sidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-24">
      {children}
      <Sidebar />
    </section>
  );
}
