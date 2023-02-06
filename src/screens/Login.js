import '../styles/index.css';
import Logo from '../images/logo.png'
import { signinUser } from '../logics/login';
import { useState } from 'react';
import MyToasts from '../components/toasts/Toasts'
import { Link, useNavigate } from 'react-router-dom';
import { update } from '../components/Balance';

const Login = () => {
  localStorage.removeItem('token')
  const [email, setName] = useState('')
  const [password, setPassword] = useState('')

  const navigateTo = useNavigate()
  const changeScreen = () => navigateTo('/home')

  const getDataFromForm = () => {
    signinUser({ email, password })
      .then(res => {
        if (res.error) MyToasts('Email or password are incorrect')
        else {
          MyToasts(`Welcome back, ${res.name}!`)
          changeScreen()
          update()
        }
      })
  }

  const getEmailChanges = (changes) => {
    setName(changes.target.value)
  }
  const getPasswodChanges = (changes) => {
    setPassword(changes.target.value)
  }
  return (
    <div className="App">
      <div className="all-content">
        <div className='card-background'>
          <img src={Logo} className='form-logo' />
          <form className='login-register-form'>
            <div>
              <input type="text" name="name" placeholder='Email' onChange={getEmailChanges} />
            </div>
            <div>
              <input type="password" name="name" placeholder='Password' onChange={getPasswodChanges} />
            </div>
            <input onClick={getDataFromForm} className='form-button' value="Login" />
            <Link to={'/register'}>

              <button className='form-button-alt'>Create a account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login