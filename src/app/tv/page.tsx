import Image from "next/image";
import { getMovies } from "@/apis";
import Movieitem from "@/components/movieitem";
import { Movie } from "@/types";

export default async function tv(){
    const request = await getMovies();
    return(
        <div>
            <div className="flex items-center gap-[24px]">
                <Image
                    src="./../svg/search.svg"
                    alt="Next.js Logo"
                    width={24}
                    height={24}
                    priority
                />
                <input className="bg-[#10141E] w-[420px] outline-none text-white" type="text" placeholder="Search for TV series"/>
            </div>
            <h1 className="text-white">Tv</h1>
            <div className="mt-[32px] text-white flex gap-[30px] flex-wrap">
                  {request?.docs?.map((movie:Movie)=>(
                      <Movieitem key={movie.id} data={movie}/>
                  ))}
              </div>
        </div>
    )
}