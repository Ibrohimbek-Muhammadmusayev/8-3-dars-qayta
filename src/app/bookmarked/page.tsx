'use client'
import BookmarkItem from "@/components/bookmark";
import { Movie } from "@/types";
import Image from "next/image";

export default function bookmarked(){
    const request = JSON.parse(window?.localStorage.getItem('fowariest') as string );
    console.log(request);
    
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
                <input className="bg-[#10141E] w-[420px] outline-none text-white" type="text" placeholder="Search for bookmarked shows"/>
            </div>
            <h1 className="text-white">bookmarked</h1>
            <div className="mt-[24px] text-white flex gap-[30px] flex-wrap">
                {request?.map((movie:Movie)=>(
                    <BookmarkItem key={movie.id} data={movie}/>
                ))}
            </div>
        </div>
    )
}