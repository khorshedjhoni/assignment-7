import React from 'react';
import PricedecreasedCard from './PricedecreasedCard';

const PriceDecreased =async () => {

    let products = [];

try {
    const response = await fetch(
        'https://api.abcz.workers.dev/api/bazardor/products'
    );

    const data = await response.json();

    products = data.data || data;
} catch (error) {
    console.log('Failed to load products');
}

const decreasedProducts = products.filter((product) => product.change?.dir === 'down');

const sortedProducts = decreasedProducts.sort((a, b) => b.change.pct - a.change.pct);
const topSixProducts = sortedProducts.slice(0, 6);
    return (
        <section className="bg-[#f1f5f0] py-8">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                    <span className="text-green-600">▼</span> আজ দাম কমেছে
                </h2>

                {topSixProducts.length === 0 ? (
                    <p className="text-sm text-gray-500">
                        এখন কোনো তথ্য পাওয়া যায়নি।
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {topSixProducts.map((product) => (
                            <PricedecreasedCard
                                key={product.id || product._id}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PriceDecreased;