"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession, authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const [signingOut, setSigningOut] = useState(false);

  const onSignOut = async () => {
    if (signingOut) return;

    setSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "সাইন আউট করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে!");

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
      toast.error("সাইন আউট করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setSigningOut(false);
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
            <p className="text-sm text-slate-500">
              {user?.email || "email@example.com"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/profile/update"
              className="bg-[#0b8a4b] hover:bg-[#09733e] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              Update
            </Link>

            <button
              type="button"
              onClick={onSignOut}
              disabled={signingOut}
              className="border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold px-4 py-2 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {signingOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
            তথ্য
          </h3>

          <div className="space-y-4">
            <div className="form-control w-full">
              <label className="label pb-1.5 pt-0">
                <span className="label-text font-semibold text-slate-800 text-xs">
                  নাম
                </span>
              </label>

              <p className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800">
                {user?.name || "User Name"}
              </p>
            </div>

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
          </div>
        </div>
      </main>
    </div>
  );
}
