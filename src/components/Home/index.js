import LogoTitle from '../../assets/images/logo-r.png';
import { Link } from 'react-router-dom';
import './index.scss';


export const Home = () =>{
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm 
                    <img src={LogoTitle} alt="developer" />
                        ishav
                    <br />
                    Web Developer
                </h1>
                <h2>Frontend Developer / Blockchain Enthusiast / Anitya (अनित्य) </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}