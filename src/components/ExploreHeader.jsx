import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { TbStarFilled } from "react-icons/tb";
import axios from "axios";
import Cast from "./Cast";

const ExploreHeader = ({ data, type }) => {
  const { imgBaseUrl } = useContext(Context);
  const [credits, setCredits] = useState(null);
  const gnrs = [];

  const creditData = async () => {
    const response = await axios.get(`/${type}/${data.id}/credits`);
    setCredits(response.data);
  };

  useEffect(() => {
    creditData();
  }, []);


  data.genres.map((genre) => gnrs.push(genre.name));

  return (
    <div
      className="p-5  flex lg:flex-row flex-col gap-10 min-calc-h-screen-16 !bg-cover !bg-no-repeat !bg-center pt-10 pl-10"
      style={{
        background: `linear-gradient(to top, rgba(2, 6, 23, 1), rgba(2, 6, 23, .95)), url(${imgBaseUrl}${data.backdrop_path})`,
      }}
    >
      <div className="lg:w-72 lg:min-w-72 lg:h-[450px] sm:sticky top-0 rounded-lg w-56 min-w-56 h-[350px]">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={imgBaseUrl + data.poster_path}
          alt="poster"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-3xl lg:text-5xl">
          {data.name || data.title}
        </h1>
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1.5 text-gray-500 text-xl font-medium ">
            <span className="text-yellow-500 text-2xl">
              <TbStarFilled />
            </span>
            <span className="">{Number(data.vote_average).toFixed(1)}</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          <span className="text-gray-500 text-xl font-medium">
            {data?.release_date?.split("-")[0] ||
              data?.first_air_date?.split("-")[0]}
          </span>
        </div>

        <span className="flex gap-1 text-xl text-gray-500 font-medium">
          {gnrs.join(", ")}
        </span>

        <p className="text-white text-base font-medium">{data.overview}</p>
        <div className=" gap-2 flex-wrap rounded-md flex overflow-x-auto">
            {
                credits && credits.cast.map((cast, index) => (
                    <Cast key={index} data={cast}/>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;
