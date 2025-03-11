import React from 'react'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import "./Layout.css";
import Logo from "./assets/logo-27.png";



function Layout({children}) {
    const [ init, setInit ] = useState(false);
    console.log(init,"init");
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          
            await loadSlim(engine);
          
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
  return (
    <div className="layout">
  
    <div className="background"></div>

 
    {init && <Particles id="tsparticles"
      particlesLoaded={particlesLoaded}
     options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.3 },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            move: {
                enable: true, speed: 3, direction: "none",
                outModes: { default: "bounce" },
            },
            number: { density: { enable: true, area: 800 }, value: 30 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 40, max: 60 } },
        },
        detectRetina: true,
    }} className="particles" />}

  
    <div className="content">
      <img src={Logo}/>
        {children}
    </div>
</div>
  )
}

export default Layout
