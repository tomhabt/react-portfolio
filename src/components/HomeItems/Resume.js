import React from 'react'

export default function Resume() {
  return (
    <section id="section">
    <div className="contact left">
   <h1 >Resume</h1>
   </div>
    <div id='resume'>
        <div className="about right">
            <p id='resume-para'><a href='http://tomhabt.github.io/react-portfolio'>Download My resume here</a></p>
                <h2>Front End Potentials</h2>
                <div className='about-list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </div>
                <h2>Back End Potentials</h2>
                <div className='about-list'>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequlize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </div>
            </div>
    </div>
    </section>
  )
}
