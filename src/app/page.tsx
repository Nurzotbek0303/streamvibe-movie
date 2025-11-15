"use client";
import Marquee from "react-fast-marquee";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ask_question from "@/data/movie_question";
import plans from "@/data/plans";
import data from "@/data/data";
import plansYear from "@/data/plan_year";
import instance from "./service/api";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  year: number;
  thumbnail_path: string;
}

function Home() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [watch, setWatch] = useState<{ [key: number]: boolean }>(
    Object.fromEntries(ask_question.map((item) => [item.id, false]))
  );
  const [plan, setPlan] = useState<boolean>(true);
  const [active, setActive] = useState<number>(0);
  const count: number = 3;

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      const navigation = swiperInstance.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleClick(id: number): void {
    setWatch((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleNext(): void {
    setActive((prev) => (prev < count ? prev + 1 : prev));
  }

  function handlePrev(): void {
    setActive((prev) => (prev > 0 ? prev - 1 : prev));
  }

  const [movie, setMovie] = useState<Movie[] | null>(null);
  useEffect(() => {
    async function movieData() {
      try {
        const req = await instance.get(`film/films`);
        setMovie(req.data);
      } catch (err) {
        console.log(err);
      }
    }
    movieData();
  }, []);

  console.log(movie);

  return (
    <div>
      <section className="relative w-full sm:h-screen h-16/9 overflow-hidden select-none">
        <div className="flex flex-col gap-1.5 w-full filter blur-[1px] brightness-50">
          <div className="sm:h-[195px] h-[210px] 2xl:h-56 bg-black overflow-hidden flex items-center">
            <Marquee
              speed={30}
              gradient={false}
              pauseOnHover={false}
              direction="left"
            >
              {posters.map((item, id) => (
                <div key={id}>
                  <Image
                    src={item}
                    alt="movie poster"
                    width={154}
                    height={210}
                    className="w-[154px] sm:h-[210px] h-[250px] 2xl:h-[270px] object-cover rounded-xl mx-0.5"
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="sm:h-[195px] h-[210px] 2xl:h-56 bg-black overflow-hidden flex items-center">
            <Marquee
              speed={30}
              gradient={false}
              pauseOnHover={false}
              direction="right"
            >
              {posters.map((item, id) => (
                <div key={id}>
                  <Image
                    src={item}
                    alt="movie poster"
                    width={154}
                    height={210}
                    className="w-[154px] sm:h-[210px] h-[250px] 2xl:h-[270px] object-cover rounded-xl mx-0.5"
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="sm:h-[195px] h-[210px] 2xl:h-56 bg-black overflow-hidden flex items-center ">
            <Marquee
              speed={30}
              gradient={false}
              pauseOnHover={false}
              direction="left"
            >
              {posters.map((item, id) => (
                <div key={id}>
                  <Image
                    src={item}
                    alt="movie poster"
                    width={154}
                    height={210}
                    className="w-[154px] sm:h-[210px] h-[250px] 2xl:h-[270px] object-cover rounded-xl mx-0.5"
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="sm:h-[195px] h-[210px] 2xl:h-56 bg-black overflow-hidden 2xl:flex hidden items-center">
            <Marquee
              speed={30}
              gradient={false}
              pauseOnHover={false}
              direction="right"
            >
              {posters.map((item, id) => (
                <div key={id}>
                  <Image
                    src={item}
                    alt="movie poster"
                    width={154}
                    height={210}
                    className="w-[154px] sm:h-[210px] h-[250px] 2xl:h-[270px] object-cover rounded-xl mx-0.5"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center sm:justify-center flex-col mt-14">
          <Image
            src="/image/music.png"
            alt="music icon"
            width={240}
            height={240}
            className="w-40 h-40 sm:w-60 sm:h-60 sm:mt-0 mt-24 2xl:mt-30 2xl:h-70 2xl:w-70"
          />
          <h1 className="sm:mt-8 mt-24 2xl:mt-32 text-2xl sm:text-5xl 2xl:text-6xl text-[#FFFFFF] font-bold text-center sm:px-0 px-4 ">
            The Best Streaming Experience
          </h1>
          <p className="text-center px-4 sm:px-32 2xl:px-64 mt-3 text-[16px] 2xl:text-lg 2xl:mt-5 text-gray-300 sm:flex hidden">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <p className="text-center px-4 sm:px-32 mt-3 text-[16px] text-gray-300 sm:hidden flex">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl  text-[#FFFFFF] font-extrabold">
              Explore our wide variety of categories
            </h1>
            <p className="text-sm text-[#999999] 2xl:text-[16px] pt-2.5">
              Whether you are looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>

          <div className="sm:flex hidden p-3 items-center border-2 border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <button
              onClick={handlePrev}
              ref={prevRef}
              className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 mr-3"
            >
              <Image src="/icon/left.svg" alt="left" width={24} height={24} className="w-6 h-6" />
            </button>
            <div className="flex gap-[3px]">
              {[0, 1, 2, 3].map((index) => (
                <Image
                  width={16}
                  height={1}
                  key={index}
                  src={
                    active === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              ref={nextRef}
              className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
            >
              <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="sm:mt-14 mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={6}
            slidesPerView={6}
            breakpoints={{
              340: {
                slidesPerView: 2,
              },
              540: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 6,
              },
              1536: {
                slidesPerView: 8,
              },
            }}
            onInit={(swiper) => setSwiperInstance(swiper)}
          >
            {movie ? (
              movie.map((item: Movie) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="border border-[#1F1F1F] rounded-xl p-1 bg-[#1A1A1A]">
                      <Image
                        src={`http://127.0.0.1:8000/${item.thumbnail_path.replace(
                        /\\/g,
                        "/"
                      )}`}
                        alt={item.title}
                        width={200}
                        height={300}
                        className="rounded-lg sm:h-[340px] h-72"
                      />

                      <Link href={`/${item.id}`}>
                        <h1 className="text-[16px] mt-0.5 truncate">
                          {item.title}
                        </h1>
                      </Link>

                      <p className="text-sm mt-1">{item.year}</p>
                    </div>
                  </SwiperSlide>
                );
              })
            ) : (
              <div>
                <h1>Loading...</h1>
              </div>
            )}
          </Swiper>
        </div>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none">
        <div>
          <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-bold">
            We Provide you streaming experience across various devices.
          </h1>
          <p className="text-[#999999] text-[16px] sm:mr-28 mr-0 pt-2.5">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>

        <div className=" grid sm:grid-cols-3 grid-cols-1 gap-3 sm:mt-14 mt-10">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(245deg, rgba(229,0,0,0.15), rgba(0,0,0,0.8))`,
                  }}
                  className="border border-[#262626] rounded-[10px] sm:p-10 p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 border border-[#1F1F1F] bg-[#141414] rounded-[10px] flex justify-center items-center">
                      <Image src={item.icon} alt={item.title} width={24} height={24} />
                    </div>

                    <h1 className="text-[20px] text-[#FFFFFF] font-semibold">
                      {item.title}
                    </h1>
                  </div>
                  <p className="pt-6 text-[#999999] text-[16px]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4">
        <div className="flex items-center flex-wrap sm:flex-nowrap justify-between">
          <div>
            <h1 className="text-[#FFFFFF] sm:text-3xl text-2xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-[#999999] text-[16px] pt-2.5">
              Got questions? We&apos;re got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
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
                className={`${plan
                    ? "bg-[#1A1A1A] rounded-lg text-[#FFFFFF] duration-100 px-4.5 py-2 opacity-100 scale-105"
                    : " text-[#BFBFBF] px-5 py-2.5 opacity-70 scale-100 cursor-pointer"
                  } `}
              >
                Monthly
              </li>
              <li
                onClick={() => setPlan(!plan)}
                className={`${!plan
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

export default Home;

const posters = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71Tr4Fx-4ovgyP5w6XkBZbZBNv7hA_Zr0Yg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7V495vkCdtGGGCSJdjzoQTO1IMUB906-BbiEBG7-2KJfq9vjPtFtBFYf5osfoe2tn1Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xGEWm4SUrnuuhpD31_5Aivgts5zHKn7Kog&s",
  "https://lumiere-a.akamaihd.net/v1/images/image_80a77b1d.jpeg",
  "https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnoaLGhxbZkNa4can0ZUXGtQZd9pDsAHqhw&s",
  "https://assets.mubicdn.net/images/notebook/post_images/22621/images-w1400.jpg?1481167057",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71Tr4Fx-4ovgyP5w6XkBZbZBNv7hA_Zr0Yg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7V495vkCdtGGGCSJdjzoQTO1IMUB906-BbiEBG7-2KJfq9vjPtFtBFYf5osfoe2tn1Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xGEWm4SUrnuuhpD31_5Aivgts5zHKn7Kog&s",
  "https://lumiere-a.akamaihd.net/v1/images/image_80a77b1d.jpeg",
  "https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535",
  "https://assets.mubicdn.net/images/notebook/post_images/22621/images-w1400.jpg?1481167057",
];