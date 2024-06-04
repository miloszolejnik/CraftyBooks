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
    const styled_slider ="embla__slide image-full card rounded-none text-center before:hidden justify-items-center"
    const styled_title = "w-1/2 h-fit z-10 self-center text-neutral-content py-4"
    return(
    <section className="w-screen h-5/6">
        <div className="embla w-screen h-full overflow-hidden box-border" ref={emblaRef}>
            <div className="embla__container h-full">
                <div className={styled_slider}>
                    <div className={styled_title}>
                        <h1 className="text-2xl font-bold py-4">Example text</h1>
                        <p className="text-lg py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus.</p>
                        <div className="btn-cta rounded-md my-2">
                            <button className="btn py-2 bg-primary uppercase text-neutral-content px-12 w-full hover:translate-x-2 hover:translate-y-2" >Check it out!</button>
                        </div>
                    </div>
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
    </section>
    )
}