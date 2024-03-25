import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Restaurants from "./components/Restaurants";
const AppLayout = () => {
  return (
    <div className="App">
     <Header />
     {/* <Body/> */}
     <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path:'/',
        element: <Body />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path:'/restaurants/:resId',
        element: <Restaurants />
      }
    ]
  }
  
])

