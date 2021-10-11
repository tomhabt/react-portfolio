import React, { useEffect }  from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'


export default function Nav (props) {
  const {  
      menus= [],
      setCurrentMenu,
      currentMenu,

      // homeSelected,
      // aboutSelected,
      // portfolioSelected,
      // contactSelected,
      // resumeSelected,

      // setHomeSelected,
      // setAboutSelected,
      // setPortfolioSelected,
      // setContactSelected,
      // setResumeSelected,
    } = props;

    useEffect(() => {document.title =capitalizeFirstLetter(currentMenu.name)
                    },[currentMenu]);

  // const tab = ['Home', 'About Me', 'Portfolio', 'Contact Me', 'Resume']
  
  // function handlePageChange (tab) {
  //       console.log('tomed')
  //       if (currentMenu.name === menus[1].name) {
  //         setAboutSelected(true);
  //       }
  //       if (currentMenu.name === menus[2].name) {
  //         console.log(currentMenu)
  //         setPortfolioSelected(true);
  //       }
  //       if (currentMenu.name === menus[3].name) {
  //         setContactSelected(true);
  //       }
  //       if (currentMenu.name === menus[4].name) {
  //         setResumeSelected(true);
  //       } else {
  //         setHomeSelected(true)
  //       }
  //   }

 
  return (
      <div> 
          <header>
              <h1>
                  <a href="/" className='name'>
                      <span className='initials'> T</span>homas <span className='initials'>H</span>abtemariam, Eng.
                  </a>
              </h1>
              
              <nav>
                  <ul >
                    {menus.map((menu) => (
                    <li className={ `${currentMenu.name ===menu.name && 'navActive'}`} key={menu.name}> 
                      {/* <a data-testid="about" href={menu.reference} key={menu.name}>{menu.name}</a> */}
                      <span  onClick={() => { 
                      setCurrentMenu(menu);
                      // handlePageChange()
                      // setContactSelected(true);
                      // setAboutSelected(true);
                      // setPortfolioSelected(true);
                      // setResumeSelected(true);

                    }}
                       
                       ><a href={menu.reference} key={menu.name}>{capitalizeFirstLetter(menu.name)}</a></span>
                    </li>
                    ))}
                  </ul>
              </nav>
            </header>
        </div> 
  )
};