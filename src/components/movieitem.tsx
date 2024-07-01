'use client'
import Image from "next/image"
import Link from "next/link"
import { Movie } from "@/types"
export default function Movieitem({data} : { data: Movie }) {
    const {id, name, enName, year, type, description, shortDescription, poster, backdrop,} = data
return (
    <section onClick={()=>(document.getElementById(`my_modal_${id}`) as HTMLDialogElement).showModal()}>
        <div className="w-[300px] h-[550px] border flrx flex-col justify-center items-center text-center overflow-hidden rounded-[10px]">
            <div className="flex justify-center items-center">
                <Image
                    src={poster?.url || '/kino.png' }
                    alt="Next.js Logo"
                    width={300}
                    height={300}
                />
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