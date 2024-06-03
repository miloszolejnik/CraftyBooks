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
export default function Hero(){
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])
    const styled_slider ="embla__slide h-full fill"
    return(
    <div className="w-screen h-3/4">
        <div className="embla w-screen h-full overflow-hidden box-border" ref={emblaRef}>
            <div className="embla__container h-full">
                    <Image className={styled_slider} src={hero1} alt="hero image" style={{objectFit:"contain"}} />
                    <Image className={styled_slider} src={hero2} alt="hero image" style={{objectFit:"contain"}} />
                    <Image className={styled_slider} src={hero3} alt='hero image' style={{objectFit:"contain"}} />
                    <Image className={styled_slider} src={hero4} alt='hero image' style={{objectFit:"contain"}} />
            </div>
        </div>
    </div>
    )
}