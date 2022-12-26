import './App.css';
import { useState, useEffect } from "react";
import { getCategories} from './fetcher';
import Checkout from './components/checkout';
import ProductDetails from './components/productDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Category from './components/Category';
import Layout from './components/layout';
import Home from './components/home';
import Basket from './components/basket';
import OrderConfirmation from './components/orderConfirmation';

function App() {

  const [categories, setCategories] = useState({errorMessage: "", data: []});

  useEffect(() => {
    const fetchData = async () => {      
    const responseObject = await getCategories();
    setCategories(responseObject);
    }
    fetchData();
  }, [])




  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout categories={categories}/>}>
    <Route index element={<Home/>}/>
    <Route path='basket' element={<Basket/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='orderConfirmation' element={<OrderConfirmation/>}/>
    <Route path='products/:productId' element={<ProductDetails/>}/>
    <Route path='categories/:categoryId' element={<Category/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
