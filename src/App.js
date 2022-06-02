import './App.css';
import { ProductsProvider } from './Context/ProductsContext';
import { CartProvider } from './Context/CartContext';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './Components/Navbar';
import ProductsOverview from './Components/ProductsOverview';
import ProductDetails from './Components/ProductDetails';
import ShoppingCart from './Components/ShoppingCart';
import CheckoutProcess from './Components/CheckoutProcess';

function App() {
  return (
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Navbar/>
            <div className="App">
                <Routes>
                  <Route path='/' element={<ProductsOverview/>} />
                  <Route path='/details/:id' element={<ProductDetails/>} />
                  <Route path='/cart' element={<ShoppingCart/>} />
                  <Route path='/checkout' element={<CheckoutProcess/>} />
                </Routes>
            </div>
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
  );
};

export default App;
