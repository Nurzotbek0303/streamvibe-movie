"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute mt-2 w-full z-10 sm:px-20 px-4 2xl:px-40">
      <div className="sm:flex hidden justify-between items-center">
        <Link href="/">
          <div className="flex gap-1 items-center select-none cursor-pointer">
            <Image
              src="/icon/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="sm:w-12 sm:h-12"
            />
            <h1 className="font-extrabold text-[#FFFFFF] text-[18px] sm:text-2xl">
              Stream Vibe
            </h1>
          </div>
        </Link>

        <div className="min-w-[510px] sm:flex hidden">
          <nav className="border-[3px] border-[#1F1F1F] rounded-[10px] py-1 px-3 bg-[#0F0F0F]">
            <ul className="flex justify-between items-center text-[16px] text-[#BFBFBF]">
              <Link href="/">
                <li
                  className={`transition-all ease-in-out ${
                    pathname === "/"
                      ? "bg-[#1A1A1A] rounded-lg text-[#FFFFFF] duration-100 px-4.5 py-2 opacity-100 scale-105"
                      : " text-[#BFBFBF] px-5 py-2.5 opacity-70 scale-100"
                  }`}
                >
                  Home
                </li>
              </Link>

              <Link href="/movies">
                <li
                  className={`transition-all duration-100 ease-in-out ${
                    pathname === "/movies"
                      ? "bg-[#1A1A1A] rounded-lg text-[#FFFFFF] px-4.5 py-2 opacity-100 scale-105"
                      : " text-[#BFBFBF] px-5 py-2.5 opacity-70 scale-100"
                  }`}
                >
                  Movies & Shows
                </li>
              </Link>

              <Link href="/support">
                <li
                  className={`transition-all duration-200 ease-in-out ${
                    pathname === "/support"
                      ? "bg-[#1A1A1A] rounded-lg text-[#FFFFFF] px-4.5 py-2 opacity-100 scale-105"
                      : " text-[#BFBFBF] px-5 py-2.5 opacity-70 scale-100"
                  }`}
                >
                  Support
                </li>
              </Link>

              <Link href="/subscriptions">
                <li
                  className={`transition-all duration-300 ease-in-out ${
                    pathname === "/subscriptions"
                      ? "bg-[#1A1A1A] rounded-lg text-[#FFFFFF] px-4.5 py-2 opacity-100 scale-105"
                      : " text-[#BFBFBF] px-5 py-2.5 opacity-70 scale-100"
                  }`}
                >
                  Subscriptions
                </li>
              </Link>
            </ul>
          </nav>
        </div>

        <div className="gap-3 items-center select-none sm:flex hidden">
          <Link href="/search">
            <Image src="/icon/search.svg" alt="Search" width={24} height={24} />
          </Link>

          <Link href={"/user"}>
            <Image src="/icon/sign_in.svg" alt="Icon" width={32} height={32} />
          </Link>
        </div>
      </div>

      <div className="flex sm:hidden items-center justify-between">
        <Link href="/">
          <div className="flex gap-1 items-center select-none cursor-pointer">
            <Image src="/icon/logo.svg" alt="Logo" width={40} height={40} />
            <h1 className="font-extrabold text-[#FFFFFF] text-[18px]">
              Stream Vibe
            </h1>
          </div>
        </Link>

        <div className="p-1.5 rounded-lg border-2 border-[#262626] bg-[#1A1A1A]">
          <Image src="/icon/menu.svg" alt="Menu" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
