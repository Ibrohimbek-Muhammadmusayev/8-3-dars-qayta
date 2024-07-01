import { getMovies } from "@/apis";
import Movieitem from "@/components/movieitem";
import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
// import movies from "./../../../public/movies.jpg"

export default async function movies(){
    const request = await getMovies()
    console.log(request)
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
                <input className="bg-[#10141E] w-[420px] outline-none text-white" type="text" placeholder="Search for movies"/>
            </div>
            {/* wrapper */}
            <div className="mt-[24px] text-white flex gap-[30px] flex-wrap">
                {request?.docs?.map((movie:Movie)=>(
                    <Movieitem key={movie.id} data={movie}/>
                ))}
            </div>
        </div>
    )
}