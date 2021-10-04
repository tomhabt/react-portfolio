import React from 'react';

export default function Navigator() {
  const menus = [
    {name:'Home', reference:'/'},
    {name:'About Me', reference:'#about'},
    {name:'Portfolio', reference:'#portfolio'},
    {name:'Contact Me', reference:'#contact'},
    {name:'Resume', reference:'/'},
  ];
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
                    <li> 
                      <a data-testid="about" href={menu.reference}>{menu.name}</a>
                    </li>
                    ))}
                  </ul>
              </nav>
            </header>
        </div> 
  );
};