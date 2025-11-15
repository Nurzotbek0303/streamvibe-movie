"use client";
import React, { useState } from "react";
import plans from "@/data/plans";
import plansYear from "@/data/plan_year";

function Subscription() {
  const [activeId, setActiveId] = useState<number | null>(2);
  const [plan, setPlan] = useState<boolean>(true);

  function handleClick(id: number): void {
    setActiveId(id);
  }
  return (
    <div>
      <section className="pt-30 2xl:pt-40 sm:mx-20 mx-4 2xl:mx-40 select-none">
        <div className="flex justify-between items-end sm:flex-nowrap flex-wrap">
          <div>
            <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-bold">
              Choose the plan that&apos;s right for you
            </h1>
            <p className="text-[#999999] text-[16px] sm:mr-80 mr-0 pt-2.5">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>

          <div>
            <ul className="border border-[#262626] rounded-lg bg-[#0F0F0F] flex items-center py-1 px-3 transition-all sm:mt-0 mt-4">
              <li
                onClick={() => setPlan(!plan)}
                className={`${
                  plan
                    ? "bg-[#1A1A1A] rounded-lg text-[#FFFFFF] duration-100 px-4.5 py-2 opacity-100 scale-105"
                    : " text-[#BFBFBF] px-5 py-2.5 opacity-70 scale-100 cursor-pointer"
                } `}
              >
                Monthly
              </li>
              <li
                onClick={() => setPlan(!plan)}
                className={`${
                  !plan
                    ? "bg-[#1A1A1A] rounded-lg text-[#FFFFFF] duration-100 px-4.5 py-2 opacity-100 scale-105"
                    : " text-[#BFBFBF] px-5 py-2.5 opacity-70 scale-100 cursor-pointer"
                } `}
              >
                Yearly
              </li>
            </ul>
          </div>
        </div>

        {plan ? (
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:mt-14 mt-10">
            {plans.map((item) => {
              return (
                <div key={item.id}>
                  <div className="border border-[#262626] bg-[#1A1A1A] rounded-[10px] sm:p-10 p-8">
                    <h1 className="text-[20px] text-[#FFFFFF] font-semibold">
                      {item.title}
                    </h1>
                    <p className="text-[16px] text-[#999999] pt-3">
                      {item.text}
                    </p>
                    <h2 className="text-[30px] text-[#FFFFFF] font-semibold pt-6">
                      ${item.price}
                      <span className="text-[#999999] text-[16px]">/month</span>
                    </h2>

                    <div className="flex items-center justify-between pt-5">
                      <div className="border border-[#262626] rounded-md bg-[#141414] sm:px-6 px-2 py-2">
                        <button className="text-sm text-[#FFFFFF] font-semibold">
                          Start Free Trial
                        </button>
                      </div>
                      <div className="rounded-md bg-[#E50000] sm:px-9 px-5 py-2">
                        <button className="text-sm text-[#FFFFFF] font-semibold">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:mt-14 mt-10">
            {plansYear.map((item) => {
              return (
                <div key={item.id}>
                  <div className="border border-[#262626] bg-[#1A1A1A] rounded-[10px] sm:p-10 p-8">
                    <h1 className="text-[20px] text-[#FFFFFF] font-semibold">
                      {item.title}
                    </h1>
                    <p className="text-[16px] text-[#999999] pt-3">
                      {item.text}
                    </p>
                    <h2 className="text-[30px] text-[#FFFFFF] font-semibold pt-6">
                      ${item.price}
                      <span className="text-[#999999] text-[16px]">/year</span>
                    </h2>

                    <div className="flex items-center justify-between pt-5">
                      <div className="border border-[#262626] rounded-md bg-[#141414] sm:px-6 px-2 py-2">
                        <button className="text-sm text-[#FFFFFF] font-semibold">
                          Start Free Trial
                        </button>
                      </div>
                      <div className="rounded-md bg-[#E50000] sm:px-9 px-5 py-2">
                        <button className="text-sm text-[#FFFFFF] font-semibold">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="sm:mx-20 mx-4 2xl:mx-40 sm:mt-20 mt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-extrabold">
              Compare our plans and find the right one for you
            </h1>
            <p className="text-sm text-[#999999] pt-2.5">
              StreamVibe offers three different plans to fit your needs: Basic,
              Standard, and Premium. Compare the features of each plan and
              choose the one that&apos;s right for you.
            </p>
          </div>
        </div>

        <div className="sm:flex hidden ">
          <table className="table-fixed w-full border border-[#262626] mt-10 ">
            <thead className="bg-[#0F0F0F] border border-[#262626]">
              <tr>
                <th className="border border-[#262626] text-start p-5">
                  Features
                </th>
                <th className="border border-[#262626]  text-start p-5">
                  Basic
                </th>
                <th className="border border-[#262626]  text-start p-5">
                  Standard
                </th>
                <th className="border border-[#262626]  text-start p-5">
                  Premium
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Price
                </th>
                <th className="border border-[#262626] text-start p-5  text-[#999999] text-sm font-normal">
                  $9.99/Month
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  $12.99/Month
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  $14.99/Month
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Content
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Access to a wide selection of movies and shows, including some
                  new releases.
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Devices
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Watch on one device simultaneously
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Watch on Two device simultaneously
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Watch on Four device simultaneously
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Free Trail
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  7 Days
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  7 Days
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  7 Days
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Cancel Anytime
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  HDR
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  No
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Dolby Atmos
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  No
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Ad - Free
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  No
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Offline Viewing
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  No
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes, for select titles.
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes, for all titles.
                </th>
              </tr>

              <tr>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Family Sharing
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  No
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes, up to 5 family members.
                </th>
                <th className="border border-[#262626] text-start p-5 text-[#999999] text-sm font-normal">
                  Yes, up to 6 family members.
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border border-[#262626] rounded-lg bg-[#0F0F0F] sm:hidden flex justify-around mt-10 py-1.5">
          {subscriptionPlans.map((item) => (
            <h1
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`${
                activeId === item.id
                  ? "bg-[#1A1A1A] text-[#FFFFFF] scale-105"
                  : "text-[#BFBFBF] opacity-70 cursor-pointer"
              } px-7 py-2 rounded-lg transition-all`}
            >
              {item.name}
            </h1>
          ))}
        </div>

        {
          <div className="mt-4 sm:hidden flex">
            {subscriptionPrice.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${activeId === item.id ? "" : "hidden"} `}
                >
                  <div className="border border-[#262626] rounded-xl bg-[#0F0F0F] p-6">
                    <div className="flex gap-5 items-center">
                      <div className="w-[143px]">
                        <h1 className="text-[16px] text-[#999999]">Price</h1>
                        <p className="text-[#F1F1F3] text-[16px]">
                          ${item.price}/Month
                        </p>
                      </div>
                      <div className="w-[143px]">
                        <h1 className="text-[16px] text-[#999999]">
                          Free Trail
                        </h1>
                        <p className="text-[#F1F1F3] text-[16px]">
                          {item.day} Days
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h1 className="text-[16px] text-[#999999]">Content</h1>
                      <p className="text-[#F1F1F3] text-[16px]">
                        {item.content}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h1 className="text-[16px] text-[#999999]">Devices</h1>
                      <p className="text-[#F1F1F3] text-[16px]">
                        {item.devices}
                      </p>
                    </div>

                    <div className="flex gap-5 items-center mt-6">
                      <div className="w-[145px]">
                        <h1 className="text-[16px] text-[#999999]">
                          Cancel Anytime
                        </h1>
                        <p className="text-[#F1F1F3] text-[16px]">
                          {item.cancelAnytime}
                        </p>
                      </div>
                      <div className="w-[145px]">
                        <h1 className="text-[16px] text-[#999999]">HDR</h1>
                        <p className="text-[#F1F1F3] text-[16px]">
                          {item.hdr} Days
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5 mt-6 items-center ">
                      <div className="w-[145px]">
                        <h1 className="text-[16px] text-[#999999]">
                          Dolby Atmos
                        </h1>
                        <p className="text-[#F1F1F3] text-[16px]">
                          {item.cancelAnytime}
                        </p>
                      </div>
                      <div className="w-[145px]">
                        <h1 className="text-[16px] text-[#999999]">
                          Ad - Free
                        </h1>
                        <p className="text-[#F1F1F3] text-[16px]">
                          {item.hdr} Days
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5 mt-6 items-center ">
                      <div className="w-[145px]">
                        <h1 className="text-[16px] text-[#999999]">
                          Offline Viewing
                        </h1>
                        <p className="text-[#F1F1F3] text-[16px]">
                          {item.offlineViewing}
                        </p>
                      </div>
                      <div className="w-[170px]">
                        <h1 className="text-[16px] text-[#999999]">
                          Family Sharing
                        </h1>
                        <p className="text-[#F1F1F3] text-[16px]">
                          {item.familySharing} Days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        }
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 mx-4 2xl:mx-40 select-none">
        <div
          style={{
            backgroundImage: `linear-gradient(245deg, rgba(229,0,0,0.15), rgba(0,0,0,0.8))`,
          }}
          className="border border-[#262626] rounded-xl py-16 px-14 flex justify-between flex-wrap sm:flex-nowrap items-center"
        >
          <div>
            <h1 className="text-[#FFFFFF] text-[28px] font-semibold sm:text-start text-center">
              Start your free trial today!
            </h1>
            <p className="text-[#999999] text-[16px] pt-2.5 sm:text-start text-center">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>

          <div className="rounded-md bg-[#E50000] py-2.5 px-3.5 sm:mx-0 mx-auto sm:mt-0 mt-5">
            <button className="text-[#FFFFFF] text-sm font-semibold">
              Start a Free Trail
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscription;

const subscriptionPlans = [
  {
    id: 1,
    name: "Basic",
  },
  {
    id: 2,
    name: "Standard",
  },
  {
    id: 3,
    name: "Premium",
  },
];

const subscriptionPrice = [
  {
    id: 1,
    price: 9.99,
    day: 7,
    content:
      "Access to a wide selection of movies and shows, including some new releases.",
    devices: "Watch on one device simultaneously",
    cancelAnytime: "Yes",
    hdr: "No",
    dolbyAtmos: "No",
    adFree: "No",
    offlineViewing: "No",
    familySharing: "No",
  },
  {
    id: 2,
    price: 12.99,
    day: 7,
    content:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    devices: "Watch on Two device simultaneously",
    cancelAnytime: "Yes",
    hdr: "Yea",
    dolbyAtmos: "Yes",
    adFree: "Yes",
    offlineViewing: "Yes, for select titles.",
    familySharing: "5 family members.",
  },
  {
    id: 3,
    price: 14.99,
    day: 7,
    content:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    devices: "Watch on Four device simultaneously",
    cancelAnytime: "Yes",
    hdr: "Yes",
    dolbyAtmos: "Yes",
    adFree: "Yes",
    offlineViewing: "Yes, for all titles.",
    familySharing: "6 family members.",
  },
];
