import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-gray-100 p-4 rounded fixed top-20 right-0 w-1/4 ">
      <h2 className="text-xl font-semibold mb-4">Categorías</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/blog/category/react"
            className="text-blue-500 hover:underline"
          >
            React
          </Link>
        </li>
        <li>
          <Link
            href="/blog/category/nextjs"
            className="text-blue-500 hover:underline"
          >
            Next.js
          </Link>
        </li>
        <li>
          <Link
            href="/blog/category/css"
            className="text-blue-500 hover:underline"
          >
            CSS
          </Link>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">Archivos</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/archive/2023" className="text-blue-500 hover:underline">
            2023
          </Link>
        </li>
        <li>
          <Link href="/archive/2022" className="text-blue-500 hover:underline">
            2022
          </Link>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">Redes Sociales</h2>
      <div className="flex space-x-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
          </svg>
        </a>
      </div>
    </aside>
  );
}
