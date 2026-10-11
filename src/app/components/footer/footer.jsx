import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-base-200 border-t border-base-200 py-6 px-4 sm:px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-base-content/75 text-center sm:text-left">
        {/* Left Side Content */}
        <div>
          <span className="font-bold text-base-content">বাজার দর</span> — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </div>

        {/* Right Side Disclaimer */}
        <div className="text-base-content/60 italic">
          “সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।”
        </div>
      </div>
    </footer>
  );
}