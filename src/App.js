import React, {useState} from 'react';
import Nav from './components/NavItems/Nav';
import HomePage from './components/HomeItems/HomePage';
import About from './components/HomeItems/About';
import ProjectGallery from './components/HomeItems/ProjectGallery';
import Footer from './components/HomeItems/Footer';
import ContactForm from './components/HomeItems/ContactForm';
import Resume from './components/HomeItems/Resume';

function App() {
  const [menus] = useState([
    {name:'Home', reference:'http://tomhabt.github.io/react-portfolio'},
    {name:'About me', reference:'#about'},
    {name:'Projects', reference:'#portfolio'},
    {name:'Contact me', reference:'#contact-form'},
    {name:'Get my Resume', reference:'https://drive.google.com/file/d/18thZzmFuO0uLpdhjYcRBHmidFmYMSkEX/view?usp=sharing'}
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
        default:
          return <HomePage/>
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
