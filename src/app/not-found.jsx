import Link from "next/link";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] hero bg-base-200 px-4 py-12">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-error/10 text-error animate-bounce">
            <FaExclamationTriangle className="text-4xl" />
          </div>

          
          <h1 className="text-6xl font-black text-primary mb-2">4<span className="text-error">0</span>4</h1>
          <h2 className="text-2xl font-bold mb-3 text-base-content">
            পণ্য বা পাতাটি পাওয়া যায়নি!
          </h2>
          
          
          <p className="py-2 text-base-content/70 mb-6">
            আপনি যে ক্যাটাগরি বা পণ্যটি খুঁজছেন তা মুছে ফেলা হয়েছে অথবা লিংকটি সঠিক নয়। 
            অনুগ্রহ করে সঠিক ঠিকানায় প্রবেশ করুন।
          </p>

  
          <div className="flex justify-center">
            <Link href="/" className="btn btn-primary btn-md sm:btn-wide gap-2 shadow-md">
              <FaHome className="text-lg" />
              হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}