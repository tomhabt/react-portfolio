import React, { useEffect }  from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'


export default function Nav (props) {
  const {  
      menus= [],
      setCurrentMenu,
      currentMenu,
    } = props;

    useEffect(() => {document.title =capitalizeFirstLetter(currentMenu.name)
                    },[currentMenu]);
  return (
      <div> 
          <header>
              <h1>
                  <a href="http://tomhabt.github.io/react-portfolio" className='name'>
                      <span className='initials'> T</span>homas <span className='initials'>H</span>abtemariam, Eng.
                  </a>
              </h1>
              <nav>
                  <ul >
                    {menus.map((menu) => (
                    <li className={ `${currentMenu.name ===menu.name && 'navActive'}`} key={menu.name}> 
                      <span  onClick={() => { 
                      setCurrentMenu(menu);
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