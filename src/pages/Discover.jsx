import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Discover = () => {
  const { type, id } = useParams();
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  // const [totalPage, setTotalPage] = useState(0)
  const totalPage = data?.total_pages || 1;

  document.title = "Movies";

  const getMovie = async () => {
    const response = await axios(`/discover/${type}?with_genres=${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(data);

  return (
    <div className='bg-slate-950 text-white p-3 overflow-x-auto calc-h-screen-16 w-full sm:calc-w-screen-64'>
      {data && (
        <div className="flex flex-wrap justify-around w-full gap-3">
          {data.results.map((movie, key) => (
            <Card key={key} data={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;
