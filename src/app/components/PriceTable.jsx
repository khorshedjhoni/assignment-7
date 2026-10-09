const PriceTable = ({ markets = [] }) => {
  
  if (markets.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-gray-500">
        কোনো বাজারের তথ্য পাওয়া যায়নি।
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      {" "}
      <table className="w-full text-left text-sm text-gray-600">
       {" "}
        <thead className="border-b bg-gray-50 text-xs text-gray-500">
          {" "}
          <tr>
            {" "}
            <th className="px-6 py-4">বাজার</th>{" "}
            <th className="px-6 py-4">বিভাগ</th>{" "}
            <th className="px-6 py-4 text-right">সর্বনিম্ন</th>{" "}
            <th className="px-6 py-4 text-right">সর্বোচ্চ</th>{" "}
            <th className="px-6 py-4 text-right">গড়</th>{" "}
          </tr>{" "}
        </thead>
        
        <tbody className="divide-y divide-gray-100">
          {markets.map((market) => {
            const averagePrice = Math.round((market.min + market.max) / 2);

            return (
              <tr
                key={market.market}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {market.market}
                </td>

                <td className="px-6 py-4">{market.division}</td>

                <td className="px-6 py-4 text-right">{market.min} টাকা</td>

                <td className="px-6 py-4 text-right">{market.max} টাকা</td>

                <td className="px-6 py-4 text-right font-bold text-emerald-600">
                  {averagePrice} টাকা
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PriceTable;
