import PriceTable from "../../components/PriceTable";
import PriceSummary from "../../components/PriceSummary";

async function getProductData(slug) {
  try {
    const response = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/products",
      { cache: "no-store" },
    );

    if (!response.ok) return null;
    const products = await response.json();
    return products.find((product) => product.slug === slug) || null;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = await getProductData(slug);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fafa] p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800">
            পণ্যটি পাওয়া যায়নি
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            অনুগ্রহ করে আবার চেষ্টা করুন।
          </p>
        </div>
      </main>
    );
  }

  const markets = product.markets || [];
  const todayPrice = Number(product.today) || 0;

  const minPrice = markets.length
    ? Math.min(...markets.map((m) => Number(m.min)))
    : todayPrice;

  const maxPrice = markets.length
    ? Math.max(...markets.map((m) => Number(m.max)))
    : todayPrice;

  const avgPrice = markets.length
    ? Math.round(
        markets.reduce(
          (total, m) => total + (Number(m.min) + Number(m.max)) / 2,
          0,
        ) / markets.length,
      )
    : todayPrice;

  const unitNames = {
    kg: "কেজি",
    liter: "লিটার",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
    pcs: "পিস",
  };

  const unitName =
    unitNames[String(product.unit).toLowerCase()] || product.unit || "একক";
  const priceChange = product.change || {};
  const changeAmount = Math.abs(Number(priceChange.pct) || 0);
  const percentage = Math.abs(Number(priceChange.pct) || 0);

  return (
    <main className="min-h-screen bg-[#f8fafa] px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-4xl">
                {product.image}
              </span>

              <div className="space-y-1">
                <h1 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
                  {product.nameBn}
                </h1>

                <p className="text-xs text-gray-500">
                  প্রতি {unitName}{" "}
                  {product.categoryNameBn ? `- ${product.categoryNameBn}` : ""}
                </p>

                <p className="text-xs text-gray-500 pt-1">
                  গতকালের তুলনায় আজ দাম{" "}
                  {priceChange.dir === "up" ? "বেড়েছে" : "কমেছে"} :{" "}
                  <span className="font-bold">{changeAmount}</span> টাকা
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4 text-center min-w-[130px]">
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="text-3xl font-black text-gray-900 my-1">
                {todayPrice}
              </p>
              <p className="text-xs text-gray-500">টাকা / {unitName}</p>

              <div className="mt-1 flex items-center justify-center gap-1 text-xs font-semibold text-rose-600">
                <span>▲</span>
                <span>{percentage}%</span>
              </div>
            </div>
          </div>
        </section>

       
        <section className="space-y-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              দামের সারসংক্ষেপ
            </h2>
          </div>

          <PriceSummary
            minPrice={minPrice}
            maxPrice={maxPrice}
            avgPrice={avgPrice}
          />
        </section>

       
        <section className="space-y-3">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                বাজারভিত্তিক আজকের দাম
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                বিভিন্ন বাজার ও বিভাগের দাম তুলনা করুন।
              </p>
            </div>
          </div>

          <PriceTable markets={markets} />
        </section>
      </div>
    </main>
  );
}
