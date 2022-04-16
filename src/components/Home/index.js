import LogoTitle from '../../assets/images/logo-r.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters';


export const Home = () =>{
    // We are using useState to change the state of our class. As letters can have only one
    // animation at a time. After the initial loading is done we want to add animation on
    // hover. That's why we need to use useState.
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 's', 'h' , 'a', 'v'];
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r'];


    useEffect(() => {
         return setTimeout( () => {
             setLetterClass('text-animate-hover')
        }, 1000);
      }, []);

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" /> 
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Frontend Developer / Blockchain Enthusiast / Anitya</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}