import Image from "next/image";
import galery from '@/public/galery.jpg'
export default function Galery(){
    return(
        <section>
            <div className="card image-full before:hidden rounded-none bg-base-200 w-screen h-36 content-center shadow-lg">
                <figure>
                    <Image src={galery} alt='galery-image' />
                </figure>
                <button className="btn w-fit text-xl px-12 bg-primary place-self-center text-neutral-content uppercase self-center">
                    <a href="">Galeria</a>
                </button>
            </div>
        </section>
    )
}