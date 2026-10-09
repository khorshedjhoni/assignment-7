import React from 'react';

const PriceSummary = ({ minPrice, maxPrice, avgPrice }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-xs font-medium text-gray-500">সর্বনিম্ন দাম</p>
        <p className="mt-2 text-2xl font-bold text-emerald-600">{minPrice} টাকা</p>
        <p className="mt-1 text-xs text-gray-400">সবচেয়ে কম পাওয়া যাচ্ছে</p>
      </div>

      
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-xs font-medium text-gray-500">সর্বোচ্চ দাম</p>
        <p className="mt-2 text-2xl font-bold text-rose-600">{maxPrice} টাকা</p>
        <p className="mt-1 text-xs text-gray-400">সবচেয়ে বেশি চাওয়া হচ্ছে</p>
      </div>

      
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="text-xs font-medium text-gray-500">গড় দাম</p>
        <p className="mt-2 text-2xl font-bold text-gray-900">{avgPrice} টাকা</p>
        <p className="mt-1 text-xs text-gray-400">সামগ্রিক বাজারের ভিত্তিতে</p>
      </div>
    </div>
  );
}

export default PriceSummary;