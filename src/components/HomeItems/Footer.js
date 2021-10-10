
import React from 'react';
import image1 from '../../assets/icons/linkedin.png'
import image2 from '../../assets/icons/github.png'

export default function Footer() {
  const contacts = [
    {name:'LinkedIn', data:'LinkedIn', reference:'https://www.linkedin.com/in/thomas-habtemariam-eng-5b5a6832/'},
    {name:'GitHub', data:'GitHub', reference:'https://github.com/tomhabt'},
  ];
  return (
    <div>
       <section className="footer">
        
       <a href="#" className="fa fa-linkedin"></a>
       <a href="#" className="fa fa-github"></a>
       
      </section>
    </div>
  );
};
