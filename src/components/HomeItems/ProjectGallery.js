import React from 'react';
import project_1 from '../../assets/projects/0.jpeg';
import project_2 from '../../assets/projects/1.jpeg';
import project_3 from '../../assets/projects/2.jpeg';
import project_4 from '../../assets/projects/3.jpeg';
import project_5 from '../../assets/projects/4.jpeg';
import project_6 from '../../assets/projects/5.jpeg';


export default function ProjectGallery() {
  const currentProjects = [{
    skill_name:'MERN STACK',
    project_title:'Book Store',
    repository:'www.stmaryeotc.org',
  },
  {
    skill_name:'HTML CSS',
    project_title:'Run Buddy',
    repository:'www.bdhcottawa.ca',
  }];
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
                          <p className="project">{currentProjects[1].project_title}</p>
                          <a href={currentProjects[1].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[1].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_4} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[1].project_title}</p>
                          <a href={currentProjects[1].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[1].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_5} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[1].project_title}</p>
                          <a href={currentProjects[1].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[1].skill_name}</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={project_6} alt='portfolio' />
                        <div className="middle">
                          <p className="project">{currentProjects[1].project_title}</p>
                          <a href={currentProjects[1].repository} className='fa fa-github' ></a>
                          <p className="text">{currentProjects[1].skill_name}</p>
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
