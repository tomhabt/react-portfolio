import React from 'react';
import poster from '../../assets/profilePic/0.jpeg';

export default function Avatar() {
  
  return (
      <div> 
          <section className="bg-section">
            <marquee className='bg-animation-title'>My Background</marquee>
          <div className='marquee-my-background'>
            
              <p>
                    Back in 2008, I  studied Civil Engineering  and then worked on a number of 
                    Highway designs and construction works. Up until 2015, I have participated in 
                    design of multi-span structral bridges and also worked on a construction of  
                    Asphalt pavements in different projects in Eastern-Africa. 
              </p>
              <p>
                    Moving into another part of the world in 2016, i.e. Canada, gave me a great opportunity to 
                    join an era of working around Information technologies and  data servers, which lead 
                    me to, work on IT related works specially in web services using different Content managment softwares. 
              </p>
              <p>
                    I am now a multi-professional with great full-stack Web developer skills.  My current position is an IT support Engineer, website administrator and Social works Secretary 
                    in a diplomatic mission located in Ottawa. I've a passion for computer sciences, 
                    information technologies and on different technical aspects of modern technology.
              </p>
              <p>
                    Well being said, I  have a self-confidence and can interact with my co-workers as 
                    I had so many great opportunities in the past to work with teams in technical, 
                    managerial and diplomatic levels. 
              </p>
          </div>
        </section>
        
        <section className='hero'>
            
            <img src={poster} alt='Avatar' className='avatar' />
            {/* <p className='crediential-animation-title'>Full-Stack Web Developer</p> */}
        </section>
        <section className="qoute-section">
            <p className='qoute-animation-title'> Web Developer</p>
        </section>  
      </div> 
  );
};
