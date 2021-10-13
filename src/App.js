import React, {useState} from 'react';
import Nav from './components/NavItems/Nav';
import Avatar from './components/HomeItems/Avatar';
import About from './components/HomeItems/About';
import ProjectGallery from './components/HomeItems/ProjectGallery';
import Footer from './components/HomeItems/Footer';
import ContactForm from './components/HomeItems/ContactForm';
import Resume from './components/HomeItems/Resume';

function App() {
  const [menus] = useState([
    {name:'Home', reference:'http://tomhabt.github.io/react-portfolio'},
    {name:'About Me', reference:'#about'},
    {name:'Portfolio', reference:'#portfolio'},
    {name:'Contact Me', reference:'#contact-form'},
    {name:'Resume', reference:'#resume'}
  ]
  );
  const [currentMenu, setCurrentMenu] = useState(menus[0]);
  const renderPage = ()=> {
    switch (currentMenu.name) {
      case (menus[1].name):
        return <About />
      case (menus[2].name):
        return <ProjectGallery />
      case (menus[3].name):
        return <ContactForm />
      case (menus[4].name):
        return <Resume />
        default:
          return <Avatar/>
    }
  }
  return (
    <div >
      <Nav
      menus={menus}
      setCurrentMenu={setCurrentMenu}
      currentMenu={currentMenu}
      ></Nav>
      <main>
      {renderPage(currentMenu.name)}
      </main>
        <Footer />
    </div>
  );
}

export default App;
