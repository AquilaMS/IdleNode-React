import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'

const Intro = () => {
  return (
    <div className='intro-allcontent'>
      <img className='intro-logo' src={Logo} />
      <p className='intro-app-title'> IdleNode</p>
      <div className='intro-text'>
        <p>Project developed by AquilaMS</p>
        <div className='intro-redirect-buttons'>
          <Link className='intro-button' to='/login'>
            <p> Login</p>
          </Link>
          <hr className='intro-hr' />
          <Link className='intro-button' to='/register'>
            <p> Register</p>
          </Link>
        </div>
        <p>Source code: <a href='https://github.com/AquilaMS/IdleNodeGame'>here</a></p>
      </div>
    </div>
  );
}

export default Intro;