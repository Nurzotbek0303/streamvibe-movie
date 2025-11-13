"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import instance from "../service/api";

function MoviesId() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef1 = useRef<HTMLButtonElement | null>(null);
  const nextRef1 = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [review, setReview] = useState<SwiperType | null>(null);

  const [active, setActive] = useState<number>(0);
  const count: number = 3;
  const [openReviews, setOpenReviews] = useState<boolean>(false);

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
    if (review && prevRef1.current && nextRef1.current) {
      const navigation = review.params.navigation as Partial<{
        prevEl: HTMLElement;
        nextEl: HTMLElement;
      }>;
      navigation.prevEl = prevRef1.current;
      navigation.nextEl = nextRef1.current;

      review.navigation.init();
      review.navigation.update();
    }
  }, [review]);

  function generateStars(rating: number) {
    let stars = [];
    const fullStars: number = Math.floor(rating);
    const hasHalfStar: boolean = rating % 1 >= 0.5;
    const emptyStars: number = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={`full-${i}`}
          src="/icon/star_red.svg"
          alt="full"
          className="w-3 h-3"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <img
          key="half"
          src="/icon/star_gray_red.svg"
          alt="half"
          className="w-3 h-3"
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <img
          key={`empty-${i}`}
          src="/icon/star_gray.svg"
          alt="empty"
          className="w-3 h-3"
        />
      );
    }

    return stars;
  }

  function handleNext(): void {
    setActive((prev) => (prev < count ? prev + 1 : prev));
  }

  function handlePrev(): void {
    setActive((prev) => (prev > 0 ? prev - 1 : prev));
  }

  const { movieId } = useParams();
  const [movieData, setMovieData] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function MoviId() {
      const req = await instance.get(`film/films?film_id=${movieId}`);
      setMovieData(req.data);
    }
    MoviId();
  }, []);

  const getYouTubeEmbedUrl = (url: string, autoplay: boolean = false) => {
    let videoId = "";

    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1].split("&")[0];
    }

    return `https://www.youtube.com/embed/${videoId}${
      autoplay ? "?autoplay=1" : ""
    }`;
  };
  return (
    <div>
      <section className="relative">
        {movieData ? (
          <>
            <iframe
              src={getYouTubeEmbedUrl(movieData.video_url, isPlaying)}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className={`h-screen w-full sm:px-20 2xl:px-40 px-4 pt-20 2xl:pt-30 pb-1 ${
                isPlaying ? "" : "brightness-50 blur-[1px]"
              }`}
            ></iframe>

            {!isPlaying && (
              <div className="absolute top-14 2xl:top-60 inset-0 flex items-center justify-center flex-col">
                <h1 className="sm:pt-80 pt-60 sm:text-5xl text-3xl text-[#FFFFFF] text-center font-bold">
                  {movieData.title}
                </h1>
                <p className="pt-4 text-[#999999] text-[16px] px-28 sm:flex hidden text-center">
                  {movieData.description}
                </p>

                <button
                  onClick={() => setIsPlaying(true)}
                  className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Ko'rish
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-white text-center pt-20">Loading...</p>
        )}
      </section>

      <section className="sm:mx-20 mx-4 2xl:mx-40 sm:mt-24 mt-14 grid sm:grid-cols-3 grid-cols-1 gap-10">
        <div className="col-span-2">
          <div className="border-[#262626] border rounded-lg bg-[#1A1A1A] sm:p-8 p-6">
            <h1 className="text-[#999999] text-[16px]">Description</h1>
            <p className="text-sm text-[#FFFFFF] pt-3.5">
              {movieData?.description}
            </p>
          </div>

          <div className="border-[#262626] border rounded-lg bg-[#1A1A1A] sm:p-8 p-6 mt-5">
            <div className="flex items-center justify-between">
              <h1 className="text-[#999999] text-[16px]">Cast</h1>
              <div className="flex gap-2">
                <button
                  ref={prevRef}
                  className=" border border-[#262626] rounded-[50%] p-1 bg-[#141414]"
                >
                  <img src="/icon/left.svg" alt="" />
                </button>
                <button
                  ref={nextRef}
                  className=" border border-[#262626] rounded-[50%] p-1 bg-[#141414]"
                >
                  <img src="/icon/right.svg" alt="" />
                </button>
              </div>
            </div>

            <Swiper
              className="mt-6"
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={8}
              breakpoints={{
                340: {
                  slidesPerView: 4,
                },
                540: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 8,
                },
                1536: {
                  slidesPerView: 10,
                },
              }}
              onInit={(swiper) => setSwiperInstance(swiper)}
            >
              {actiors_image.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <img
                      src={item.image}
                      alt=""
                      className="w-22 h-22 2xl:w-26 2xl:h-24 rounded-xl"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="border-[#262626] border rounded-lg bg-[#1A1A1A] sm:p-8 p-6 mt-5 ">
            <div className="flex items-center justify-between">
              <h1 className="text-[#999999] text-[16px]">Reviews</h1>
              <button
                onClick={() => setOpenReviews(!openReviews)}
                className="border border-[#262626] bg-[#141414] rounded-lg flex items-center gap-1 py-2 px-3"
              >
                <img src="/icon/plus.svg" alt="" className="w-5 h-5" />
                <h1 className="text-[#FFFFFF] text-sm">Add Your Review</h1>
              </button>
            </div>

            <Swiper
              className="mt-6 "
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1536: {
                  slidesPerView: 3,
                },
              }}
              onInit={(swiper) => setReview(swiper)}
            >
              {review_movie.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="border-[#262626] border rounded-lg bg-[#0F0F0F] p-9 min-h-[210px]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-[#FFFFFF] text-lg">{item.name}</h1>
                        <p className="text-[#999999] text-sm">
                          From {item.countriy}
                        </p>
                      </div>
                      <div className="flex items-center gap-0.5 border border-[#262626] bg-[#141414] rounded-3xl px-2 py-1">
                        <div className="flex">
                          {generateStars(Number(item.rating))}
                        </div>
                        <h1 className="text-[12px] text-[#999999] truncate">
                          {item.rating}
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#999999] text-sm pt-4">{item.text}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex justify-center pt-8">
              <div className="flex ">
                <button
                  onClick={handlePrev}
                  ref={prevRef1}
                  className=" border border-[#262626] rounded-[50%] p-1 bg-[#141414] mr-2"
                >
                  <img src="/icon/left.svg" alt="" />
                </button>
                <div className="flex items-center gap-[3px]">
                  {[0, 1, 2, 3].map((index) => (
                    <img
                      key={index}
                      src={
                        active === index
                          ? "/icon/line_red.png"
                          : "/icon/line_gray.png"
                      }
                      alt=""
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  ref={nextRef1}
                  className=" border border-[#262626] rounded-[50%] p-1 bg-[#141414] ml-2"
                >
                  <img src="/icon/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#262626] bg-[#1A1A1A] rounded-lg sm:p-8 p-6 sm:col-span-1 col-span-2 h-fit">
          <div className="flex items-center gap-1">
            <img src="/icon/icon_1.svg" alt="" />
            <h1 className="text-[#999999] text-[16px]">Released Year</h1>
          </div>
          <h1 className="text-[#FFFFFF] text-[16px] pt-2.5">
            {movieData && movieData.year}
          </h1>
          <div className="flex items-center gap-1 pt-7">
            <img src="/icon/icon_2.svg" alt="" />
            <h1 className="text-[#999999] text-[16px]">Available Languages</h1>
          </div>
          <div className="flex flex-wrap gap-2 pt-2.5">
            {movieData &&
              movieData.languages.sort().map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="border border-[#262626] rounded-lg bg-[#141414] py-1.5 px-2.5"
                  >
                    <button className="text-[#FFFFFF] text-sm">{item}</button>
                  </div>
                );
              })}
          </div>
          <div className="flex items-center gap-1 pt-7">
            <img src="/icon/icon_3.svg" alt="" />
            <h1 className="text-[#999999] text-[16px]">Ratings</h1>
          </div>
          <div className="flex gap-4 pt-2.5 ">
            {rating.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border border-[#262626] rounded-lg bg-[#141414] px-4 py-2.5"
                >
                  <h1>{item.name}</h1>
                  <div className="flex items-center pt-1">
                    {generateStars(Number(item.rating))}
                    <h1 className="text-[12px] text-[#999999] truncate pl-1">
                      {item.rating}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex  items-center gap-1 pt-7">
            <img src="/icon/icon_4.svg" alt="" />
            <h1 className="text-[#999999] text-[16px]">Gernes</h1>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {movieData &&
              movieData.genres.sort().map((item: any) => {
                return (
                  <div className="border border-[#262626] rounded-lg bg-[#141414] py-1.5 px-2.5 ">
                    <button className="text-[#FFFFFF] text-sm">{item}</button>
                  </div>
                );
              })}
          </div>

          <div className="flex items-center gap-1 pt-7">
            <h1 className="text-[#999999] text-[16px]">Director</h1>
          </div>
          <div className="border border-[#262626] rounded-lg bg-[#141414] p-2 flex gap-2 items-center mt-1">
            <img
              src="/image/actior_1.png"
              alt=""
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <h1 className="text-[#FFFFFF] text-[16px]">Rishab Shetty</h1>
              <p className="text-[#999999] text-sm">From India</p>
            </div>
          </div>

          <div className="flex items-center gap-1 pt-7">
            <h1 className="text-[#999999] text-[16px]">Music</h1>
          </div>
          <div className="border border-[#262626] rounded-lg bg-[#141414] p-2 flex gap-2 items-center mt-1">
            <img
              src="/image/actior_1.png"
              alt=""
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <h1 className="text-[#FFFFFF] text-[16px]">Rishab Shetty</h1>
              <p className="text-[#999999] text-sm">From India</p>
            </div>
          </div>
        </div>

        {openReviews && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-[6px] flex justify-center items-center z-50">
            <div className="border border-[#262626] rounded-lg bg-[#0F0F0F] pt-4 pb-5 px-5">
              <h1 className="text-[20px] font-medium  text-[#F1F1F3] text-center">
                Reviews
              </h1>
              <form className="flex flex-col w-72 gap-5">
                <label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full border border-gray-600 bg-[#262626] py-1.5 px-3 rounded-md placeholder:text-[#F1F1F3] mt-6"
                  />
                </label>

                <label>
                  <input
                    type="text"
                    placeholder="Enter From"
                    className="w-full border border-gray-600 bg-[#262626] py-1.5 px-3 rounded-md placeholder:text-[#F1F1F3]"
                  />
                </label>

                <select className="w-full border border-gray-600 bg-[#262626] py-1.5 px-3 rounded-md placeholder:text-[#F1F1F3]">
                  <option value="">Tanlang</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                </select>

                <label>
                  <textarea
                    className="w-full border border-gray-600 bg-[#262626] py-1.5 px-3 rounded-md placeholder:text-[#F1F1F3]"
                    placeholder="Enter Review"
                  ></textarea>
                </label>

                <label className="flex justify-between items-center gap-6">
                  <button className="w-full bg-[#E50000] py-1.5 px-3 rounded-md text-[#F1F1F3] mt-3">
                    Add Review
                  </button>
                  <button
                    onClick={() => setOpenReviews(!open)}
                    className="w-full bg-[#262626] py-1.5 px-3 rounded-md text-[#F1F1F3] mt-3"
                  >
                    Cancel
                  </button>
                </label>
              </form>
            </div>
          </div>
        )}
      </section>

      <section className="sm:mt-20 mt-10 sm:mx-20 mx-4 2xl:mx-40 select-none">
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

export default MoviesId;

const actiors_image = [
  {
    id: 1,
    image: "/image/actior_1.png",
  },
  {
    id: 2,
    image: "/image/actior_2.png",
  },
  {
    id: 3,
    image: "/image/actior_3.png",
  },
  {
    id: 4,
    image: "/image/actior_4.png",
  },
  {
    id: 5,
    image: "/image/actior_5.png",
  },
  {
    id: 6,
    image: "/image/actior_6.png",
  },
  {
    id: 7,
    image: "/image/actior_1.png",
  },
  {
    id: 8,
    image: "/image/actior_2.png",
  },
  {
    id: 9,
    image: "/image/actior_3.png",
  },
  {
    id: 10,
    image: "/image/actior_4.png",
  },
  {
    id: 11,
    image: "/image/actior_5.png",
  },
  {
    id: 12,
    image: "/image/actior_6.png",
  },
];

const review_movie = [
  {
    id: 1,
    name: "Aniket Roy",
    countriy: "India",
    text: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Swaraj",
    countriy: "India",
    text: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
    rating: 4,
  },
  {
    id: 3,
    name: "Aniket Roy",
    countriy: "India",
    text: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
    rating: 5,
  },
  {
    id: 4,
    name: "Aniket Roy",
    countriy: "India",
    text: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
    rating: 5,
  },
  {
    id: 5,
    name: "Aniket Roy",
    countriy: "India",
    text: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
    rating: 4.5,
  },
];

const rating = [
  {
    id: 1,
    name: "IMDb",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Streamvibe",
    rating: 4,
  },
];
