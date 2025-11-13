"use client";
import React, { useState } from "react";
import Link from "next/link";

function Search() {
  const [search, setSearch] = useState<string>("");
  const [filterData, setFilterData] = useState(data_movie);
  const [open, setOpen] = useState<boolean>(false);

  function SearchData() {
    if (search.trim() === "") {
      setFilterData(data_movie);
      setOpen(open);
      return;
    }
    const results = data_movie.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilterData(results);
    setOpen(!open);
  }

  function handleGenreClick(genre: string) {
    const results = data_movie.filter((item) =>
      item.allGenres.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    setFilterData(results);
    setSearch(genre);
    setOpen(true);
  }
  return (
    <div className="w-full pt-24 sm:px-20 px-4 2xl:px-40">
      <div className="flex items-center gap-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 border border-gray-600 bg-[#262626] rounded-md"
        />
        <button
          onClick={SearchData}
          onKeyDown={(e) => e.key === "Enter" && SearchData()}
          className="bg-[#E50000] px-8 py-2 rounded-md text-gray-200 hover:text-white"
        >
          Search
        </button>
      </div>

      <div className="pt-6 pb-3 flex gap-3 items-center overflow-x-auto whitespace-pre scrollbar-hide">
        {allGenres.sort().map((item) => {
          return (
            <div
              key={item}
              className="border border-[#262626] bg-[#141414] rounded-lg py-1 px-3 shrink-0 select-none text-gray-300 hover:text-[#FFFFFF] "
            >
              <button
                onClick={() => handleGenreClick(item)}
                className="cursor-pointer"
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>

      {open && (
        <div className="grid 2xl:grid-cols-8 sm:grid-cols-6 grid-cols-2 pt-12 gap-2">
          {filterData.length > 0 ? (
            filterData.map((item) => {
              return (
                <div key={item.id} className="">
                  <div className="border border-[#1F1F1F] rounded-xl p-1 bg-[#1A1A1A]">
                    <img
                      src={item.image}
                      alt=""
                      className=" rounded-lg sm:h-[330px] h-72"
                    />
                    <Link href={`/${item.id}`}>
                      <h1 className="text-[16px] mt-0.5 truncate">
                        {item.name}
                      </h1>
                    </Link>

                    <p className="text-sm mt-1">{item.day}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-400 mt-5">Hech narsa topilmadi 😢</p>
          )}
        </div>
      )}

      <div className="sm:h-22 h-6 "></div>
    </div>
  );
}

export default Search;

const data_movie = [
  {
    id: 1,
    name: "F1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Action", "Adventure"],
  },
  {
    id: 2,
    name: "Avengers: Endgame",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Comedy", "Drama"],
  },
  {
    id: 3,
    name: "Inception",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: 4,
    name: "The Dark Knight",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: 5,
    name: "Interstellar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: 6,
    name: "Spider-Man: No Way Home",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: 7,
    name: "The Matrix Resurrections",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: 8,
    name: "Doctor Strange in the Multiverse of Madness",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: 9,
    name: "Doctor Strange in the Multiverse of Madness",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: 10,
    name: "Doctor Strange in the Multiverse of Madness",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: 11,
    name: "Doctor Strange in the Multiverse of Madness",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
    day: "04.08.2025",
    allGenres: ["Animation", "Family"],
  },
];

const allGenres: string[] = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Thriller",
  "Mystery",
  "Romance",
  "Crime",
  "Fantasy",
  "Science Fiction",
  "Animation",
  "Family",
  "Documentary",
  "Musical",
  "Biography",
  "History",
  "War",
  "Western",
  "Sport",
  "Superhero",
  "Zombie",
  "Psychological",
  "Post-Apocalyptic",
  "Cyberpunk",
  "Steampunk",
  "Time Travel",
  "Space",
  "Alien",
  "Political",
  "Gangster",
  "Spy",
  "Survival",
  "Teen",
  "Dark Comedy",
  "Romantic Comedy",
  "Crime Drama",
  "Fantasy Adventure",
  "Historical Drama",
  "Crime Documentary",
  "Anime",
  "Kids",
];
