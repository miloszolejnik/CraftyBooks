'use client'

import ItemCard from "./ItemCard";
import UseEmblaCarousel from "embla-carousel-react";

import book1 from '@/public/book-1.jpg'
import book2 from '@/public/book-2.jpg'
import book3 from '@/public/book-3.jpg'
import book4 from '@/public/book-4.jpg'

export default function Explore(){
    const [emblaRef] = UseEmblaCarousel()

    const styledEmablaSlide ="embla__slide bg-pink-200 max-w-screen justify-center align-middle flex"

    return(
        <div className="flex flex-col text-center">
            <div className="align-middle justify-items-center my-12">
                <h1 className="text-3xl font-semibold">Przykładowe Prace</h1>
            </div>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container w-screen">
                        <div className="embla__slide max-w-screen justify-center align-middle flex">
                            <ItemCard src={book1} name='Klasyka Literatury' />
                        </div>
                        <div className={styledEmablaSlide}>
                            <ItemCard src={book2} name='Fantastyka' />
                        </div>
                        <div className={styledEmablaSlide}>
                            <ItemCard src={book3} name='Pisma Święte' />
                        </div>
                        <div className={styledEmablaSlide}>
                            <ItemCard src={book4} name='J.R.R. Tolkien' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}