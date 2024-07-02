'use client'
import Image from "next/image"
import Link from "next/link"
import { Movie } from "@/types"
import { useState, useEffect } from "react"
export default function BookmarkItem({data} : { data: Movie }) {
    const {id, name, enName, year, type, description, shortDescription, poster, backdrop,} = data
    const [fav, setFav] = useState<Movie[] | []>([]);
    
    useEffect(()=> {
        const favs = JSON.parse(window?.localStorage.getItem('fowariest') as string ) || []
        setFav(favs);
    }, [])

    const addmark = (e:any)=> {
        e.stopPropagation()
        window?.localStorage.setItem('fowariest', JSON.stringify([...fav, data]));
    }

return (
    <section onClick={()=>(document.getElementById(`my_modal_${id}`) as HTMLDialogElement).showModal()}>
        <div className="w-[300px] h-[550px] border flrx flex-col justify-center items-center text-center overflow-hidden rounded-[10px]">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <Image
                        src={poster?.url || '/kino.png' }
                        alt="Next.js Logo"
                        width={300}
                        height={300}
                    />
                    <span onClick={addmark} className="cursor-pointer absolute top-[20px] right-[20px] border-[#5b5b5b] w-[40px] rounded-full flex justify-center items-center h-[40px] bg-[#d1d1d13c] hover:bg-[#d1d1d177] ">
                        <svg style={fav.findIndex((item)=> item.id = id) != -1 ? {fill: 'red'} : {}} className="hover:fill-[red] w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(252,246,246,1)"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
                    </span>
                </div>
            </div>
            <h1 className="text-slate-400 text-[20px] font-medium">{name || enName }</h1>
            {/* <button>
                <Image
                    className="text"
                    src={'/svg/Path.svg'}
                    alt="Next.js Logo"
                    width={25}
                    height={25}
                />
            </button> */}
            <div className="flex mt-[10px] text-gray-500 justify-between px-[75px]">
                <p>{year}</p>
                <p>{type}</p>
            </div>
            {/* <p>{description || shortDescription}</p> */}
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id={`my_modal_${id}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center bg-slate-500">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="py-4">{description || shortDescription || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla pariatur fugiat et ipsa. Ea, adipisci nobis numquam doloremque optio rem.'}</p>
                <div className="modal-action flex justify-center">
                    <form method="dialog" className="flex gap-[40px]">
                        <Link target="_blank" className="btn btn-info" href={`https://www.kinopoisk.ru/film/${id}`}>Watch🎬</Link>
                        <button className="btn btn-error">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </section>
)}