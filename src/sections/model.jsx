import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { IPhoneModel } from '../models';
import { useState } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const Model = () => {

  const [modelSize, setModelSize] = useState(20);
  const [iPhoneColor, setiPhoneColor] = useState(["#F9D7BC", 30]);
  return (
    <section id="model-sec" className='w-full overflow-x-hidden bg-[#010101]'>
      <Canvas
        camera={{ position: [0, 0, 12.25], fov: 25 }}
        style={{ backgroundColor: '#010101', width: '100vw', height: '80vh' }}
      >
        {/* Ambient light */}
        <ambientLight intensity={iPhoneColor[1]} color={iPhoneColor[0]} />

        {/* Directional light */}
        <directionalLight position={0} intensity={0.4} />

        <IPhoneModel scale={modelSize} position={[0, 0, 0]} />

        {/* Camera controls to disable zoom in when scroll on screen */}
        <OrbitControls enableZoom={false} rotateSpeed={0.2} />
      </Canvas>
      <div className='flex justify-center gap-x-4 py-4 max-md:flex-col max-md:gap-y-8'>
        <div className='flex justify-center gap-4 p-2 bg-[#252525] w-auto rounded-full max-md:w-2/3 max-md:m-auto'>
          <button className='bg-white opacity-90 hover:opacity-100 rounded-full h-10 w-10  px-5 py-2 ' onClick={() => { setiPhoneColor(["white", 80]) }}></button>
          <button className='bg-yellow-100 opacity-90 hover:opacity-100 rounded-full h-10 w-10  px-5 py-2 ' onClick={() => { setiPhoneColor(["#fef9c3", 40]) }}></button>
          <button className='bg-orange-200 opacity-90 hover:opacity-100 rounded-full h-10 w-10  px-5 py-2 ' onClick={() => { setiPhoneColor(["#fed7aa", 60]) }}></button>
          <button className='bg-[#F9D7BC] opacity-90 hover:opacity-100 rounded-full h-10 w-10  px-5 py-2 ' onClick={() => { setiPhoneColor(["#F9D7BC", 40]) }}></button>
          <button className='bg-slate-400 opacity-90 hover:opacity-100 rounded-full h-10 w-10  px-5 py-2 ' onClick={() => { setiPhoneColor(["#94a3b8", 70]) }}></button>

        </div>
        <div className='flex justify-center gap-4'>
          <button className='bg-[#303030] text-gray-300 font-semibold rounded-full px-5 py-2 hover:bg-[#444] hover:text-white' onClick={() => { setModelSize(20) }}>iPhone 15 Pro</button>
          <button className='bg-[#303030] text-gray-300 font-semibold rounded-full px-5 py-2 hover:bg-[#444] hover:text-white' onClick={() => { setModelSize(25) }}>iPhone 15 Pro Max</button>
        </div>
      </div>
    </section>
  )
}
