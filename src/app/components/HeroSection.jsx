import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: 'full',
  });

  return (
    <section className="bg-[#f2f5f3] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        
       
        <div className="flex-1 space-y-5 text-left">
        
          <div>
            <span className="inline-block bg-[#e8f5e9] text-[#2e7d32] text-sm font-semibold px-4 py-1.5 rounded-full">
              {date}
            </span>
          </div>

        
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f2937] leading-tight">
            আজকের বাজারের দাম এক নজরে
          </h1>

         
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মশলার দাম — নিত্যপ্রয়োজনীয় জিনিসপত্রের, পণ্য ভিত্তিক, সর্বাধুনিক এবং সার্বিক মূল্যের পরিবর্তন এক জায়গায়।
          </p>

         
          <div className="pt-2">
            <Link
              href="#সব-পণ্য"
              className="inline-block bg-[#2e7d32] hover:bg-[#256628] text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm"
            >
              সব পণ্য দেখুন
            </Link>
          </div>
        </div>

     
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <Image
              src="/bazar-hero.png" 
              alt="বাজারের ফলের ঝুড়ি"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;