import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import ProductsList from './Components/ProductsList';
import Category from './Components/Category';
import Home from './Components/Home';
import DetailedPage from './Components/DetailedPage';
import { useState } from 'react';
import UserList from './Components/UserList';
import { Provider } from 'react-redux';
import store from './utils/Store';
import Cart from './Components/Cart';
import Banner from './Components/Banner';
import ProductsMenu from './Components/ProductsMenu';
import PlaceOrder from './Components/PlaceOrder';
import OrderConfirm from './Components/OrderConfirm';

function App() {
  const [hideandshow, setHideandshow] = useState(true);
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Header/>
        {hideandshow ?(
          <>
          <Banner/>
          <Home/>
          <ProductsList/>
        </>
        ):null}
        <Routes>
          <Route path='/products' element={<ProductsMenu setHideandshow={setHideandshow}/>}/>
          <Route path='/category' element={<Category setHideandshow={setHideandshow}/>}/>
          <Route path='/products/:category/:productId' element={<DetailedPage setHideandshow={setHideandshow}/>}/>
          <Route path='/users' element={<UserList setHideandshow={setHideandshow}/>}/>
          <Route path='/cart' element={<Cart setHideandshow={setHideandshow}/>}/>
          <Route path='/order' element={<PlaceOrder setHideandshow={setHideandshow}/>}/>
          <Route path='/orderconfirm' element={<OrderConfirm setHideandshow={setHideandshow}/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;





