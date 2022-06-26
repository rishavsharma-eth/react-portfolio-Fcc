import LogoTitle from '../../assets/images/logo-r.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

export const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 's', 'h' , 'a', 'v'];
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r'];

    useEffect(() => {
         setTimeout( () => {
             setLetterClass('text-animate-hover')
        }, 4000);
      }, []);

    return(
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1> 
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'</span>
                        <span className={`${letterClass} _16`}>m</span>
                        <img src={LogoTitle} alt="developer" /> 
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17}/>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24}/>
                    </h1>
                    <h2>Frontend Developer / Blockchain Enthusiast / Anitya</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}