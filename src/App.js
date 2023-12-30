import React, { useEffect } from 'react';
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
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrderPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswardPage from './pages/ForgotPasswardPage';



const router = createBrowserRouter([
  {
    path: "/",

    // this  page is protected 
    element: <Protected> <Home></Home> </Protected> ,
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
    element:(<Protected> <CartPage/> </Protected> ),
  },
  {
   
    path: "/checkout",
    element:(<Protected> <Checkout/></Protected>),
  },
  {
   
    path: "/product-details/:id",
    element:(<Protected> <ProductDetailPage/></Protected>),
  },

  {
   
    path: "/order-success/:id",
    element:(<OrderSuccessPage></OrderSuccessPage>),
  },

  {
   
    path: "/orders",
    element:(<Protected><UserOrderPage></UserOrderPage></Protected>),
    // later full page willbe added here 
  },

  {
   
    path: "/profile",
    element:(<Protected><UserProfilePage></UserProfilePage></Protected>),
  },

  {
   
    path: "/logout",
    element:(<Protected><Logout></Logout></Protected>),
  },

  {
   
    path: "/forgot-password",
    element:(<ForgotPasswardPage></ForgotPasswardPage>),
  },


  {
   
    path: "*",
    element:(<PageNotFound></PageNotFound>),
  },
]);




function App() {
  // jaise hi user login kre use uska cart dikha do nav bar me hi 
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  

  useEffect(()=>{
    if(user){

      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))  // page load hote hi user ki sari ingo get kr lo , just after login 
    }
  },[dispatch,user])
  return (
    <>
   <div className="App">
   <RouterProvider router={router} />

   </div>
   </>
  );
}

export default App;
