import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] mt-20">
      <div className="sm:flex sm:justify-between grid grid-cols-2 gap-6 sm:gap-0 sm:mx-20 mx-4 2xl:mx-40 pt-14 pb-20">
        <div>
          <Link href={"/"}>
            <h1 className="pb-5 text-[#FFFFFF] text-[16px] font-semibold">
              Home
            </h1>
          </Link>
          <p className="text-[#999999] text-sm pb-2">Categories</p>
          <p className="text-[#999999] text-sm pb-2">Devices</p>
          <p className="text-[#999999] text-sm pb-2">Pricing</p>
          <p className="text-[#999999] text-sm pb-2">FAQ</p>
        </div>

        <div>
          <Link href={"/movies"}>
            <h1 className="pb-5 text-[#FFFFFF] text-[16px] font-semibold">
              Movies
            </h1>
          </Link>
          <p className="text-[#999999] text-sm pb-2">Gernes</p>
          <p className="text-[#999999] text-sm pb-2">Trending</p>
          <p className="text-[#999999] text-sm pb-2">New Release</p>
          <p className="text-[#999999] text-sm pb-2">Popular</p>
        </div>

        <div>
          <Link href={"/movies"}>
            <h1 className="pb-5 text-[#FFFFFF] text-[16px] font-semibold">
              Shows
            </h1>
          </Link>
          <p className="text-[#999999] text-sm pb-2">Gernes</p>
          <p className="text-[#999999] text-sm pb-2">Trending</p>
          <p className="text-[#999999] text-sm pb-2">New Release</p>
          <p className="text-[#999999] text-sm pb-2">Popular</p>
        </div>

        <div>
          <Link href={"/support"}>
            <h1 className="pb-5 text-[#FFFFFF] text-[16px] font-semibold">
              Support
            </h1>
          </Link>
          <p className="text-[#999999] text-sm pb-2">Contact Us</p>
        </div>

        <div>
          <Link href={"/subscriptions"}>
            <h1 className="pb-5 text-[#FFFFFF] text-[16px] font-semibold">
              Subscription
            </h1>
          </Link>
          <p className="text-[#999999] text-sm pb-2">Plans</p>
          <p className="text-[#999999] text-sm pb-2">Features</p>
        </div>

        <div>
          <h1 className="pb-5 text-[#FFFFFF] text-[16px] font-semibold">
            Connect With Us
          </h1>
          <div className="flex items-center gap-2">
            <div className="border border-[#262626] bg-[#1A1A1A] rounded-lg w-10 h-10 flex items-center justify-center">
              <img src="/icon/fesbook.png" alt="" className="" />
            </div>

            <div className="border border-[#262626] bg-[#1A1A1A] rounded-lg w-10 h-10 flex items-center justify-center">
              <img src="/icon/twitter.png" alt="" />
            </div>

            <div className="border border-[#262626] bg-[#1A1A1A] rounded-lg w-10 h-10 flex items-center justify-center">
              <img src="/icon/in.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
