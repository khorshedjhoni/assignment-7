"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, authClient } from "@/lib/auth-client";
import NavbarAction from "@/app/components/Navbar/NavbarAction"; // Adjust path if necessary

export default function ProfilePage() {
  const { data: session, isPending, refetch } = useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  // Populate name input when session user data loads
  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user]);

  // Handle Profile Name Update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: name,
      });

      if (error) {
        setError(error.message || "নাম আপডেট করতে সমস্যা হয়েছে।");
        return;
      }

      setSuccessMessage("প্রোফাইল সফলভাবে আপডেট করা হয়েছে!");
      if (refetch) refetch(); // Refresh session data
    } catch (err) {
      setError("একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#f8fafa] flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-[#0b8a4b]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafa] flex flex-col">
      {/* Top Navbar Section */}
      <header className="bg-white border-b border-gray-100 shadow-xs">
        <NavbarAction />
      </header>

      {/* Main Body Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        {/* Page Title Header */}
        <div className="mb-6 space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            আমার প্রোফাইল
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে পরিবর্তন করুন।
          </p>
        </div>

        {/* User Card Info Banner */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
          {user?.image ? (
            <Image
              src={user.image}
              alt={user?.name || "Profile"}
              width={72}
              height={72}
              className="h-18 w-18 rounded-full object-cover border border-slate-200"
            />
          ) : (
            <span className="flex h-18 w-18 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-[#0b8a4b]">
              {user?.name?.charAt(0) || "U"}
            </span>
          )}

          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg font-bold text-slate-900">
              {user?.name || "User Name"}
            </h2>
            <p className="text-sm text-slate-500">{user?.email || "email@example.com"}</p>
          </div>

          <Link
            href="/sign-in"
            className="border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            সাইন আউট
          </Link>
        </div>

        {/* Form Container matching Figma Layout */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
            তথ্য
          </h3>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="form-control w-full">
              <label className="label pb-1.5 pt-0">
                <span className="label-text font-semibold text-slate-800 text-xs">
                  নাম
                </span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নাম লিখুন"
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                required
              />
            </div>

            {/* Email Field (Read-only for security) */}
            <div className="form-control w-full">
              <label className="label pb-1.5 pt-0">
                <span className="label-text font-semibold text-slate-800 text-xs">
                  ইমেইল (পরিবর্তনযোগ্য নয়)
                </span>
              </label>
              <input
                type="email"
                value={user?.email || ""}
                disabled
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-500 cursor-not-allowed"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}

            {successMessage && (
              <p className="text-sm text-emerald-600 font-medium" role="alert">
                {successMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0b8a4b] hover:bg-[#09733e] text-white font-medium py-3 rounded-xl mt-4 text-sm transition-colors shadow-sm cursor-pointer"
            >
              {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}