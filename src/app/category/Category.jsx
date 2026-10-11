'use client';
import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = ({ products = [], category }) => {
  const categoryName = category.nameBn || category.name;
  const categoryIcon = category.icon;
    const [sortBy, setSortBy] = useState('default');

    const sortedProducts = [...products].sort((a, b) => {
        const priceA = Number(
            String(a?.today || '').replace(/[০-৯]/g, (digit) =>
                '০১২৩৪৫৬৭৮৯'.indexOf(digit)
            )
        ) || 0;

        const priceB = Number(
            String(b?.today || '').replace(/[০-৯]/g, (digit) =>
                '০১২৩৪৫৬৭৮৯'.indexOf(digit)
            )
        ) || 0;

        if (sortBy === 'price-low') return priceA - priceB;
        if (sortBy === 'price-high') return priceB - priceA;

        return 0;
    });

    return (
       <main className="min-h-screen bg-[#f0f5f1] px-4 py-4">
         <div className="mx-auto max-w-6xl space-y-6">

           {/* Title & Icon Header */}
           <div className="flex items-center gap-3 rounded-2xl border border-[#dfe8e0] bg-[#fafcfb] px-5 py-4">
             <span className="flex items-center justify-center text-4xl">
               {categoryIcon}
             </span>

             <div>
               <h1 className="text-2xl font-extrabold tracking-tight text-[#26352b]">
                 {categoryName}
               </h1>

               <p className="text-sm text-[#737b75]">
                 {sortedProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
               </p>
             </div>
           </div>

           {/* Sorting Bar */}
           <div className="flex items-center justify-end gap-2 rounded-2xl border border-[#dfe8e0] bg-[#fafcfb] px-5 py-4">
             <label htmlFor="sort" className="text-sm text-[#737b75]">
               সাজান
             </label>

             <select
               id="sort"
               value={sortBy}
               onChange={(e) => setSortBy(e.target.value)}
               className="cursor-pointer rounded-lg border border-[#d1d9d2] bg-white px-3 py-2 text-xs text-[#26352b] outline-none focus:border-emerald-600"
             >
               <option value="default">ডিফল্ট</option>
               <option value="price-low">দাম: কম থেকে বেশি</option>
               <option value="price-high">দাম: বেশি থেকে কম</option>
             </select>
           </div>

           {/* Product Grid / Empty State (Now correctly nested inside max-w-6xl) */}
           {sortedProducts.length === 0 ? (
               <p className="py-12 text-center text-gray-500 font-medium">
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