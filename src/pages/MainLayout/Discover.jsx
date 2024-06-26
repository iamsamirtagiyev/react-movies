import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { FaWindows } from "react-icons/fa";

const Discover = () => {
  const { type, id } = useParams();
  const [data, setData] = useState(null);
  // const data = []
  const [page, setPage] = useState(1);
  const scrollRef = useRef()
  // const [totalPage, setTotalPage] = useState(0)
  // const totalPage = data?.total_pages || 1;

  document.title = "Movies";

  const getMovie = async () => {
    const response = await axios(`/discover/${type}?page=${page}&with_genres=${id}`);
    setData(response.data.results)
  };

  console.log(data);

  useEffect(() => {
    getMovie();
  }, []);



  useEffect(() => {
    getMovie();
    scrollRef.current.sctollTop = 0

  }, [data, id]);


// const clickHandle = () => {
//   setPage(page => page + 1)
// }

  

  return (
    <div ref={scrollRef} className='bg-slate-950 text-white p-3 overflow-x-auto calc-h-screen-16 w-full sm:calc-w-screen-64'>
      {data && (
        <div className="flex flex-wrap justify-around w-full gap-3">
          {data.map((movie, key) => (
            <Card key={key} data={movie} />
          ))}
        </div>
      )}
      {/* <div className="py-10 text-center">
        <button onClick={clickHandle}>Load More</button>
      </div> */}
    </div>
  );
};

export default Discover;
