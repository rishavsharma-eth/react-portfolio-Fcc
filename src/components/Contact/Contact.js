import "./Contact.scss";
import React, { useState } from 'react'
import { AnimatedLetters } from "../AnimatedLetters";
import { useEffect } from "react";

export function Contact(){

  const alphabetArray = ["C","o","n","t","a","c","t"," ","M","e"];
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(()=>{
    setTimeout(() =>{
      setLetterClass("text-animate-hover")
    }, 3000)
  },[])
  return (
    <div className="container contact">
      <div className="contactInner">
        <div className="left">
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={alphabetArray} 
            idx={15}
          />
        </div>
        <div className="right">
            
        </div>
      </div>
    </div>
  )
}