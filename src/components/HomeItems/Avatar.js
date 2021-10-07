import React from 'react';
import poster from '../../assets/profilePic/0.jpeg';

export default function Avatar() {
  
  return (
      <div> 
          <section className="crediential-section">
            <marquee className='crediential-animation-title'>Awards</marquee>
        </section>
        <section className='hero'>
        
            <p>Full-Stack Web Developer</p>
            
            <img src={poster} alt='Avatar' className='avatar' />
        </section>
        <section className="crediential-section">
            <marquee className='crediential-animation-title'>Background</marquee>
        </section>  
      </div> 
  );
};
