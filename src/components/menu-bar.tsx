import Image from "next/image";
import Link from "next/link";

export function MenuBar(){
    return(
        <div>
            <div className="w-[96px] h-[960px] rounded-[16px] bg-[#161D2F]">
                <div className="w-[32px] m-auto">
                    <div className="flex flex-col  items-center gap-[75px]">
                        <div className="pt-[35px]">
                            <Link href={'/'}>
                                <button>
                                <Image
                                    src="./../svg/video-logo.svg"
                                    alt="movies logo Logo"
                                    width={32}
                                    height={25}
                                />
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[40px]">
                            <Link href={'/'}>
                                <button>
                                <Image
                                    src="./../svg/Shape.svg"
                                    alt="movies logo Logo"
                                    width={20}
                                    height={20}
                                />
                                </button>
                            </Link>
                            <Link href={'/movies'}>
                                <button>
                                <Image
                                    src="./../svg/Movies.svg"
                                    alt="movies logo Logo"
                                    width={20}
                                    height={20}
                                />
                                </button>
                            </Link>
                            <Link href={'/tv'}>
                                <button>
                                <Image
                                    src="./../svg/tv.svg"
                                    alt="movies logo Logo"
                                    width={20}
                                    height={20}
                                />
                                </button>
                            </Link>
                            <Link href={'/bookmarked'}>
                                <button>
                                <Image
                                    src="./../svg/path.svg"
                                    alt="movies logo Logo"
                                    width={20}
                                    height={20}
                                />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex mt-[552px]">
                        <button>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/Oval.png"
                                alt="movies logo Logo"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}