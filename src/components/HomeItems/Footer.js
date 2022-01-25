import React from 'react';

export default function Footer() {
  const contacts = [
    {name:'LinkedIn', reference:'https://www.linkedin.com/in/thomas-habtemariam-5b5a6832/'},
    {name:'GitHub', reference:'https://github.com/tomhabt/'},
    {name:'Stack Overflow', reference:'https://stackoverflow.com/'},
  ];
  return (
    <footer>
       <section className="footer">
       <a href={contacts[0].reference} className='fa fa-linkedin' alt={contacts[0].name}></a>
       <a href={contacts[1].reference}  className='fa fa-github' alt={contacts[1].name}></a>
       <a href={contacts[2].reference}  className='fa fa-stack-overflow' alt={contacts[2].name}></a>
      </section>
    </footer>
  );
};
