import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Image from "next/image";
import hero1 from '@/public/1-hero.jpg'
import hero2 from '@/public/2-hero.jpg'
import hero3 from '@/public/3-hero.jpg'
import hero4 from '@/public/4-hero.jpg'
export default function Hero(){
    return(
        // one element
        <div className="hero bg-red-400 w-screen" style={{height:'95vh'}}>
                <div className=" grid grow w-screen h-full relative">
                    {/* img */}
                        <Image alt="" fill src={hero1} style={{objectFit:'cover'}} className="relative"/>
                    <div className="relative flex flex-row grid-rows-3 items-center gap-12">
                        <div className="">
                            <a className="text-5xl text-base-content btn btn-circle justify-center align-middle content-center">
                                <MdNavigateBefore/>
                            </a>
                        </div>
                        <div className="grow flex flex-col text-secondary-content text-center">
                            <h1 className="text-4xl font-bold my-2">Lorem</h1>
                            <span className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam quia animi voluptatibus, facilis ex?</span>
                            <button className="btn my-2" >Call to Action</button>
                        </div>
                        <div className="text-5xl text-base-content btn btn-circle justify-center align-middle content-center">
                            <MdNavigateNext/>
                        </div>
                    </div>
                </div>
        </div>
    )
}