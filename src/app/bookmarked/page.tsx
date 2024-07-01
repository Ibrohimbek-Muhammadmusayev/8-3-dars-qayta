import Image from "next/image";

export default function bookmarked(){
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
        </div>
    )
}