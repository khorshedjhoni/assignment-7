'use client';
import React from 'react';
import { useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = ({ products, category }) => {

     const [sortBy, setSortBy] = useState('default');

    const sortedProducts = [...products].sort((a, b) => {
        const priceA = Number(
            String(a.today).replace(/[০-৯]/g, (digit) =>
                '০১২৩৪৫৬৭৮৯'.indexOf(digit)
            )
        ) || 0;

        const priceB = Number(
            String(b.today).replace(/[০-৯]/g, (digit) =>
                '০১২৩৪৫৬৭৮৯'.indexOf(digit)
            )
        ) || 0;

        if (sortBy === 'price-low') return priceA - priceB;
        if (sortBy === 'price-high') return priceB - priceA;

        return 0;
    });
    return (
        <main className="min-h-screen bg-[#f8fafa] px-4 py-8">
            <div className="mx-auto max-w-6xl space-y-6">
                <h1 className="text-2xl font-bold">
                    {products[0]?.categoryNameBn || category}
                </h1>

                <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-gray-500">
                        মোট {sortedProducts.length}টি পণ্য
                    </p>

                    <div className="flex items-center gap-2">
                        <label htmlFor="sort">সাজান:</label>

                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-lg border bg-white p-2 text-sm"
                        >
                            <option value="default">ডিফল্ট</option>
                            <option value="price-low">
                                দাম: কম থেকে বেশি
                            </option>
                            <option value="price-high">
                                দাম: বেশি থেকে কম
                            </option>
                        </select>
                    </div>
                </div>

                {sortedProducts.length === 0 ? (
                    <p className="py-12 text-center text-gray-500">
                        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {sortedProducts.map((product) => (
                            <CategoryCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>

    );
};

export default Category;