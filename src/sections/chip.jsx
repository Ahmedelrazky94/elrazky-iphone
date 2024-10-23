import ChipIimg from '../assets/images/chip.jpeg'
import IphoneFrame from '../assets/images/frame.png'
import FrameVideo from '../assets/videos/frame.mp4'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
export const Chip = () => {
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
            duration: 5,
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
    <section className='bg-black py-10'>
        <div className='flex items-center justify-center '>
        <img src={ChipIimg} width={200} className='image' />
        </div>
        <div className='max-md:w-4/5 m-auto text-center'>
        <h2 className='text-6xl max-md:text-5xl font-semibold text-center py-8 leading-[80px] text-white'>
            A18 Pro Chip<br />A Monster Win For Gaming
        </h2>
        <p className='text-gray-300 text-2xl font-bold text-center'>
            It's here, The biggest redesign in the history of Apple GPU 
        </p>
        </div>

        <div className='w-2/3 max-md:w-full m-auto py-6 flex-col justify-center items-center h-[60vh] max-md:h-[40vh]'>
            <img src={IphoneFrame} className='w-[82vw] relative z-40 ml-10 max-md:ml-12 max-sm:w-[90vw] max-sm:ml-4' />
            <video autoPlay inline muted loop className='rounded-[50px] relative top-[-58vh] ml-10 w-[81vw] h-[55vh] max-md:h-[40vh] max-md:top-[-40vh] max-md:w-[78vw] max-md:ml-16 max-sm:w-[86vw] max-sm:ml-6 max-sm:top-[-31.5vh] max-sm:rounded-[10px]' >
                <source src={FrameVideo} />
            </video>
        </div>
        <div >
        <p className='text-gray-600 text-xl font-normal text-center'>
            Honaki: Star rail</p>
        </div>
        <div className="flex w-3/5 m-auto max-md:flex-col items-center max-md:w-4/5">
            <h3 className="text-gray-300 text-2xl w-1/2 max-md:w-full font-normal text-left px-2 py-8 fade">A17 Pro is an entirely new class of iPhone chip that delivers our games will look and feel so immersive <br/> <span className='text-white'>with incredibly detailed environments and more realistic characters.</span> And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.</h3>
            <h3 className="text-gray-300 text-2xl w-1/2 max-md:w-full font-normal text-center px-2 py-8 fade">new<br/><span className='text-5xl text-white'>Pro Class Gpu</span><br/>with 6 Core</h3>

        </div>

    </section>
)
}