import "./Contact.scss";
import React, { useState } from 'react'
import { AnimatedLetters } from "../AnimatedLetters";
import { useEffect, useRef } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

export function Contact(){

  const alphabetArray = ["C","o","n","t","a","c","t"," ","M","e"];
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(()=>{
    setTimeout(() =>{
      setLetterClass("text-animate-hover")
    }, 3000)
  },[])

  const sendEmail = (e) => {
        e.preventDefault()
        emailjs
          .sendForm('service_s99byv4','template_0lurl2c', refForm.current,'user_F72euZcMgyp5B8MGfnfm9' )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            (e) => {
              alert('Failed to send the message, please try again')
              console.log(e);
            }
          )
      }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone left">
          <h1>
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={alphabetArray} 
                idx={15}
              />
          </h1>
          <p>
            I am interested in freelance and full time opportunities - especially in Web3. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
            <form action="" onSubmit={sendEmail} ref={refForm}>
              <input className="half" type="text" placeholder="Name" name="user_name" required/>
              <input className="half" type="email" placeholder="Email" name="user_email" required />
              <input type="text" placeholder="Subject" required />
              <textarea name="message" id="" rows="4" placeholder="Message" required></textarea>
              <input type="submit" />
            </form>
        </div>

        <div className="right">
          <div className="right-info">
            Rishav Sharma, <br />
            New Delhi, India, <br />
            110007 <br /> <br />
            <span>rishavtosharma@gmail.com</span> 
          </div>
          <MapContainer center={[28.6139, 77.2090]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[28.6139, 77.2090]}>
              <Popup>
                Not the precise location to knock but mail me for <br /> a cup of coffee. 
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple"/>
    </>
  )
}