import React from 'react';

export default function PriceTable({ markets = [] }) {
  if (!markets.length) {
    return (
      <div className="py-8 text-center text-sm text-gray-500">
        কোনো বাজারের তথ্য পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full text-left text-sm text-gray-600">
        <thead className="border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500">
          <tr>
            <th scope="col" className="px-6 py-3.5">বাজার</th>
            <th scope="col" className="px-6 py-3.5">বিভাগ</th>
            <th scope="col" className="px-6 py-3.5 text-right">সর্বনিম্ন</th>
            <th scope="col" className="px-6 py-3.5 text-right">সর্বোচ্চ</th>
            <th scope="col" className="px-6 py-3.5 text-right">গড়</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 font-medium">
          {markets.map((m, index) => {
            const avgPrice = Math.round((m.min + m.max) / 2);

            return (
              <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-900">{m.market}</td>
                <td className="px-6 py-4 text-gray-500">{m.division}</td>
                <td className="px-6 py-4 text-right text-gray-900">{m.min} টাকা</td>
                <td className="px-6 py-4 text-right text-gray-900">{m.max} টাকা</td>
                <td className="px-6 py-4 text-right font-bold text-emerald-600">
                  {avgPrice} টাকা
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}