import "./index.scss";
import Loader from 'react-loaders';
import { useState, useEffect } from "react";
import { AnimatedLetters } from "../AnimatedLetters";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
      setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 3000);
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                    </h1>
                    <p>
                        I am interested in freelance and full time opportunities - especially in Web3. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea type="text" name="message" placeholder="Message" required/>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}