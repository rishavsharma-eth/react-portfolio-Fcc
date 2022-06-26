import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { AnimatedLetters } from '../AnimatedLetters';
import RenderPortfolio from '../RenderPortfolio/RenderPortfolio';
import portfolioData from "./../../data/portfolio.json"
import "./portfolio.scss";

const Portfolio = () => {

  const[letterClass, setLetterClass] = useState("text-animate");

  useEffect( () => {
    const timer = setTimeout(()=>{
      setLetterClass("text-animate-hover");
    },2500 ) 
    return() => {
      clearTimeout(timer);
    }
  },[])



  return (
    <>
      <div className='container portfolio-page'>
        <h1 className='portfolioTitle'>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={"Portfolio".split("")} 
            idx={15} />
        </h1>
        <div className='imagesOut'> {RenderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio;