import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { IphoneModel } from '../models';
import { useState } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

export const Model = () => {
  useGSAP(
    () => {
        gsap.from('.fadeup', {opacity: 0, duration: 2, y: 50 }); 
        gsap.from('.fade', {y:30, duration: 5}); 
    },
);
  const [modelSize,setModelSize] = useState(20);
  const [IphoneColor,setIphoneColor] = useState(["#F9D7BC",30]);
  return (
    <section className='w-full overflow-x-hidden bg-[#010101]'>
      <Canvas
        camera={{ position: [0, 0, 12.25], fov: 25 }} // Adjust x,y,z position of the model
        style={{ backgroundColor: '#010101', width: '100vw', height: '80vh' }}
      >
        {/* Ambient light */}
        <ambientLight intensity={IphoneColor[1]} color={IphoneColor[0]} />

        {/* Directional light */}
        <directionalLight position={0} intensity={0.4} />

          <IphoneModel  scale={modelSize} position={[0.025, 0, 0]} />

        {/* Camera controls to disable zoom in when scroll on screen */}
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className='flex justify-center gap-4 pb-8'>
        <button className='bg-white rounded-full h-10 w-10  px-5 py-2 fade' onClick={()=>{setIphoneColor(["white",40])}}></button>
        <button className='bg-orange-200 rounded-full h-10 w-10  px-5 py-2 fade' onClick={()=>{setIphoneColor(["#fed7aa",30])}}></button>
        <button className='bg-yellow-100 rounded-full h-10 w-10  px-5 py-2 fade' onClick={()=>{setIphoneColor(["#fef9c3",40])}}></button>
        <button className='bg-[#F9D7BC] rounded-full h-10 w-10  px-5 py-2 fade' onClick={()=>{setIphoneColor(["#F9D7BC",40])}}></button>
        <button className='bg-slate-400 rounded-full h-10 w-10  px-5 py-2 fade' onClick={()=>{setIphoneColor(["#94a3b8",100])}}></button>

      </div>
      <div className='flex justify-center gap-4'>
        <button className='bg-gray-100 text-black rounded-full px-5 py-2' onClick={()=>{setModelSize(20)}}>Iphone 15</button>
        <button className='bg-white text-black rounded-full px-5 py-2' onClick={()=>{setModelSize(25)}}>Iphone 15 PRO MAX</button>
      </div>
    </section>
  )
}
