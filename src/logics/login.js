import axios from "axios";

async function signinUser(user) {
  const data = await axios.post('http://127.0.0.1:3001/signin/', user)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      return res.data
    }).catch(err => {
      return err.response.data
    })
  return data
}

export { signinUser } 