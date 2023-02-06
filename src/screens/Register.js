import '../styles/index.css';
import Logo from '../images/logo.png'
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import MyToasts from '../components/toasts/Toasts'
import { registerUser } from '../logics/register';
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateTo = useNavigate()
  const changeScreen = () => navigateTo('/login')

  const getDataFromForm = async () => {
    //toast("Wow so easy!");
    registerUser({ name, email, password })
      .then(res => {
        if (res.error) MyToasts('Email already registered or password field is empty')
        else {
          MyToasts(`Welcome, ${res.name}! Now you can login!`)
          //console.log(mytoken)
          changeScreen()
        }
      })
  }

  const getNameChanges = (changes) => {
    setName(changes.target.value)
  }
  const getEmailChanges = (changes) => {
    setEmail(changes.target.value)
  }

  const getPasswordChanges = (changes) => {
    setPassword(changes.target.value)
  }

  return (
    <div className="App">
      <div className="all-content">
        <div className='card-background'>
          <img src={Logo} className='form-logo' />
          <div className='login-register-form'>
            <div>
              <input type="text" name="name" placeholder='Name' onChange={getNameChanges} />
            </div>
            <div>
              <input type="text" name="name" placeholder='Email' onChange={getEmailChanges} />
            </div>
            <div>
              <input type="password" name="name" placeholder='Password' onChange={getPasswordChanges} />
            </div>
            <input className='form-button' type="submit" value="Register" onClick={getDataFromForm} />
            <Link to={'/login'}>
              <button className='form-button-alt'>Already have a Account</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register