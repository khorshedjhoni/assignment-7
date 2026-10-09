import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
    return (
      <main className="min-h-screen bg-[#f8fafa] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm">
          
          {/* Header */}
          <div className="text-center space-y-1.5 mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              অ্যাাকাউন্ট তৈরি করুন
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label pb-1.5 pt-0">
                <span className="label-text font-semibold text-slate-800 text-xs">নাম</span>
              </label>
              <input
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label pb-1.5 pt-0">
                <span className="label-text font-semibold text-slate-800 text-xs">ইমেইল</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full">
              <label className="label pb-1.5 pt-0">
                <span className="label-text font-semibold text-slate-800 text-xs">পাসওয়ার্ড</span>
              </label>
              <input
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="form-control w-full">
              <label className="label pb-1.5 pt-0">
                <span className="label-text font-semibold text-slate-800 text-xs">পাসওয়ার্ড নিশ্চিত করুন</span>
              </label>
              <input
                type="password"
                placeholder="আবার লিখুন"
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0b8a4b] hover:bg-[#09733e] text-white font-medium py-3 rounded-xl mt-3 text-sm transition-colors shadow-sm cursor-pointer"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>

          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <span className="relative bg-white px-3 text-xs text-slate-400 font-medium">
              অথবা
            </span>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors bg-white">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google দিয়ে চালিয়ে যান</span>
            </button>

            <button className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors bg-white">
              <svg className="w-4 h-4 shrink-0 fill-current text-slate-800" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub দিয়ে চালিয়ে যান</span>
            </button>
          </div>

          {/* Footer Navigation */}
          <div className="text-center mt-6 text-xs text-slate-500">
            অ্যাাকাউন্ট আছে?{' '}
            <Link href="/signin" className="text-emerald-700 font-semibold hover:underline">
              সাইন ইন করুন
            </Link>
          </div>

          <div className="text-center mt-3">
            <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
              ← হোম পেজে ফিরে যান
            </Link>
          </div>

        </div>
      </main>
    );
};

export default SignUpPage;