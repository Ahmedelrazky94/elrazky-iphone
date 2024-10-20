import { HeroVideoSec, SmallHeroVideoSec } from "../assets/videos";
import { useRef, useEffect, useState } from 'react';
 
export const Hero = () => {
    const [HeroVideo, changeHeroVideo] = useState(HeroVideoSec)
    const divRef = useRef(null);
    //change the video logic
    const changeVideo = () => {
        const width = divRef.current.getBoundingClientRect().width;
        if (width < 700) {
            changeHeroVideo(SmallHeroVideoSec);
            console.log("small")
        }
        else {
            changeHeroVideo(HeroVideoSec);
            console.log("big")
        }

    }
    useEffect(() => {
        changeVideo();
        window.addEventListener('resize', changeVideo); //event listner to change the video when resizing
        

    }, []);
    return (
        <section ref={divRef} className="w-full">
            <video key={HeroVideo} autoPlay muted width="100%" className="w-full h-full">
                {/* added key to force react to re render the video component wen state changed */}
                <source src={HeroVideo} />
            </video>
        </section>    )
}