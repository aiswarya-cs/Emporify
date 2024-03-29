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

function App() {
  const [hideandshow, setHideandshow] = useState(true);
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Header/>
        {hideandshow ?(
          <>
        <Home/>
        </>
        ):null}
        <Routes>
          <Route path='/products' element={<ProductsList setHideandshow={setHideandshow}/>}/>
          <Route path='/category' element={<Category setHideandshow={setHideandshow}/>}/>
          <Route path='/products/:category/:productId' element={<DetailedPage setHideandshow={setHideandshow}/>}/>
          <Route path='/users' element={<UserList setHideandshow={setHideandshow}/>}/>
          <Route path='/cart' element={<Cart setHideandshow={setHideandshow}/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;





