import axios from "axios";

async function registerUser(user) {
  const data = await axios.post('http://127.0.0.1:3001/signup/', user)
    .then(res => {
      return res.data.insertedUser[0]
    }).catch(err => {
      return err.response.data
    })
  return data
}


export { registerUser } 