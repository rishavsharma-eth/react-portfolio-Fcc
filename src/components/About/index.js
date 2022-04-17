import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEthereum, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters';
import Loader from 'react-loaders';
import CodingLogo from '../../../src/assets/images/coding.svg'
import './index.scss';

export const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
      setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 3000);
    }, [])
    
    return(
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15} />
                    </h1>
                    <span>
                        <p> I'm very energetic and excited front-end developer. Having interest in 
                            Animal Psychology (including Humans), Sustainability, and <span className='highlight-txt'>Web 3.0</span>
                        </p>
                        <p align="LEFT">
                            I'm a slow learner, curious, and I love talking about things that 
                            have the potential to change the world.
                        </p>
                        <p>
                            Learning new tech stacks like React, Hardhat, Ethers, etcetera is my kind of thing.
                            When I am not coding, you'll find me reading books on Self Development, Exercising and 
                            building <span className='highlight-txt'>meaningful relationships</span>.
                        </p>
                    </span>
                </div>

                <div className="coding-svg">
                       <img src={CodingLogo} alt="" />
                </div>


                <div className="stars-animation">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}