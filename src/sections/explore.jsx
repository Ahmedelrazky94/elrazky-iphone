import ExploreVideo  from "../assets/videos/explore.mp4"
import Explore1 from '../assets/images/explore1.jpg'
import Explore2 from '../assets/images/explore2.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

export const Explore = () => {
    useGSAP(
        () => {
            gsap.to('.fade', {
                opacity: 1,
                duration: 5,
                scrollTrigger: {
                  trigger: '#explore-sec',
                  start: 'top bottom',
                  end:'bottom 50%',
                  scrub: true,
                }
              });


          gsap.from('.image', {
            opacity: 0.7,
            duration: 3,
            scale:1.3,
            scrollTrigger: {
              trigger: '#explore-sec',
              start: 'top 75%',
              stop: 'bottom 20%',
              scrub: true,
            }
          });
        },
      );

return(
    <section id="explore-sec" className="py-20">
        <div className="w-2/3 m-auto">
        <h2 className="text-gray-400 max-md:text-4xl text-6xl font-semibold  m-auto text-left">Explore the full story.</h2> 
        <h2 className="text-white text-6xl max-md:text-4xl font-semibold py-6 m-auto text-left mt-10">iPhone.<br /> forged in titanium.</h2> 
        </div>
        <div>
            <video autoPlay loop playsInline muted className="w-2/3 m-auto">
                <source width="80%" src={ExploreVideo}  />
            </video>
            <div className="w-2/3 flex m-auto gap-x-5 py-5 max-md:flex-col">
                <img src={Explore1} className="w-1/2 max-md:w-full image overflow-hidden" />
                <img src={Explore2} className="w-1/2 max-md:w-full image overflow-hidden" />
            </div>
        </div>
        <div className="flex justify-center w-2/3 m-auto max-md:flex-col">
            <h3 className="text-gray-300 text-2xl w-1/2 max-md:w-full font-normal text-left px-2 py-8 fade">iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.</h3>
            <h3 className="text-gray-300 text-2xl w-1/2 max-md:w-full font-normal text-left px-2 py-8 fade">Titanium has one of the best strength‑to‑weight ratios of any metal, making these our lightest Pro models ever . You’ll notice the difference the moment you pick one up.</h3>

        </div>

    </section>
)
}