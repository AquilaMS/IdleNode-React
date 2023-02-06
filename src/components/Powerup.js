import { buyPowerup } from '../logics/home';
import { update } from './Balance';
import MyToasts from '../components/toasts/Toasts'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/icons/', false, /\.(png|jpe?g|svg)$/));

const Powerup = ({ name, price, id }) => {
  const handleClick = (id) => {
    buyPowerup(id).then(res => {
      if (res.error) MyToasts(res.error)
      update()
    })
  };
  return (
    <div onClick={() => handleClick(id)} className="powerup">
      <div className="powerup-icon">
        <img className='powerup-icon-image' src={images[id]} />
      </div>
      <div className='powerup-title'>
        <div className="powerup-name">{name}</div>
      </div>
      <div className='powerup-buy-btn'>
        <p className='powerup-price'>{price}</p>
        <div></div>
        <p className='coin'>Golds</p>
      </div>
    </div>
  )
}
export default Powerup