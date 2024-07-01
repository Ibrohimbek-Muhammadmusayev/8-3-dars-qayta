'use client'
import Image from "next/image"
import Link from "next/link"
import { Movie } from "@/types"
export default function RatingMovieitem({data} : { data: Movie }) {
    const {id, name, enName, year, type, description, shortDescription, poster, backdrop,} = data
return (
    <div onClick={()=>(document.getElementById(`my_modal_${id}`) as HTMLDialogElement).showModal()} className="carousel-item">
        <Image
            className="rounded-[12px]"
            src={poster?.url || '/kino.png' }
            alt="Next.js Logo"
            width={300}
            height={300}
        />
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
    </div>
)}