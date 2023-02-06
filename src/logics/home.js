import axios from "axios";

const getConfig = () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      'Authorization': `bearer ${token}`,
      'accept': 'application/json'
    }
  };
  return { config }
}

const getUserData = async () => {
  const config = getConfig().config
  const data = await axios.post('http://127.0.0.1:3001/user/update', {}, config)
    .then(res => {
      return res
    })
  return data
}

const getAllPowerups = async () => {
  const config = getConfig().config
  const data = await axios.post('http://127.0.0.1:3001/powerups/getall', {}, config)
    .then(res => {
      return res.data
    })
  return data
}

const buyPowerup = async (id) => {
  const config = getConfig().config
  const data = await axios.post(`http://127.0.0.1:3001/powerups/buy/${id}`, {}, config)
    .then(res => {
      return res.data
    }).catch(err => { return err })

  return data
}



export { getUserData, getAllPowerups, buyPowerup }