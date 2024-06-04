import book1 from '@/public/book-1.jpg'
import book2 from '@/public/book-2.jpg'
import book3 from '@/public/book-3.jpg'
import Image from 'next/image'

export default function(){
    return(
        <section className="px-4">
            <div className="grid grid-flow-row grid-row-2">
                <div className="card image-full before:hidden w-96 h-96 bg-base-300">
                    <figure>
                    <Image src={book1} alt='book'/>
                    </figure>
                </div>
                <div className="p-4">
                    <h1 className="text-xl text-center pb-4">Lorem ipsum dolor sit amet.</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ex optio eveniet nesciunt dicta doloremque. Officiis nisi ex officia fugit?</p>
                </div>
            </div>
            <div className="grid grid-flow-row grid-row-2">
                <div className="card image-full before:hidden w-96 h-96 bg-base-300">
                    <figure>
                    <Image src={book2} alt='book'/>
                    </figure>
                </div>
                <div className="p-4">
                    <h1 className="text-xl text-center pb-4">Lorem ipsum dolor sit amet.</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ex optio eveniet nesciunt dicta doloremque. Officiis nisi ex officia fugit?</p>
                </div>
            </div>
            <div className="grid grid-flow-row grid-row-2">
                <div className="card image-full before:hidden w-96 h-96 bg-base-300">
                    <figure>
                    <Image src={book3} alt='book'/>
                    </figure>
                </div>
                <div className="p-4">
                    <h1 className="text-xl text-center pb-4">Lorem ipsum dolor sit amet.</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ex optio eveniet nesciunt dicta doloremque. Officiis nisi ex officia fugit?</p>
                </div>
            </div>
        </section>
    )
}