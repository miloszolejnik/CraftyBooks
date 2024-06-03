'use client'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Image from "next/image";
import hero1 from '@/public/hero-1.jpg'
import hero2 from '@/public/hero-2.jpg'
import hero3 from '@/public/hero-3.jpg'
import hero4 from '@/public/hero-4.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import { before } from "node:test";
export default function Hero(){
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])
    const styled_slider ="embla__slide image-full card rounded-none text-center before:hidden"
    const styled_title = "text-2xl w-auto h-fit z-10 self-center font-bold text-neutral-content bg-black bg-opacity-20 py-4"
    return(
    <div className="w-screen h-5/6">
        <div className="embla w-screen h-full overflow-hidden box-border" ref={emblaRef}>
            <div className="embla__container h-full">
                <div className={styled_slider}>
                    <h1 className={styled_title}>Artystyczne Oprawy Książek</h1>
                    <figure>
                        <Image src={hero1} alt="hero image" className=" w-screen relative z-0" />
                    </figure>
                </div>
                <div className={styled_slider}>
                    <h1 className={styled_title}>Example text</h1>
                    <figure>
                        <Image src={hero2} alt="hero image" className=" w-screen relative z-0" />
                    </figure>
                </div>
                <div className={styled_slider}>
                    <h1 className={styled_title}>Example text</h1>
                    <figure>
                        <Image src={hero3} alt="hero image" className=" w-screen relative z-0" />
                    </figure>
                </div>
                <div className={styled_slider}>
                    <h1 className={styled_title}>Example text</h1>
                    <figure>
                        <Image src={hero4} alt="hero image" className=" w-screen relative z-0" />
                    </figure>
                </div>
            </div>
        </div>
    </div>
    )
}