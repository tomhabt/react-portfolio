import React from 'react';

export default function About() {
  return (
    <header>
    <h2>
      <a href="/">
        <span> Thomas</span > Habtemariam
      </a>
    </h2>
    <nav>
      <ul >
        <li>
          <a data-testid="about" href="#about" >
            About me
          </a>
        </li> 
        <li data-testid="about" href="#portfolio">Portfolio</li>
        <li data-testid="about" href="#contact">Contact</li>
        <li data-testid="about" href="/">Resume</li> 
      </ul>
    </nav>
  </header>
  )
}
