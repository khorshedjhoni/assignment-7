
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client";

export default function NavbarActions() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const onSignOut = async () => {
    try {
      await signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b8a4b]">
          <Image
            src="/logo-icon.png"
            alt="Logo"
            width={40}
            height={40}
          />
        </span>

        <span className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-gray-900">
            বাজার দর
          </span>

          <span className="min-h-[1rem] text-xs text-gray-600">
            {date}
          </span>
        </span>
      </Link>

      <div className="flex items-center gap-5">
        {isPending ? null : user ? (
          <>
            <Link
              href="/profile"
              className="flex items-center gap-2"
            >
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "Profile"}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover"
                />
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-[#0b8a4b]">
                  {user.name?.charAt(0)}
                </span>
              )}

              <span className="hidden text-sm font-semibold text-gray-900 sm:block">
                {user.name}
              </span>
            </Link>

            <button
              type="button"
              onClick={onSignOut}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              সাইন আউট
            </button>
          </>
        ) : (
          <>
            <Link
              href="/sign-in"
              className="text-sm font-semibold text-gray-900 transition hover:text-[#0b8a4b]"
            >
              সাইন ইন
            </Link>

            <Link
              href="/sign-up"
              className="rounded-lg bg-[#0b8a4b] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-[#097a42]"
            >
              সাইন আপ
            </Link>
          </>
        )}
      </div>
    </div>
  );
}