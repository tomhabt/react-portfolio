import React from 'react';
import project_1 from '../../assets/projects/0.png';
import project_2 from '../../assets/projects/1.png';
import project_3 from '../../assets/projects/2.jpeg';
import project_4 from '../../assets/projects/3.png';
import project_5 from '../../assets/projects/6.png';
import project_6 from '../../assets/projects/7.png';
import project_7 from '../../assets/projects/4.png';
import project_8 from '../../assets/projects/5.png';


export default function ProjectGallery() {
  const currentProjects = [{
    project:1,
    skill_name:'Back-End',
    project_title:'DiscoverUp',
    liveDemo:'https://tylerladas.github.io/DiscoverUp/',
    repository:'https://github.com/tomhabt/DiscoverUp-.git',
  },
  {
    project:2,
    skill_name:'Back-End',
    project_title:'FurFoodz',
    liveDemo:'https://furfoodz.herokuapp.com/dashboard/',
    repository:'https://github.com/tomhabt/FurFoodz.git',
  },
  {
    project:3,
    skill_name:'HTML-CSS',
    project_title:'Run Buddy',
    liveDemo:' https://tomhabt.github.io/run-buddy/',
    repository:'https://github.com/tomhabt/run-buddy.git',
  },
  {
    project:4,
    skill_name:'Full-Stack',
    project_title:'FMarket',
    liveDemo:'https://vast-fjord-71803.herokuapp.com/',
    repository:'https://github.com/tomhabt/FMarket-VFM.git',
  },
  {
    project:5,
    skill_name:'MySQL & RESTful API',
    project_title:'Tech Blog',
    liveDemo:'https://the-tech-blog-web.herokuapp.com/',
    repository:'https://github.com/tomhabt/The-Tech-Blog.git',
  },
  {
    project:6,
    skill_name:'Node & Express JS',
    project_title:'Note Taker',
    liveDemo:'https://note-taker-njs-pro.herokuapp.com/',
    repository:'https://github.com/tomhabt/Note-Taking-webApp.git',
  },
  {
    project:7,
    skill_name:'MERN',
    project_title:'Deep thoughts',
    liveDemo:'https://deep-thoughts-pro.herokuapp.com/',
    repository:'https://github.com/tomhabt/deep-thoughts.git',
  },
  {
    project:8,
    skill_name:'MERN',
    project_title:'shop-shop',
    liveDemo:'https://tom-shop-shop.herokuapp.com/',
    repository:'https://github.com/tomhabt/e-commerce-MERN.git',
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
                        <a href={currentProjects[0].liveDemo} className="project">{currentProjects[0].project_title}</a>
                          <a href={currentProjects[0].repository} className='fa fa-github' ></a>
                          <div className="text">{currentProjects[0].skill_name}</div>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_2} alt='portfolio' />
                        <div className="middle">
                        <a href={currentProjects[1].liveDemo} className="project">{currentProjects[1].project_title}</a>
                          <a href={currentProjects[1].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[1].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_3} alt='portfolio' />
                        <div className="middle">
                        <a href={currentProjects[2].liveDemo} className="project">{currentProjects[2].project_title}</a>
                          <a href={currentProjects[2].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[2].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_4} alt='portfolio' />
                        <div className="middle">
                        <a href={currentProjects[3].liveDemo} className="project">{currentProjects[3].project_title}</a>
                          <a href={currentProjects[3].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[3].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_5} alt='portfolio' />
                        <div className="middle">
                        <a href={currentProjects[4].liveDemo} className="project">{currentProjects[4].project_title}</a>
                          <a href={currentProjects[4].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[4].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_6} alt='portfolio' />
                        <div className="middle">
                        <a href={currentProjects[5].liveDemo} className="project">{currentProjects[5].project_title}</a>
                          <a href={currentProjects[5].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[5].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_7} alt='portfolio' />
                        <div className="middle">
                        <a href={currentProjects[6].liveDemo} className="project">{currentProjects[6].project_title}</a>
                          <a href={currentProjects[6].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[6].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_8} alt='portfolio' />
                        <div className="middle">
                        <a href={currentProjects[7].liveDemo} className="project">{currentProjects[7].project_title}</a>
                          <a href={currentProjects[7].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[7].skill_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
