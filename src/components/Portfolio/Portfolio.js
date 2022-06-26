import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { AnimatedLetters } from '../AnimatedLetters';
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

  const renderPortfolio = (portfolio) => {
    return(
      <div className='images-container'>
          {
            portfolio.map((item, id)=>{
              return(
                <div className='imageBox' key={id}>
                  <a href="https:google.com">
                    <img 
                        src={item.cover}
                        alt="portfolioCoverImg"
                        className="portfolioImg"
                    />
                  </a>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )
            })
          }
      </div>
    )
  }

  return (
    <>
      <div className='container portfolio-page'>
        <h1 className='portfolioTitle'>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={"Portfolio".split("")} 
            idx={15} />
        </h1>
        <div> {renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio;