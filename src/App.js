import React, {useState} from 'react';
import Nav from './components/NavItems/Nav';
import Avatar from './components/HomeItems/Avatar';
import About from './components/HomeItems/About';
import ProjectGallery from './components/HomeItems/ProjectGallery';
import Footer from './components/HomeItems/Footer';
import ContactForm from './components/HomeItems/ContactForm';

function App() {
  const [menus] = useState([
    {name:'Home', reference:'/'},
    {name:'About Me', reference:'#about'},
    {name:'Portfolio', reference:'#portfolio'},
    {name:'Contact Me', reference:'#contact-form'},
    {name:'Resume', reference:'/'}
  ]
  );
  const [currentMenu, setCurrentMenu] = useState(menus[0]);
  return (
    <div >
      <Nav
      menus={menus}
      setCurrentMenu={setCurrentMenu}
      currentMenu={currentMenu}
      ></Nav>
      <main>
        <Avatar />
        <About  />
        <ProjectGallery />
        <ContactForm  />
      </main>
      <Footer />
    </div>
  );
}

export default App;
