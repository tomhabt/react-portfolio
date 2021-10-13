import React from 'react';
import project_1 from '../../assets/projects/0.jpeg';
import project_2 from '../../assets/projects/1.jpeg';
import project_3 from '../../assets/projects/2.jpeg';
import project_4 from '../../assets/projects/3.jpeg';
import project_5 from '../../assets/projects/6.png';
import project_6 from '../../assets/projects/7.png';
import project_7 from '../../assets/projects/4.jpeg';
import project_8 from '../../assets/projects/5.jpeg';


export default function ProjectGallery() {
  const currentProjects = [{
    project:1,
    skill_name:'WORDPRESS',
    project_title:'Church Website',
    repository:'www.stmaryeotc.org',
  },
  {
    project:2,
    skill_name:'JOOMLA CMS',
    project_title:'Embassy Website',
    repository:'www.bdhcottawa.ca',
  },
  {
    project:3,
    skill_name:'HTML CSS',
    project_title:'Run Buddy',
    repository:'https://github.com/tomhabt/run-buddy.git',
  },
  {
    project:4,
    skill_name:'SEO',
    project_title:'Horiseon-marketing',
    repository:'https://github.com/tomhabt/Horiseon-Marketing.git',
  },
  {
    project:5,
    skill_name:'MySQL and RESTful API',
    project_title:'The Tech Blog',
    repository:'https://github.com/tomhabt/The-Tech-Blog.git',
  },
  {
    project:6,
    skill_name:'Node & Express JS',
    project_title:'Note Taker',
    repository:'https://github.com/tomhabt/Note-Taking-webApp.git',
  },
  {
    project:7,
    skill_name:'Civil Engineering',
    project_title:'Addis-Adama Express Way',
    repository:'https://www.google.com/maps/place/Addis+-+Adama+Expy,+Ethiopia/@8.6839165,39.0697775,17z/data=!3m1!4b1!4m5!3m4!1s0x164b21eac17d48f3:0xdbdab7446a546a71!8m2!3d8.6839165!4d39.0719662',
  },
  {
    project:8,
    skill_name:'Bridge Design',
    project_title:'Hareto-Wayu Girder Bridge',
    repository:'https://github.com/tomhabt/just-tech-news.git',
  }
];
  return (
    <div>
      
      <section id="section">
            <div className="portfolio left">
                <h1 id='portfolio'>Portfolio</h1>
            </div>
            <div className="portfolio right">
                <div className="row"> 
                    <div className="column">
                        <img src={project_1} alt='portfolio' />
                        <div className="middle">
                          <div className="project">{currentProjects[0].project_title}</div>
                          <a href={currentProjects[0].repository} className='fa fa-github' ></a>
                          <div className="text">{currentProjects[0].skill_name}</div>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_2} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[1].project_title}</p>
                          <a href={currentProjects[1].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[1].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_3} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[2].project_title}</p>
                          <a href={currentProjects[2].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[2].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_4} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[3].project_title}</p>
                          <a href={currentProjects[3].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[3].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_5} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[4].project_title}</p>
                          <a href={currentProjects[4].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[4].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_6} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[5].project_title}</p>
                          <a href={currentProjects[5].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[5].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_7} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[6].project_title}</p>
                          <a href={currentProjects[6].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[6].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_8} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[7].project_title}</p>
                          <a href={currentProjects[7].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[7].skill_name}</p>
                        </div>
                    </div>





                    {/* <div className="column">
                    <img src={project_2}  alt='portfolio'/>
                    </div>
                    <div className="column">
                        <img src={project_3}  alt='portfolio'/>
                    </div>
                    <div className="column">
                    <img src={project_4}  alt='portfolio'/>
                    </div>
                    <div className="column">
                    <img src={project_5}  alt='portfolio'/>
                    </div>
                    <div className="column">
                    <img src={project_6}  alt='portfolio'/>
                    </div> */}
                </div>
            </div>
        </section>
    </div>
  )
}
