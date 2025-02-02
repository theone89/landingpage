import Link from "next/link";

interface BreadcrumbProps {
  category?: string;
  subCategory?: string;
  tag?: string;
}

export default function Breadcrumb({
  category,
  subCategory,
  tag,
}: BreadcrumbProps) {
  return (
    <nav className="text-sm mb-6 pl-8">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/blog" className="text-yellow-300 hover:text-gray-700">
            Blog
          </Link>
          {category && <span className="mx-2">/</span>}
        </li>
        {category && (
          <li className="flex items-center">
            <Link
              href={`/blog/category/${category}`}
              className="text-yellow-300 hover:text-gray-700"
            >
              {category}
            </Link>
            {subCategory && <span className="mx-2">/</span>}
          </li>
        )}
        {subCategory && (
          <li className="flex items-center">
            <span className="text-gray-700">{subCategory}</span>
          </li>
        )}
        {tag && (
          <li className="flex items-center">
            <span className="text-gray-700">#{tag}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}
