"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client";
import { FiUser } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";

export default function NavbarAction() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const onSignOut = async () => {
    try {
      await signOut();
      <Link href="/" />;
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      {/* Brand / Logo Section */}
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

      {/* Right Side Actions */}
      <div className="flex items-center gap-5">
        {isPending ? null : user ? (
          /* Profile Dropdown Menu */
          <div className="dropdown dropdown-end">
            {/* Trigger Button / Avatar & Name */}
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 cursor-pointer py-1 px-2 rounded-xl hover:bg-gray-100 transition-colors"
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
                  {user.name?.charAt(0) || "U"}
                </span>
              )}

              <span className="hidden text-sm font-semibold text-gray-900 sm:block">
                {user.name}
              </span>

              {/* Dropdown Chevron Arrow */}
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu Content */}
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-3 shadow-lg bg-white rounded-2xl w-72 border border-gray-100 mt-2 space-y-1"
            >
              {/* User Info Header Box */}
              <div className="px-3 py-2 mb-1 border-b border-gray-100">
                <p className="font-bold text-sm text-gray-900">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user.email}
                </p>
              </div>

              {/* Profile Link */}
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 text-sm text-gray-700 font-medium px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <FiUser className="text-[#0b8a4b] text-base" />
                  <span>আমার প্রোফাইল</span>
                </Link>
              </li>

              {/* Sign Out Button */}
              <li>
                <button
                  type="button"
                  onClick={onSignOut}
                  className="w-full flex items-center gap-3 text-sm text-red-600 font-medium px-3 py-2 rounded-xl hover:bg-red-50 transition-colors cursor-pointer text-left"
                >
                  <TbLogout2 className="text-red-500 text-base" />
                  <span>সাইন আউট</span>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          /* Logged Out State */
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