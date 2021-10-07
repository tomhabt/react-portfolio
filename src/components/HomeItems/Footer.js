
import React from 'react';

export default function Footer() {
  const contacts = [
    {name:'cellNo', data:'+1 (613)600-8669', reference:'callto:+16136008669'},
    {name:'LinkedIn', data:'LinkedIn', reference:'https://www.linkedin.com/in/thomas-habtemariam-eng-5b5a6832/'},
    {name:'GitHub', data:'GitHub', reference:'https://github.com/tomhabt'},
    {name:'Twitter', data:'Twitter', reference:'https://twitter.com/@ThomasHabtemar2'}
  ];
  return (
    <footer>
       <section id="about-me">
            <div className="footer left">
          <h1>Contact Me</h1>
        </div>
        <div className="footer right">
            <nav>
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.name} > 
                    <a href={contact.reference}  className="footer-nav">{contact.data}</a>
                  </li>
                ))}
              </ul>
            </nav>
        </div>
      </section>
    </footer>
  );
};
