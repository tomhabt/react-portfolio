import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

export default function ContactForm () {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Invalid email')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            } 
          }  
          if (!errorMessage) {
            setFormState({...formState, [e.target.name]:e.target.value})
          }
        };
    console.log(formState);
    console.log('error', errorMessage);

    function handleSubmit(e) {
        e.preventDefault()
        // fetch API back end work will be iserted ...
        // here by the back end developed later
        console.log(formState)
    }
    return (
    <section id="section">
         <div className="contact left">
        <h1 >Contact Me</h1>
        </div>
        <div className="contact right">
        <form id='contact-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text"   name="name" defaultValue={name} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message"   rows="5" defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage &&
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>}
            <button type="submit">Submit</button>  
        </form>
        </div>
    </section>
  )
}
