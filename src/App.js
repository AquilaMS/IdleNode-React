import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home'
import Login from './screens/Login';
import Register from './screens/Register';
import Intro from './screens/Intro';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;