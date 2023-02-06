import '../styles/index.css'
import Logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigateTo = useNavigate()
  const changeScreen = () => navigateTo('/')

  const logOut = () => {
    localStorage.clear()
    changeScreen()
  }
  return (
    <nav className="navbar">
      <img src={Logo} className='logo-navbar' />
      <p className='navbar-appname'>IdleNode</p>

      <div className="links">

        <a onClick={logOut} href="/">Logout</a>
      </div>
    </nav >
  );
}

export default Navbar;