import { HeroVideoSec, SmallHeroVideoSec } from "../assets/videos";
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
 
export const Hero = () => {
    useGSAP(
        () => {
            gsap.from('.fadeup', {duration: 2, y: 50,opacity: 1 }); 
            gsap.from('.fade', {opacity: 0, duration: 5}); 
        },
    );
    const [HeroVideo, changeHeroVideo] = useState(HeroVideoSec)
    const divRef = useRef(null);
    //change the video logic
    const changeVideo = () => {
        const width = divRef.current.getBoundingClientRect().width;
        if (width < 700) {
            changeHeroVideo(SmallHeroVideoSec);
        }
        else {
            changeHeroVideo(HeroVideoSec);
        }

    }
    useEffect(() => {
        changeVideo();
        window.addEventListener('resize', changeVideo); //event listner to change the video when resizing
        

    }, []);
    return (
        <section ref={divRef} className="w-full py-20">
            <div>
                <h2 className="text-stone-300 font-bold text-2xl text-center fade">iphone 15 PRO</h2>
            </div>
            <video key={HeroVideo} autoPlay muted width="100%" className="w-full h-full py-5">
                {/* added key to force react to re render the video component wen state changed */}
                <source src={HeroVideo} />
            </video>
            <div className="flex flex-col justify-center items-center gap-y-4">
            <button className="bg-blue-600 text-2xl px-5 py-2 text-white w-20 rounded-3xl hover:text-sky-600 hover:bg-white hover:border-s-sky-600 fade">Buy</button>
            <h2 className="text-white text-2xl text-center fade">From 199$/Month or 999$</h2>
            </div>
        </section>    )
}