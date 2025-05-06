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
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blog from "../Pages/Blog/Blog";

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
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
            {
                path:'/contactus',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/details/:id',
                element:<ProductDetails></ProductDetails>
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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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