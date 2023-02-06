import Balance from '../components/Balance';
import Navbar from '../components/Navbar';
import PowerupsList from '../components/PowerupsList';
import '../styles/index.css';
import { getUserData } from '../logics/home'

const Home = () => {

  return (
    <div className="App">
      <Navbar />
      <Balance />
      <PowerupsList />
    </div>
  )
}

export default Home