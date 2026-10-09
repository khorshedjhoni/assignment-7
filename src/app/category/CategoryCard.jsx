import Link from 'next/link';
import React from 'react';

const CategoryCard = ({product}) => {
    return (
        <Link
        href={`/product/${product.slug}`}
        className="group block rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
      >
        {" "}
        <div className="flex items-center gap-3">
          {" "}
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
            {" "}
            {product.image}{" "}
          </span>{" "}
          <div className="min-w-0">
            {" "}
            <h3 className="truncate text-base font-bold text-gray-900">
              {" "}
              {product.nameBn}{" "}
            </h3>{" "}
            <p className="text-xs text-gray-500"> Per {product.unit} </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-4 flex items-end justify-between gap-2">
          {" "}
          <div>
            {" "}
            <p className="text-xs text-gray-500">আজকের দাম</p>{" "}
            <p className="text-lg font-bold text-gray-900">
              {" "}
              {product.today} BDT{" "}
            </p>{" "}
          </div>{" "}
          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-red-600">
            {" "}
            ▲ {product.change?.pct}%{" "}
          </span>{" "}
        </div>{" "}
      </Link>
    );
};

export default CategoryCard;