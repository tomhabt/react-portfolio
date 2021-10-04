import React, {useState} from 'react';


export default function ContactForm () {

  return (
    <section id="section">
         <div className="contact left">
        <h1>Email Me</h1>
        </div>
        <div className="contact right">
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text"   name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email"  />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message"   rows="5" />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    </section>
  )
}