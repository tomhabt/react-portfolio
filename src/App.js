import React from 'react';
import Navigator from './components/NavItems/Navigator';
import Avatar from './components/HomeItems/Avatar';
import About from './components/HomeItems/About';
import ProjectGallery from './components/HomeItems/ProjectGallery';
import Footer from './components/HomeItems/Footer';
import ContactForm from './components/HomeItems/ContactForm';

function App() {
  return (
    <div >
      <Navigator />
      <Avatar />
      <About />
      <ProjectGallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
