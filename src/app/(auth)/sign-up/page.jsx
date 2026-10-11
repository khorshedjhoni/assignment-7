"use client";

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Check passwords match
    if (password !== confirmPassword) {
      setError("পাসওয়ার্ড মিলছে না।");
      return;
    }

    setLoading(true);

    try {
      const { error } = await signUp.email({
        name,
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      // Redirect or handle successful sign up if needed
    } catch {
      setError("সাইন আপ ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // Google sign in
  const handleSignUpWithGoogle = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch {
      setError("Google দিয়ে সাইন ইন করা যায়নি।");
    }
  };

  // GitHub sign in
  const handleSignUpWithGitHub = async () => {
    try {
      await signIn.social({
        provider: "github",
        callbackURL: "/",
      });
    } catch {
      setError("GitHub দিয়ে সাইন ইন করা যায়নি।");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafa] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm">

        {/* Header */}
        <div className="text-center space-y-1.5 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">

          <div className="form-control w-full">
            <label className="label pb-1.5 pt-0">
              <span className="label-text font-semibold text-slate-800 text-xs">
                নাম
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="যেমন: রহিম উদ্দিন"
              className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label pb-1.5 pt-0">
              <span className="label-text font-semibold text-slate-800 text-xs">
                ইমেইল
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label pb-1.5 pt-0">
              <span className="label-text font-semibold text-slate-800 text-xs">
                পাসওয়ার্ড
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              minLength={8}
              className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label pb-1.5 pt-0">
              <span className="label-text font-semibold text-slate-800 text-xs">
                পাসওয়ার্ড নিশ্চিত করুন
              </span>
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="আবার লিখুন"
              className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0b8a4b] hover:bg-[#09733e] text-white font-medium py-3 rounded-xl mt-3 text-sm transition-colors shadow-sm cursor-pointer"
          >
            {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
          </button>
        </form>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <span className="relative bg-white px-3 text-xs text-slate-400 font-medium">
            অথবা
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Google Button */}
          <button
            type="button"
            onClick={handleSignUpWithGoogle}
            className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors bg-white cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.15C3.17 21.36 7.23 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.24c-.24-.72-.37-1.49-.37-2.24s.13-1.52.37-2.24V6.6H1.18C.43 8.13 0 9.87 0 12s.43 3.87 1.18 5.4l4.09-3.16z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.17 2.64 1.18 6.6l4.09 3.16c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          {/* GitHub Button */}
          <button
            type="button"
            onClick={handleSignUpWithGitHub}
            className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors bg-white cursor-pointer"
          >
            <svg
              className="w-4 h-4 shrink-0 fill-current text-slate-800"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* Footer Navigation */}
        <div className="text-center mt-6 text-xs text-slate-500">
          অ্যাাকাউন্ট আছে?{" "}
          <Link
            href="/signin"
            className="text-emerald-700 font-semibold hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </div>

        <div className="text-center mt-3">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>
    </main>
  );
};

export default SignUpPage;