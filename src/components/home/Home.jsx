import './home.scss';
import React from 'react';
import ParticleBackground from '../particles/Particles';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

function Home() {
    const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      disableBackTyping: true,
      cursorChar: '|',
      strings: ['Web Developer.' ] 
    })
  }, []);
  return (
    <div className='home' id='home'>
        <ParticleBackground />
        <div className='container'>
            <div className='top'>
                <h2>Hello I am Kyle Ruban.</h2>
            </div>
            <div className='mid'>
                <h2>Full-Stack <span ref={textRef}></span></h2>
            </div>
            <div className='bottom'>
                <button><a href='#about'>View My Work <img src='pictures/arrow_right.png' alt='' /></a></button>
            </div>
        </div>
    </div>
  )
}

export default Home;