import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './features/Product/components/ProductList';
import Navbar from './features/navbar/Navbar';
import Home from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetails from './features/Product/components/ProductDetails';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element:(<LoginPage/>),
  },
  {
    path: "/signup",
    element:(<SignupPage/>),
  },
  {
   
    path: "/cart",
    element:(<CartPage/>),
  },
  {
   
    path: "/checkout",
    element:(<Checkout/>),
  },
  {
   
    path: "/product-details",
    element:(<ProductDetailPage/>),
  },
]);





function App() {
  return (
    <>
   <div className="App">
   <RouterProvider router={router} />

   </div>
   </>
  );
}

export default App;
