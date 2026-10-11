
import Link from "next/link";

const formatPrice = (price) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(Number(price) || 0);

const unitLabels = {
  kg: "প্রতি কেজি",
  kilogram: "প্রতি কেজি",
  liter: "প্রতি লিটার",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
  pcs: "প্রতি পিস",
};

const AllProductsCard = ({ product }) => {
  const unit =
    unitLabels[String(product.unit ?? "").toLowerCase()] ||
    `প্রতি ${product.unit ?? "পিস"}`;

  const direction = product.change?.dir;
  const change = Math.abs(Number(product.change?.pct) || 0);

  const badgeClass =
    direction === "up"
      ? "bg-red-50 text-red-600"
      : direction === "down"
        ? "bg-red-50 text-green-600"
        : "bg-gray-100 text-gray-500";

  const arrow =
    direction === "up" ? "▲" : direction === "down" ? "▼" : "—";

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
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${badgeClass}`}
        >
          {arrow} {formatPrice(change)}%
        </span>
      </div>
    </Link>
  );
};

export default AllProductsCard;