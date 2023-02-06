import Powerup from "./Powerup"
import { getAllPowerups } from "../logics/home"
import { useEffect, useState } from 'react';

const PowerupsList = () => {
  const [powerups, setPowerup] = useState([])
  useEffect(() => {
    const fetch = async () => await getAllPowerups().then(res => setPowerup(res))
    fetch()
  }, [])

  return (
    <div className="powerups-list">
      {powerups.map((pwup) => (
        <Powerup key={pwup.id} price={pwup.price} name={pwup.objname} id={pwup.id} />
      ))}
    </div>
  )
}
export default PowerupsList