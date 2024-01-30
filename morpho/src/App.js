import Product from './Page/Product/Product';
import './App.css';
import Home from './Page/Home/Home';
import Price from './Page/Price/Price';
import Shpping from './Page/Shpping/Shpping';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <Router>
    <Routes>
      <Route path ="/" element={<Home/>}></Route>
      <Route path ="/product" element={<Product/>}></Route>
      <Route path ="/price" element ={<Price/>}></Route>
      <Route path ="/aluminumbox" element ={<Product/>}></Route>
      <Route path ="/shipping" element ={<Shpping/>}></Route>
      

    </Routes>
    </Router>

  );
}

export default App;
