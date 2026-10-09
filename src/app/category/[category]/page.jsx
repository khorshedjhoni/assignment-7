import React from 'react';

import CategoryCard from '../CategoryCard';
import Category from '../Category';

const CategoryPage = async ({params}) => {
    
     const { category } = await params;

    let products = [];

    try {
        const response = await fetch(
            `https://api.abcz.workers.dev/api/bazardor/products?category=${category}`,
            { next: { revalidate: 300 } }
        );

        if (!response.ok) {
            throw new Error('Failed to load products');
        }

        const data = await response.json();
        products = Array.isArray(data) ? data : data.data || [];
    } catch (error) {
        console.error(error);
    }
    return <Category products={products} category={category} />;
};

export default CategoryPage;