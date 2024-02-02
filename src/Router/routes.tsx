import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Allgadget from "../Pages/Dashboard/Allgadget/Allgadget";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllGadget from "../Pages/AllGadget/AllGadget";
import CartGadget from "../Pages/CartGadget/CartGadget";
import Orderpage from "../Pages/Order/Orderpage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allgadget',
                element:<AllGadget></AllGadget>
            },
            {
                path:'/cart',
                element:<CartGadget></CartGadget>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/orderpage',
                element:<Orderpage></Orderpage>
            }

        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'allgadget',
                element:<Allgadget></Allgadget>
            },
            {
                path:'addproduct',
                element:<AddProduct></AddProduct>
            }
        ]
    }
])