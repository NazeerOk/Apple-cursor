import React, { useEffect, useState } from 'react'
import intro from '../assets/Intro.mp4'
import appleWatch from '../assets/series6.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Cursor from "./Cursor";
import introGif from '../assets/intro.gif'


const AppleWatch = () => {
    
    const [active, setActive] = useState("");
    
    useEffect(()=>{
        Aos.init({ duration: 3000  })   
    })
    
    

    return (
        <>
        <Cursor animationName ={active}/>
        <section className='video-container'>
            <video poster={introGif} id='intro' src={intro} autoPlay></video>
        </section>
        
        <div  className="container">
            
            <img data-aos="fade-right"   id='applepic' src={appleWatch}/>
            <section data-aos="fade-left" id='features' >
            <h1  onMouseEnter={()=> setActive('retina')} onMouseLeave={()=> setActive("")}>Retina Display</h1>
            <h1 onMouseEnter={()=> setActive('memoji')} onMouseLeave={()=> setActive("")}>Memoji</h1>
            <h1 onMouseEnter={()=> setActive('ecg')} onMouseLeave={()=> setActive("")}>ECG</h1>
            <h1 onMouseEnter={()=> setActive('blood')} onMouseLeave={()=> setActive("")}>Blood Oxygen</h1>
            <h1 onMouseEnter={()=> setActive('frames')} onMouseLeave={()=> setActive("")}>Available Frames</h1>
            
            </section>
            
        </div>
        </>
    )
}

export default AppleWatch
