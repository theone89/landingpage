export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="relative py-24 ">{children}</section>;
}
