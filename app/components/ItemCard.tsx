import Image from "next/image";
import { CarousellItemType } from "../types/CarousellItemType";

export default function ItemCard({name, src}: CarousellItemType){
    return(
        <div className="card w-96 bg-base-100 shadow-xl image-full flex">
                    <figure>
                        <Image src={src} alt="CarouselItem" />
                    </figure>
                    <div className="card-body justify-between">
                        <h2 className="card-title text-2xl self-center">
                            {name}
                        </h2>
                        <button className="btn btn-primary">
                            Check It Out
                        </button>
                    </div>
                </div>
    )
}