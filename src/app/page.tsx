import { getMovies, getRatingMovies } from "@/apis";
import Movieitem from "@/components/movieitem";
import RatingMovieitem from "@/components/ratingmovieitem";
import { Movie } from "@/types";
import Image from "next/image";

export default async function Home() {
  const request = await getMovies();
  const requestRating = await getRatingMovies();
  // console.log(request)

  return (
    <div>
      <div className="flex items-center gap-[24px]">
                <Image
                    src="./../svg/search.svg"
                    alt="Next.js Logo"
                    width={24}
                    height={24}
                    priority
                />
                <input className="bg-[#10141E] w-[420px] outline-none text-white" type="text" placeholder="Search for movies or TV series"/>
            </div>
            {/* wrapper */}
          <div className="mt-[34px]">
            <h1 className="text-[32px] font-normal text-white">Trending</h1>
              <div className="carousel mt-[25px] flex gap-[40px] carousel-end rounded-box">
                {requestRating?.docs?.map((movie:Movie)=>(
                  <RatingMovieitem key={movie.id} data={movie}/>
                ))}
              </div>
            <div className="mt-[40px]">
              <h1 className="text-[32px] font-normal text-white">Recommended for you</h1>
              <div className="mt-[32px] text-white flex gap-[30px] flex-wrap">
                  {request?.docs?.map((movie:Movie)=>(
                      <Movieitem key={movie.id} data={movie}/>
                  ))}
              </div>
            </div>
          </div>
    </div>
  );
}
