"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import instance from "../service/api";
import Image from "next/image";


interface Movie {
  id: number;
  title: string;
  thumbnail_path: string;
  year: number;
  view: number;
  duration?: number;
  rating?: number;
}

function MoviesShow() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef1 = useRef<HTMLButtonElement | null>(null);
  const nextRef1 = useRef<HTMLButtonElement | null>(null);
  const prevRef2 = useRef<HTMLButtonElement | null>(null);
  const nextRef2 = useRef<HTMLButtonElement | null>(null);
  const prevRef3 = useRef<HTMLButtonElement | null>(null);
  const nextRef3 = useRef<HTMLButtonElement | null>(null);
  const prevRef4 = useRef<HTMLButtonElement | null>(null);
  const nextRef4 = useRef<HTMLButtonElement | null>(null);
  const prevRef5 = useRef<HTMLButtonElement | null>(null);
  const nextRef5 = useRef<HTMLButtonElement | null>(null);
  const prevRef6 = useRef<HTMLButtonElement | null>(null);
  const nextRef6 = useRef<HTMLButtonElement | null>(null);
  const prevRef7 = useRef<HTMLButtonElement | null>(null);
  const nextRef7 = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [swiperMain, setSwiperMain] = useState<SwiperType | null>(null);
  const [releases, setReleases] = useState<SwiperType | null>(null);
  const [watchMovies, setWatchMovies] = useState<SwiperType | null>(null);
  const [trandShow, setTrandShow] = useState<SwiperType | null>(null);
  const [releasesShow, setReleasesShow] = useState<SwiperType | null>(null);
  const [mustWatchShow, setMustWatchShow] = useState<SwiperType | null>(null);
  const [movies, setMovies] = useState<SwiperType | null>(null);
  const [activeBlocks, setActiveBlocks] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const indicatorsCount = 4;

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

  useEffect(() => {
    if (swiperMain && prevRef1.current && nextRef1.current) {
      const navigation = swiperMain.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef1.current;
      navigation.nextEl = nextRef1.current;

      swiperMain.navigation.init();
      swiperMain.navigation.update();
    }
  }, [swiperMain]);

  useEffect(() => {
    if (releases && prevRef2.current && nextRef2.current) {
      const navigation = releases.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef2.current;
      navigation.nextEl = nextRef2.current;

      releases.navigation.init();
      releases.navigation.update();
    }
  }, [releases]);

  useEffect(() => {
    if (watchMovies && prevRef3.current && nextRef3.current) {
      const navigation = watchMovies.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef3.current;
      navigation.nextEl = nextRef3.current;

      watchMovies.navigation.init();
      watchMovies.navigation.update();
    }
  }, [watchMovies]);

  useEffect(() => {
    if (trandShow && prevRef4.current && nextRef4.current) {
      const navigation = trandShow.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef4.current;
      navigation.nextEl = nextRef4.current;

      trandShow.navigation.init();
      trandShow.navigation.update();
    }
  }, [trandShow]);

  useEffect(() => {
    if (releasesShow && prevRef5.current && nextRef5.current) {
      const navigation = releasesShow.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef5.current;
      navigation.nextEl = nextRef5.current;

      releasesShow.navigation.init();
      releasesShow.navigation.update();
    }
  }, [releasesShow]);

  useEffect(() => {
    if (mustWatchShow && prevRef6.current && nextRef6.current) {
      const navigation = mustWatchShow.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef6.current;
      navigation.nextEl = nextRef6.current;

      mustWatchShow.navigation.init();
      mustWatchShow.navigation.update();
    }
  }, [mustWatchShow]);

  useEffect(() => {
    if (movies && prevRef7.current && nextRef7.current) {
      const navigation = movies.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef7.current;
      navigation.nextEl = nextRef7.current;

      movies.navigation.init();
      movies.navigation.update();
    }
  }, [movies]);

  function Time(time: number, hours: string, minuts: string): string {
    const hour: number = (time - (time % 60)) / 60;
    const min: number = time % 60;
    return `${hour}${hours} ${min}${minuts}`;
  }

  function View(view: number): string {
    if (1000000 > view) {
      if (view < 1000) {
        return `${view}`;
      } else {
        const views: number = view / 1000;
        return `${views.toFixed(1)}K`;
      }
    } else {
      const views: number = view / 1000;
      return `${views.toFixed(1)}M`;
    }
  }

  function generateStars(rating: number) {
    const stars = [];
    const fullStars: number = Math.floor(rating);
    const hasHalfStar: boolean = rating % 1 >= 0.5;
    const emptyStars: number = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image
          key={`full-${i}`}
          src="/icon/star_red.svg"
          alt="full"
          width={12}
          height={12}
          className="w-3 h-3"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Image
          key="half"
          src="/icon/star_gray_red.svg"
          alt="half"
          width={12}
          height={12}
          className="w-3 h-3"
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Image
          key={`empty-${i}`}
          src="/icon/star_gray.svg"
          alt="empty"
          width={12}
          height={12}
          className="w-3 h-3"
        />
      );
    }

    return stars;
  }

  function handleNext(blockIndex: number): void {
    setActiveBlocks((prev) =>
      prev.map((val, i) =>
        i === blockIndex ? Math.min(val + 1, indicatorsCount - 1) : val
      )
    );
  }

  function handlePrev(blockIndex: number): void {
    setActiveBlocks((prev) =>
      prev.map((val, i) => (i === blockIndex ? Math.max(val - 1, 0) : val))
    );
  }

  const [releaseMovie, setReleasesMovie] = useState<Movie[]>();
  const [mustWatchMovie, setMustWatchMovie] = useState<Movie[]>();
  useEffect(() => {
    async function releaseMovie() {
      const req = await instance.get(`film/get_last`);
      const reqView = await instance.get(`film/most-viewed`);
      setReleasesMovie(req.data);
      setMustWatchMovie(reqView.data);
    }
    releaseMovie();
  }, []);

  return (
    <div>
      <section className="relative sm:h-screen h-16/9 w-full overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1}
          onInit={(swiper) => setSwiperInstance(swiper)}
        >
          {movies_data.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="relative h-screen w-full overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className="w-full sm:h-full h-158 object-cover blur-[1px]"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute sm:top-50 top-60 2xl:top-96 sm:right-20 right-0 2xl:right-40 sm:mr-0 mr-4 z-10 2xl:max-w-[420px] max-w-[342px] text-white">
                  <h1 className="sm:text-3xl text-2xl font-bold mb-4">
                    {item.title}
                  </h1>
                  <p className="text-[16px] text-[#999999]">{item.text}</p>
                  <div className="flex items-center gap-10 mt-4">
                    <div className="flex items-center gap-1">
                      <Image src="/icon/imdb.svg" alt="IMDB" width={25} height={15} />
                      <h1 className="text-2xl text-[#EEBB07] font-semibold">
                        {item.rating}
                        <span className="text-lg text-[#FFFFFF] font-medium">
                          /10
                        </span>
                      </h1>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src="/icon/time.svg" alt="Time" width={20} height={20} />
                      <h2 className="text-[#FFFFFF] text-lg font-semibold">
                        {Time(item.duration, " Hours", " Minute")}
                      </h2>
                    </div>
                  </div>

                  <Link href={`/${item.id}`}>
                    <div className="rounded-md bg-[#E50000] py-3 mt-4 flex justify-center">
                      <button className="text-[#FFFFFF] text-sm font-semibold">
                        Play Now
                      </button>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="absolute bottom-4 2xl:bottom-12 left-1/2 -translate-x-1/2 z-20 sm:flex hidden p-3 items-center ">
          <button
            onClick={() => handlePrev(0)}
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
                    activeBlocks[0] === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
            ))}
          </div>
          <button
            onClick={() => handleNext(0)}
            ref={nextRef}
            className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
          >
            <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
          </button>
        </div>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 mx-4 2xl:mx-40 select-none">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-extrabold">
              Trending Now
            </h1>
          </div>

          <div className="sm:flex hidden p-3 items-center border-2 border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <button
              onClick={() => handlePrev(1)}
              ref={prevRef1}
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
                    activeBlocks[1] === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
              ))}
            </div>
            <button
              onClick={() => handleNext(1)}
              ref={nextRef1}
              className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
            >
              <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Swiper
          className="sm:mt-12 mt-6"
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
          onInit={(swiper) => setSwiperMain(swiper)}
        >
          {trand_movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="border border-[#1F1F1F] rounded-xl p-1 bg-[#1A1A1A]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={400}
                    className=" rounded-lg sm:h-[310px] h-64"
                  />
                  <Link href={`/${item.id}`}>
                    <h1 className="text-[16px] mt-0.5 truncate">{item.name}</h1>
                  </Link>
                  <div className="flex items-center justify-between pt-1.5">
                    <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl py-0.5 px-1 ">
                      <Image
                        src="/icon/Subtract.svg"
                        alt="duration"
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                      <h1 className="text-[#999999] text-[12px]">
                        {Time(item.duration, "h", "m")}
                      </h1>
                    </div>
                    <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-1 py-0.5  ">
                      <Image src="/icon/Union.svg" alt="views" width={12} height={12} className="w-3 h-3" />
                      <h1 className="text-[#999999] text-[12px]">
                        {View(item.view)}
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-extrabold">
              New Releases
            </h1>
          </div>

          <div className="sm:flex hidden p-3 items-center border-2 border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <button
              onClick={() => handlePrev(2)}
              ref={prevRef2}
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
                    activeBlocks[2] === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
              ))}
            </div>
            <button
              onClick={() => handleNext(2)}
              ref={nextRef2}
              className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
            >
              <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Swiper
          className="sm:mt-12 mt-6"
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
          onInit={(swiper) => setReleases(swiper)}
        >
          {releaseMovie ? (
            releaseMovie.map((item: Movie) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="border border-[#1F1F1F] rounded-xl p-1 bg-[#1A1A1A]">
                    <Image
                      src={`http://127.0.0.1:8000/${item.thumbnail_path.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt={item.title}
                      width={300}
                      height={400}
                      className=" rounded-lg sm:h-[310px] h-64"
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
              <h1>Loding...</h1>
            </div>
          )}
        </Swiper>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-extrabold">
              Must - Watch Movies
            </h1>
          </div>

          <div className="sm:flex hidden p-3 items-center border-2 border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <button
              onClick={() => handlePrev(3)}
              ref={prevRef3}
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
                    activeBlocks[3] === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
              ))}
            </div>
            <button
              onClick={() => handleNext(3)}
              ref={nextRef3}
              className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
            >
              <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Swiper
          className="mt-12"
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
          onInit={(swiper) => setWatchMovies(swiper)}
        >
          {mustWatchMovie ? (
            mustWatchMovie.map((item: Movie) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="border border-[#1F1F1F] rounded-xl p-1 bg-[#1A1A1A]"
                >
                  <Image
                    src={`http://127.0.0.1:8000/${item.thumbnail_path.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={item.title}
                    width={300}
                    height={400}
                    className=" rounded-lg sm:h-[310px] h-64"
                  />
                  <Link href={`/${item.id}`}>
                    <h1 className="text-[16px] mt-0.5 truncate">
                      {item.title}
                    </h1>
                  </Link>

                  <div className="flex justify-between items-center">
                    <h1 className="border border-[#262626] bg-[#141414] rounded-3xl px-2 py-0.5 w-fit text-[12px]">
                      {item.year}
                    </h1>
                    <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-2 py-0.5 w-fit">
                      <Image src="/icon/Union.svg" alt="views" width={12} height={12} className="w-3 h-3" />
                      <h1 className="text-[#999999] text-[12px]">
                        {View(item.view)}
                      </h1>
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between pt-1.5">
                  <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-1.5 py-0.5">
                    <img src="/icon/Subtract.svg" alt="" className="w-3 h-3" />
                    <h1 className="text-[#999999] text-[12px]">
                      {Time(item.duration, "h", "m")}
                    </h1>
                  </div>
                  <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-1.5 sm:py-0.5 py-1.5">
                    <div className="flex">
                      {generateStars(Number(item.rating))}
                    </div>
                    <h1 className="text-[12px] sm:flex hidden">
                      {View(item.view)}
                    </h1>
                  </div>
                </div> */}
                </SwiperSlide>
              );
            })
          ) : (
            <div>
              <h1>Loding...</h1>
            </div>
          )}
        </Swiper>
      </section>

      <section className="relative sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none">
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1}
          onInit={(swiper) => setMovies(swiper)}
        >
          {show_movies.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="relative h-screen w-full overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1920}
                  height={403}
                  className="w-full h-[403px] object-cover blur-[1px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute top-15 sm:left-14 left-4 z-10 max-w-[320px] text-white">
                  <h1 className="text-3xl  font-bold mb-4">{item.title}</h1>
                  <p className="text-[16px] text-[#999999]">{item.text}</p>
                  <div className="flex items-center gap-10 mt-4">
                    <div className="flex items-center gap-1">
                      <Image src="/icon/imdb.svg" alt="IMDB" width={25} height={15} />
                      <h1 className="text-2xl text-[#EEBB07] font-semibold">
                        {item.rating}
                        <span className="text-lg text-[#FFFFFF] font-medium">
                          /10
                        </span>
                      </h1>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src="/icon/time.svg" alt="Time" width={20} height={20} />
                      <h2 className="text-[#FFFFFF] text-lg font-semibold">
                        {Time(item.duration, " Hours", " Minute")}
                      </h2>
                    </div>
                  </div>

                  <Link href={`/${item.id}`}>
                    <div className="rounded-md bg-[#E50000] py-3 mt-4 flex justify-center">
                      <button className="text-[#FFFFFF] text-sm font-semibold">
                        Play Now
                      </button>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 hidden sm:flex p-3 items-center">
          <button
            onClick={() => handlePrev(4)}
            ref={prevRef7}
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
                    activeBlocks[4] === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
            ))}
          </div>
          <button
            onClick={() => handleNext(4)}
            ref={nextRef7}
            className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
          >
            <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
          </button>
        </div>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-extrabold">
              Trending Shows Now
            </h1>
          </div>

          <div className="sm:flex hidden p-3 items-center border-2 border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <button
              onClick={() => handlePrev(5)}
              ref={prevRef4}
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
                    activeBlocks[5] === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
              ))}
            </div>
            <button
              onClick={() => handleNext(5)}
              ref={nextRef4}
              className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
            >
              <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Swiper
          className="sm:mt-12 mt-6"
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
          onInit={(swiper) => setTrandShow(swiper)}
        >
          {trand_movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="border border-[#1F1F1F] rounded-xl p-1 bg-[#1A1A1A]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={400}
                    className=" rounded-lg sm:h-[310px] h-64"
                  />
                  <Link href={`/${item.id}`}>
                    <h1 className="text-[16px] mt-0.5 truncate">{item.name}</h1>
                  </Link>

                  <div className="flex items-center justify-between pt-1.5">
                    <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl py-0.5 px-1 ">
                      <Image
                        src="/icon/Subtract.svg"
                        alt="duration"
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                      <h1 className="text-[#999999] text-[12px]">
                        {Time(item.duration, "h", "m")}
                      </h1>
                    </div>
                    <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-1 py-0.5  ">
                      <Image
                        src="/icon/season.svg"
                        alt="season"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5"
                      />
                      <h1 className="text-[#999999] text-[12px]">
                        {item.season} Season
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-extrabold">
              New Released Shows
            </h1>
          </div>

          <div className="sm:flex hidden p-3 items-center border-2 border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <button
              onClick={() => handlePrev(6)}
              ref={prevRef5}
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
                    activeBlocks[6] === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
              ))}
            </div>
            <button
              onClick={() => handleNext(6)}
              ref={nextRef5}
              className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
            >
              <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Swiper
          className="sm:mt-12 mt-6"
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
          onInit={(swiper) => setReleasesShow(swiper)}
        >
          {trand_movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="border border-[#1F1F1F] rounded-xl p-1 bg-[#1A1A1A]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={400}
                    className=" rounded-lg sm:h-[310px] h-64"
                  />
                  <Link href={`/${item.id}`}>
                    <h1 className="text-[16px] mt-0.5 truncate">{item.name}</h1>
                  </Link>
                  <div className="flex items-center justify-between pt-1.5">
                    <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl py-0.5 px-1 ">
                      <Image
                        src="/icon/Subtract.svg"
                        alt="duration"
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                      <h1 className="text-[#999999] text-[12px]">
                        {Time(item.duration, "h", "m")}
                      </h1>
                    </div>
                    <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-1 py-0.5  ">
                      <Image
                        src="/icon/season.svg"
                        alt="season"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5"
                      />
                      <h1 className="text-[#999999] text-[12px]">
                        {item.season} Season
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-extrabold">
              Must - Watch Shows
            </h1>
          </div>

          <div className="sm:flex hidden p-3 items-center border-2 border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <button
              onClick={() => handlePrev(7)}
              ref={prevRef6}
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
                    activeBlocks[7] === index
                      ? "/icon/line_red.png"
                      : "/icon/line_gray.png"
                  }
                  alt="pagination indicator"
                />
              ))}
            </div>
            <button
              onClick={() => handleNext(7)}
              ref={nextRef6}
              className="border border-[#1F1F1F] rounded-md bg-[#1A1A1A] p-1.5 ml-3"
            >
              <Image src="/icon/right.svg" alt="right" width={24} height={24} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Swiper
          className="sm:mt-12 mt-6"
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
          onInit={(swiper) => setMustWatchShow(swiper)}
        >
          {trand_movies.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="border border-[#1F1F1F] rounded-xl p-1 bg-[#1A1A1A]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={400}
                  className=" rounded-lg sm:h-[310px] h-64"
                />
                <Link href={`/${item.id}`}>
                  <h1 className="text-[16px] mt-0.5 truncate">{item.name}</h1>
                </Link>

                <div className="flex items-center justify-between pt-1.5">
                  <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-1.5 py-0.5">
                    <Image src="/icon/Subtract.svg" alt="duration" width={12} height={12} className="w-3 h-3" />
                    <h1 className="text-[#999999] text-[12px]">
                      {Time(item.duration, "h", "m")}
                    </h1>
                  </div>
                  <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-1.5 sm:py-0.5 py-1.5">
                    <div className="flex">
                      {generateStars(Number(item.rating))}
                    </div>
                    <h1 className="text-[12px] sm:flex hidden">
                      {View(item.view)}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 2xl:mx-40 mx-4 select-none">
        <div
          style={{
            backgroundImage: `linear-gradient(245deg, rgba(229,0,0,0.15), rgba(0,0,0,0.8))`,
          }}
          className="border border-[#262626] rounded-xl py-16 px-14 flex justify-between items-center sm:flex-nowrap flex-wrap"
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

export default MoviesShow;

const movies_data = [
  {
    id: 1,
    title: "Avengers: Endgame",
    text: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and restore balance to the universe — no matter the cost.",
    rating: 8.3,
    duration: 167,
    image: "/image/image.webp",
  },
  {
    id: 2,
    title: "Kantara",
    text: "A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.",
    rating: 7.4,
    duration: 137,
    image: "/image/image.png",
  },
  {
    id: 3,
    title: "Oppenheimer 2023",
    text: "Oppenheimer is a film directed by Christopher Nolan. The film is based on the true story of J. Robert Oppenheimer. It is based on the biography by Kai Bird and Martin J. Sherwin. ",
    rating: 8.3,
    duration: 191,
    image: "/image/image.jpg",
  },
];

const trand_movies = [
  {
    id: 1,
    name: "F1",
    duration: 167,
    view: 2150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 5,
    season: 4,
  },
  {
    id: 2,
    name: "Avengers: Endgame",
    duration: 167,
    view: 1154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 4.5,
    season: 4,
  },
  {
    id: 3,
    name: "The Dark Knight",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 4,
    season: 3,
  },
  {
    id: 4,
    name: "Interstellar",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 4.5,
    season: 5,
  },
  {
    id: 5,
    name: "Spider-Man: No Way Home",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 3.5,
    season: 7,
  },
  {
    id: 6,
    name: "The Matrix Resurrections",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 4.5,
    season: 6,
  },
  {
    id: 7,
    name: "Doctor Strange in the Multiverse of Madness",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 5,
    season: 5,
  },
  {
    id: 8,
    name: "Doctor Strange in the Multiverse of Madness",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 5,
    season: 5,
  },
  {
    id: 9,
    name: "Doctor Strange in the Multiverse of Madness",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 5,
    season: 5,
  },
  {
    id: 10,
    name: "Doctor Strange in the Multiverse of Madness",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 5,
    season: 5,
  },
  {
    id: 11,
    name: "Doctor Strange in the Multiverse of Madness",
    duration: 167,
    view: 2154,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    rating: 5,
    season: 5,
  },
];

const show_movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    text: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and restore balance to the universe — no matter the cost.",
    rating: 8.3,
    duration: 167,
    image: "/image/image_1.png",
  },
  {
    id: 2,
    title: "Oppenheimer 2023",
    text: "Oppenheimer is a film directed by Christopher Nolan. The film is based on the true story of J. Robert Oppenheimer. It is based on the biography by Kai Bird and Martin J. Sherwin. ",
    rating: 8.3,
    duration: 191,
    image: "/image/image.jpg",
  },
];
