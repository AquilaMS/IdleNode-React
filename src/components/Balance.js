import { useEffect, useState } from 'react';
import '../styles/index.css'
import { getUserData } from '../logics/home'

let userData = {}
let oldTime = new Date(Date.now()).getTime()

const update = async () => getUserData().then(res => {
  userData = res.data
})
update()

const updatedBalance = () => {
  var newTime = new Date(Date.now()).getTime()
  var timeDifference = (newTime - oldTime) / 1000
  var valueToAdd = (timeDifference * userData.sumMultiplier) / 5
  var newBalance = valueToAdd + userData.balance
  userData.balance = newBalance
  var fixedValue = Math.round(userData.balance).toFixed(0)
  oldTime = newTime
  return fixedValue
}

const Balance = () => {
  const [balance, setBalance] = useState(0)
  const [sumMultiplier, setSumMultiplier] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSumMultiplier(userData.sumMultiplier)
      setBalance(updatedBalance)
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className='balance'>
      <p>{balance}</p>
      <p className='name-coin'>Golds</p>
      <p className='name-coin'>x{sumMultiplier}</p>
    </div>
  );
}

export default Balance;
export { update }