import Image from "next/image";
import { CarousellItemType } from "../types/CarousellItemType";

export default function ItemCard({name, src}: CarousellItemType){
    return(
        <div className="card w-96 bg-base-100 shadow-xl image-full flex">
                    <figure>
                        <Image fill src={src} alt="CarouselItem" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title self-center">
                            {name}
                        </h2>
                        <button className="btn btn-primary">
                            Check It Out
                        </button>
                    </div>
                </div>
    )
}