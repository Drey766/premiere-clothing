import './App.css';
import Home from './assets/components/pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './assets/components/pages/Login';
import Shop from './assets/components/pages/Shop';
import ProductDetail from './assets/components/pages/ProductDetail';
import CheckoutMain from './assets/components/pages/CheckoutMain';
import CartMain from './assets/components/pages/CartMain';
import TrackingMain from './assets/components/pages/TrackingMain';
import Explore from './assets/components/pages/Explore';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/cart' element={<CartMain />}></Route>
          <Route exact path='/checkout' element={<CheckoutMain />}></Route>
          <Route exact path='/shop' element={<Shop />}></Route>
          <Route exact path='/tracking' element={<TrackingMain />}></Route>
          <Route exact path='/product' element={<ProductDetail /> }></Route>
          <Route exact path='/explore' element={<Explore /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
