
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryLinks({ categories }) {
  const pathname = usePathname();

  return (
    <ul className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((cat) => {
        const href = `/category/${cat.slug}`;
        const isActive = pathname === href;

        return (
          <li key={cat.id} className="shrink-0">
            <Link
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-emerald-100 text-[#0b8a4b]"
                  : "text-gray-800 hover:bg-emerald-50 hover:text-[#0b8a4b]"
              }`}
            >
              <span className="text-base leading-none">
                {cat.icon}
              </span>
              {cat.nameBn}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}