import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-n.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Sidebar = () => (

    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <span className='sub-logo' alt="logo subtitle">Rishav</span>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={ faSuitcase } color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={ faEnvelope } color="#4d4d4e" />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/rishavsharma-eth'>
                    <FontAwesomeIcon icon={ faGithub }  color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://twitter.com/0xrishavsharma'>
                    <FontAwesomeIcon icon={ faTwitter }  color='#4d4d4e' />
                </a>
            </li>
            <li>
                 <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/rishavsharmaeth/'>
                    <FontAwesomeIcon icon={ faLinkedin }  color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)