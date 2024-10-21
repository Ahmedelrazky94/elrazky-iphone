import right from "../assets/images/right.svg"
import watch from '../assets/images/watch.svg'
import { HighlightFirst, HighlightSecond, HighlightThird, HighlightFourth } from '../assets/videos'
import { useEffect } from "react"
import gsap from 'gsap'
export const Highlight = () => {
    useEffect(()=>{
        const tl = gsap.timeline({ repeat: 5 });

        tl.to(".highlightvideo", { x: "0%", duration: 2 })
            .to(".highlightvideo", { duration: 0, delay: 4 })
            .to(".highlightvideo", { x: "-100%", duration: 1 })
            .to(".highlightvideo", { duration: 0, delay: 2 })
            .to(".highlightvideo", { x: "-200%", duration: 1 })
            .to(".highlightvideo", {  duration: 0, delay: 4 })
            .to(".highlightvideo", { x: "-300%", duration: 1 })
            .to(".highlightvideo", { duration: 0, delay: 5 });
    }) //to ensure that animation start correctly because I have some problem in animation before
  

    const highlights = [HighlightFirst, HighlightSecond, HighlightThird, HighlightFourth];
    return (
        <section className="bg-[#101010] py-8">
            <div className="flex justify-around w-full max-md:flex-col max-md:gap-y-3 max-md:px-5">
                <h2 className="text-4xl text-gray-300">Get the Highlights</h2>
                <div className="flex max-md:gap-y-2 max-md:flex-col">
                    <div className="flex gap-x-2 w-[200px]">
                        <button className="text-blue-500 text-2xl hover:underline hover:underline-offset-4">
                            Watch the film
                        </button>
                        <img src={right} width={12} />
                    </div>
                    <div className="flex gap-x-2 w-[250px]">
                        <button className="text-blue-500 text-2xl hover:underline hover:underline-offset-4">
                            Watch the event
                        </button>
                        <img src={watch} width={20} />
                    </div>
                </div>
            </div>
            <div className="flex py-5 w-[400%] bg-[#101010]">
                {highlights.map((video) => (
                    <div className="highlightvideo rounded-full w-full "><video autoPlay loop playsInline muted className="w-4/5 ml-[10%] mr-[10%]"><source width="80%" className="w-full h-full py-5" src={video} /> </video>
                    </div>
                ))}
            </div>
        </section>
    )
}