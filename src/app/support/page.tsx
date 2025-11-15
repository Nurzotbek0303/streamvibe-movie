"use client";
import React, { useState } from "react";
import Image from "next/image";
import ask_question from "@/data/movie_question";

function Support() {
  const [watch, setWatch] = useState<{ [key: number]: boolean }>(
    Object.fromEntries(ask_question.map((item) => [item.id, false]))
  );
  function handleClick(id: number): void {
    setWatch((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }
  return (
    <div>
      <section className="flex sm:flex-nowrap flex-wrap pt-34 2xl:pt-40 sm:mx-20 2xl:mx-40 mx-4 gap-10">
        <div className="">
          <h1 className="text-[#FFFFFF] sm:text-4xl text-2xl font-bold w-full">
            Welcome to our support page!
          </h1>
          <p className="text-[#999999] text-[16px] pt-3.5 sm:w-[480px] w-full ">
            We&apos;re here to help you with any problems you may be having with our
            product.
          </p>
          <Image
            src="/image/image_2.png"
            alt="support illustration"
            className="pt-8 sm:w-[540px] sm:h-[410px] w-[410px] h-[360px]"
            width={540}
            height={410}
          />
        </div>

        <div className="border border-[#262626] bg-[#0F0F0F] rounded-xl p-10 w-full">
          <div className="flex sm:flex-nowrap flex-wrap items-center gap-10 justify-between">
            <div className="w-full">
              <h1 className="text-[#FFFFFF] text-sm">First Name</h1>
              <input
                placeholder="Enter First Name"
                type="text"
                className="bg-[#141414] border border-[#262626] rounded-lg px-5 py-2 mt-2 placeholder:text-sm w-full"
              />
            </div>

            <div className="w-full">
              <h1 className="text-[#FFFFFF] text-sm">Last Name</h1>
              <input
                placeholder="Enter Last Name"
                type="text"
                className="bg-[#141414] border border-[#262626] rounded-lg px-5 py-2 mt-2 placeholder:text-sm w-full"
              />
            </div>
          </div>

          <div className="flex sm:flex-nowrap flex-wrap items-center gap-10 justify-between sm:pt-12 pt-10">
            <div className="w-full">
              <h1 className="text-[#FFFFFF] text-sm">Email</h1>
              <input
                placeholder="Enter Your Email"
                type="email"
                className="bg-[#141414] border border-[#262626] rounded-lg px-5 py-2 mt-2 placeholder:text-sm w-full"
              />
            </div>

            <div className="w-full">
              <h1 className="text-[#FFFFFF] text-sm">Phone Number</h1>
              <input
                placeholder="Enter Phone Number"
                type="tel"
                className="bg-[#141414] border border-[#262626] rounded-lg px-5 py-2 mt-2 placeholder:text-sm w-full"
              />
            </div>
          </div>

          <div className="sm:mt-4 mt-10">
            <span className="text-[#FFFFFF] text-sm">Message</span>
            <textarea
              placeholder="Enter your Message"
              className="pb-28 text-white border border-[#262626] rounded-md placeholder:text-sm p-4 mt-2 w-full h-[150px] resize-none bg-[#141414]"
            ></textarea>
          </div>

          <div className="flex justify-between items-center mt-8 flex-wrap">
            <div>
              <input type="checkbox" />
              <span className="text-[#999999] pl-1 text-[16px]">
                I agree with Terms of Use and Privacy Policy
              </span>
            </div>

            <button className="bg-[#E50000] rounded-md text-white py-2 px-2.5 cursor-pointer text-sm sm:mt-0 mt-4">
              Send Message
            </button>
          </div>
        </div>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4">
        <div className="flex sm:flex-nowrap flex-wrap items-center justify-between">
          <div>
            <h1 className="text-[#FFFFFF] sm:text-3xl text-2xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-[#999999] text-[16px] pt-2.5">
              Got questions? We&apos;ve got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <div className="rounded-md bg-[#E50000] py-2.5 px-3.5 sm:mt-0 mt-5">
            <button className="text-[#FFFFFF] text-sm font-semibold">
              Ask a Question
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-14">
          {ask_question.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex justify-between items-start gap-4 h-full">
                  <div className="flex gap-4">
                    <div className="w-[50] h-[50px] flex justify-center items-center border border-[#262626] rounded-lg bg-[#1F1F1F] p-3">
                      <h1 className="text-[#FFFFFF] text-[16px] font-semibold">
                        0{item.id}
                      </h1>
                    </div>

                    <div>
                      <h1 className="text-[20px] text-[#FFFFFF] font-medium">
                        {item.question}
                      </h1>
                      {watch[item.id] && (
                        <div>
                          <p className="text-[#999999] text-[16px] mt-2">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start self-stretch">
                    <button
                      onClick={() => handleClick(item.id)}
                      className="text-white text-[22px] font-bold cursor-pointer"
                    >
                      {watch[item.id] ? "-" : "+"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none">
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

export default Support;