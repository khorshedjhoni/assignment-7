import React from 'react';
import AllProductsCard from './AllProductsCard';

const AllProduct =async () => {

    
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
    return (
         <section className="bg-[#f1f5f0] py-8">
            <div className="mx-auto max-w-6xl px-4">
                <div>
                    <h2 className="mb-4 text-xl font-bold text-gray-900">
                    সব পণ্য
                </h2>
                <h3 className="mb-4 text-xl font-bold text-gray-500">
                    মোট {products.length}টি পণ্য দেখানো হচ্ছে
                </h3>
                </div>

                {products.length === 0 ? (
                    <p className="text-sm text-gray-500">
                        এখন কোনো তথ্য পাওয়া যায়নি।
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <AllProductsCard
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

export default AllProduct;