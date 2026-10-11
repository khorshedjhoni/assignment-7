import Link from 'next/link';
import CategoryLinks from './CategoryLinks';
import { Suspense } from 'react';

const NavLink = async () => {
    let categories = [];

    try {
        const response = await fetch(
            'https://openapi.programming-hero.com/api/bazardor/categories',
            {
                next: { revalidate: 3600 },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to load categories');
        }

        categories = await response.json();
    } catch (error) {
        console.error('Failed to load categories:', error);
    }

    return (
        <nav
    aria-label="Categories"
    className="border-t border-gray-100 bg-gray-50/60"
  >
    <Suspense fallback={
<div className="mx-auto max-w-6xl px-4 py-2">
<div className="h-10 animate-pulse rounded-full bg-gray-100" />
</div>
}><CategoryLinks categories={categories} /></Suspense>
  </nav>
    );
};

export default NavLink;