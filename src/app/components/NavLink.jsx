import Link from 'next/link';

const NavLink = async () => {
    let categories = [];

    try {
        const response = await fetch(
            'https://api.abcz.workers.dev/api/bazardor/categories',
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
            <ul className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {categories.map((cat) => (
                    <li key={cat.id} className="shrink-0">
                        <Link
                            href={`/category/${cat.slug}`}
                            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-emerald-50 hover:text-[#0b8a4b]"
                        >
                            <span className="text-base leading-none">
                                {cat.icon}
                            </span>

                            {cat.nameBn}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLink;