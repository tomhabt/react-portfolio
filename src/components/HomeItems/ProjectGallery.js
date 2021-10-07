import React from 'react';
import project_1 from '../../assets/projects/0.jpeg';
import project_2 from '../../assets/projects/1.jpeg';
import project_3 from '../../assets/projects/2.jpeg';
import project_4 from '../../assets/projects/3.jpeg';
import project_5 from '../../assets/projects/4.jpeg';
import project_6 from '../../assets/projects/5.jpeg';


export default function ProjectGallery() {
  const currentProject = [{
    name:'MERN STACK',
    project_title:'church',
    repository:'www.stmaryeotc.org',
    icon:'',
    ScreenShots:'0'
  },
  {
    name:'MERN STACK',
    project_title:'work',
    repository:'www.bdhcottawa.ca',
    icon:'',
    ScreenShots:'1'
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
                        <img src={require(`../../assets/projects/${1}.jpeg`)} alt='portfolio Image' />
                    </div>



                    <div className="column">
                        <img src={project_1} alt='portfolio Image' />
                    </div>
                    <div className="column">
                    <img src={project_2}  alt='portfolio Image'/>
                    </div>
                    <div className="column">
                        <img src={project_3}  alt='portfolio Image'/>
                    </div>
                    <div className="column">
                    <img src={project_4}  alt='portfolio Image'/>
                    </div>
                    <div className="column">
                    <img src={project_5}  alt='portfolio Image'/>
                    </div>
                    <div className="column">
                    <img src={project_6}  alt='portfolio Image'/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
