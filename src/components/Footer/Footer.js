
import React from 'react';

export default function Footer() {
  const contacts = [
    {name:'cellNo', data:'+1 (613)600-8669', reference:'callto:+16136008669'},
    {name:'email', data:'thomas.habtemariam@gmail.com', reference:'mailto:thomas.habtemariam@gmail.com'},
    {name:'LinkedIn', data:'LinkedIn', reference:'https://www.linkedin.com/in/thomas-habtemariam-eng-5b5a6832/'},
    {name:'GitHub', data:'GitHub', reference:'https://github.com/tomhabt'},
    {name:'Twitter', data:'Twitter', reference:'https://twitter.com/@ThomasHabtemar2'}
  ];
  return (
    <footer>
      <section id="contact-me">
        <div>
          <h1 class="section-title border-3">Contact Me</h1>
        </div>
        <div class="flex-container">
            <nav>
              <ul>
                {contacts.map((contact) => (
                  <li> 
                    <a href={contact.reference} class="nav">{contact.data}</a>
                  </li>
                ))}
              </ul>
            </nav>
        </div>
      </section>
    </footer>
  );
};
