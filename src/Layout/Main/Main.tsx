import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footerr from "../../Shared/Footerr/Footerr";



const Main = () => {
    return (
        <div className="mx-auto container">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footerr></Footerr>
            
        </div>
    );
};

export default Main;