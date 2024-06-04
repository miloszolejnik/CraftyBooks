'use client'

import ItemCard from "./ItemCard";
import UseEmblaCarousel from "embla-carousel-react";

import book1 from '@/public/book-1.jpg'
import book2 from '@/public/book-2.jpg'
import book3 from '@/public/book-3.jpg'
import book4 from '@/public/book-4.jpg'

export default function Explore(){
    const [emblaRef] = UseEmblaCarousel({loop: true})

    const styledEmablaSlide ="embla__slide max-w-screen justify-center align-middle flex"

    return(
        <section className="flex flex-col text-center">
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container w-screen">
                        <div className={styledEmablaSlide}>
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
        </section>
    )
}