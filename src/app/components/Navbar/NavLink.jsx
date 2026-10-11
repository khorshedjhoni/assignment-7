import Link from 'next/link';
import CategoryLinks from './CategoryLinks';

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
    <CategoryLinks categories={categories} />
  </nav>
    );
};

export default NavLink;