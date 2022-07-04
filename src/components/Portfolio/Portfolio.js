import { getDocs, collection } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { database } from '../../firebase';
import { AnimatedLetters } from '../AnimatedLetters';
import RenderPortfolio from '../RenderPortfolio/RenderPortfolio';
import "./portfolio.scss";

const Portfolio = () => {

  const[letterClass, setLetterClass] = useState("text-animate");
  const[portfolio, setPortfolio] = useState([]);

  useEffect( () => {
    const timer = setTimeout(()=>{
      setLetterClass("text-animate-hover");
    },2500 ) 
    return() => {
      clearTimeout(timer);
    }
  },[])

  useEffect(() => {
    getPortfolio();
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(database, 'portfolio'));
    setPortfolio(querySnapshot.docs.map( (doc) => doc.data()));
  }

  console.log(portfolio);



  return (
    <>
      <div className='container portfolio-page'>
        <h1 className='portfolioTitle'>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={"Portfolio".split("")} 
            idx={15} />
        </h1>
        <div className='imagesOut'> {RenderPortfolio(portfolio)}</div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio;