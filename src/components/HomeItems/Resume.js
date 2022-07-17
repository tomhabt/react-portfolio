import React from 'react'

export default function Resume() {
  return (
    <section id="section">
    <div className="contact left">
   <h1 >Resume</h1>
   </div>
    <div id='resume'>
        <div className="about right">
            <p id='resume-para'><a href='https://drive.google.com/file/d/1plxHHWaNZ7fGSFnc_S_umpPW7oIHJztD/view?usp=sharing'>Get My Resume here</a></p>
                <h2>Front End Potentials</h2>
                <div className='about-list'>
                    <li>React.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>Bootstrap</li>
                </div>
                <h2>Back End Potentials</h2>
                <div className='about-list'>
                    <li>APIs</li>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MySQL, Sequlize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>RESTful API Operation</li>
                    <li>GraphQL</li>
                </div>
            </div>
    </div>
    </section>
  )
}
