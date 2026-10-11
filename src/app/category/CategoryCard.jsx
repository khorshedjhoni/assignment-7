
import Link from "next/link";
import React from "react";

const unitLabels = {
  kg: "প্রতি কেজি",
  kilogram: "প্রতি কেজি",
  g: "প্রতি গ্রাম",
  gram: "প্রতি গ্রাম",
  liter: "প্রতি লিটার",
  litre: "প্রতি লিটার",
  ml: "প্রতি মিলিলিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
  pcs: "প্রতি পিস",
  packet: "প্রতি প্যাকেট",
  bottle: "প্রতি বোতল",
  bag: "প্রতি বস্তা",
};

const formatPrice = (price) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(Number(price) || 0);

const CategoryCard = ({ product }) => {
  const unitKey = String(product.unit ?? "").toLowerCase().trim();

  const unit = unitLabels[unitKey] || `প্রতি ${product.unit ?? "পিস"}`;

  const isDecrease = product.change?.dir
    ? product.change.dir === "down"
    : Number(product.change?.pct) < 0;

  const change = Math.abs(Number(product.change?.pct) || 0);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
          {product.image || "🛒"}
        </span>

        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-gray-900">
            {product.nameBn}
          </h3>

          <p className="text-xs text-gray-500">{unit}</p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs text-gray-500">আজকের দাম</p>

          <p className="text-lg font-bold text-gray-900">
            {formatPrice(product.today)} টাকা
          </p>
        </div>

        <span
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
            isDecrease
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {isDecrease ? "▼" : "▲"} {formatPrice(change)}%
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;

