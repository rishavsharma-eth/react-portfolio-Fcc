// We'll use the gsap library to animate the logo in the right that we are going
// to create in this component
import RightLogo from '../../../assets/images/logo-r.png'
import './index.scss';

const Logo = () =>{
    return(
        <div className='right-logo'>
            <img src={RightLogo} alt="Logo Right" />
        </div>
    )
    

}

export default Logo;