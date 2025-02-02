"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm mb-6 pl-8">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-yellow-300 hover:text-grape-900">
            Home
          </Link>
          {pathSegments.length > 0 && (
            <span className="mx-2 text-grape-900">/</span>
          )}
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          const isTag = pathSegments[0] === "blog" && index === 1;

          return (
            <li key={href} className="flex items-center">
              {index === 0 ? null : (
                <span className="mx-2 text-grape-900">
                  {!isTag ? "/" : "/"}
                </span>
              )}

              {isLast ? (
                <span className="text-yellow-300">
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-yellow-300 hover:text-grape-900"
                >
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
