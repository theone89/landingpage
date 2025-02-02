import Sidebar from "./components/Sidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <Sidebar />
    </section>
  );
}
