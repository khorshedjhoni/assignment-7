"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession, authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending, refetch } = useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user?.name]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const updatedName = name.trim();

    if (!updatedName) {
      toast.error("আপনার নাম লিখুন।");
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: updatedName,
      });

      if (error) {
        toast.error(error.message || "নাম আপডেট করতে সমস্যা হয়েছে।");
        return;
      }

      if (refetch) {
        await refetch();
      }

      toast.success("প্রোফাইল সফলভাবে আপডেট করা হয়েছে!");

      router.push("/profile");
      router.refresh();
    } catch (error) {
      console.error("Profile update failed:", error);
      toast.error("একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#f8fafa] flex items-center justify-center">
        {" "}
        <div className="loading loading-spinner loading-lg text-[#0b8a4b]"></div>{" "}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f8fafa] flex items-center justify-center px-4">
        {" "}
        <div className="text-center">
          {" "}
          <p className="text-sm text-slate-600 mb-4">
            এই পৃষ্ঠাটি দেখতে আগে সাইন ইন করুন।{" "}
          </p>{" "}
          <Link
            href="/sign-in"
            className="inline-block bg-[#0b8a4b] hover:bg-[#09733e] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            সাইন ইন{" "}
          </Link>{" "}
        </div>{" "}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafa] flex flex-col">
      {" "}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        {" "}
        <div className="mb-6 space-y-1">
          {" "}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            আমার প্রোফাইল{" "}
          </h1>{" "}
          <p className="text-xs sm:text-sm text-slate-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে পরিবর্তন করুন।{" "}
          </p>{" "}
        </div>
        
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
            তথ্য
          </h3>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="form-control w-full">
              <label htmlFor="name" className="label pb-1.5 pt-0">
                <span className="label-text font-semibold text-slate-800 text-xs">
                  নাম
                </span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নাম লিখুন"
                autoComplete="name"
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0b8a4b] hover:bg-[#09733e] text-white font-medium py-3 rounded-xl mt-4 text-sm transition-colors shadow-sm cursor-pointer disabled:opacity-50"
            >
              {loading ? "আপডেট হচ্ছে..." : "Update Information"}
            </button>
          </form>

          <Link
            href="/profile"
            className="mt-4 inline-block text-sm font-medium text-[#0b8a4b] hover:underline"
          >
            ← আমার প্রোফাইলে ফিরে যান
          </Link>
        </div>
      </main>
    </div>
  );
}
