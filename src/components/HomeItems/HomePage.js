import React from 'react';
import profilePicture from '../../assets/profilePic/0.jpeg';
import backgroundImage from '../../assets/background/Bg.png';

export default function HomePage() {
  return (
      <div> 
        <section className="marquee-section">
            <marquee className='marquee-title'>
                Brand Statement
            </marquee>
            <div className='marquee-para'>
                <a href={backgroundImage}> 
                    <p>
                        I have a passion and interest in Full Stack Web Development applications as recently certified with web development program from Carleton University. With this, 
                        I have grabbed skills on different technologies for the modern web applications like React.js, HTML5 and CSS for front-end in a mobile-first principle and the 
                        vital Node.js and Express.js for the Back-end development. My skill on RESTful API has also been accompanied with SQL and NoSQL DB systems. 
                        By doing several projects, I have valued the essentiality of UI enhancement, reliable server establishment and formation of a well-structured database system.
                        My academic final project was a MERN stack application that could potentially assist farmers to own a stall and sell their produce and buy goods as a customer online.
                        For more, I have Completed training on Amazon Web Services, AWS Cloud Services and that is also something that can add up on my skill in cloud computing technologies.
                        
                    </p>
                    <p>
                        Now, I am engaged with discovering more skills on Python Programming language, scheduled to execute final project due in two weeks and I am completely so much excited 
                        to practice my skills into the world as well as get more experience in return in the web application process. That being said, In my past expriance, I have been able to aquire
                        key soft skills in effective interpersonal; Problem solving; Teamwork; Excellent verbal and written communication; Client focus; Organized and fast 
                        learner for new or updated technologies, with proven Clean Criminal Record.
                    </p>
                </a>
            </div>
        </section>
        <section className='hero'>
            <img src={profilePicture} className='avatar-img' alt='Avatar' />
        </section>
        <section className="qoute-section">
            <p className='qoute-animation-title'> Full Stack Web Developer</p>
        </section>  
      </div> 
  );
};
