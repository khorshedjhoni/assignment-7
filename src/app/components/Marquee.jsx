import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const marqueeData = await response.json();

  const filteredData = marqueeData.filter((item) => item.change?.pct !== 0);

  const unitLabels = {
    kg: "কেজি",
    kilogram: "কেজি",
    g: "গ্রাম",
    gram: "গ্রাম",
    liter: "লিটার",
    litre: "লিটার",
    ml: "মিলিলিটার",
    dozen: "ডজন",
    piece: "পিস",
    pcs: "পিস",
    packet: "প্যাকেট",
    bottle: "বোতল",
    bag: "বস্তা",
  };

  return (
    <div>
      {" "}
      <div className="bg-gray-100 py-2 border-y border-gray-200">
        {" "}
        <MarqueeText duration={30} pauseOnHover={true} direction="right">
          {" "}
          <div className="flex gap-8 items-center">
            {filteredData.map((item) => (
              <span
                key={item.id}
                className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-gray-800"
              >
                {" "}
                <span>{item.image}</span> <span>{item.nameBn}:</span>{" "}
                <span className="font-bold">
                  ৳{Number(item.today).toLocaleString("bn-BD")}/
                  {unitLabels[String(item.unit).toLowerCase()] ||
                    item.unit}{" "}
                </span>
                <span
                  className={
                    item.change.dir === "up"
                      ? "text-red-500"
                      : item.change.dir === "down"
                        ? "text-green-500"
                        : "text-gray-500"
                  }
                >
                  {item.change.dir === "up"
                    ? "▲"
                    : item.change.dir === "down"
                      ? "▼"
                      : "⁃"}{" "}
                  {Math.abs(item.change.pct).toLocaleString("bn-BD")}%{" "}
                </span>{" "}
              </span>
            ))}{" "}
          </div>{" "}
        </MarqueeText>{" "}
      </div>{" "}
    </div>
  );
};

export default Marquee;
