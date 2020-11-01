import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navigation/>
            <div>
                <h3 className='contact-header'>Leave me a message!</h3>
               <form action="" className='form-style'>
                   <input type="text" name="" id="" placeholder="Your name"/>
                   <br/>
                   <br/>
               <input type="email" placeholder="Your email address" required/>
                <br/>
                <br/>
                <textarea placeholder="Your message to me" required/>
                <br/>
                <br/>
                <input className='main-button' type="submit" value="Send"/>
               </form>
            </div>
        </div>
    );
};

export default Contact;