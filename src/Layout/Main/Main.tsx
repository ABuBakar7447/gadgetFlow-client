import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footerr from "../../Shared/Footerr/Footerr";
import { useEffect } from "react";



const Main = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div className="bg-[#0A0F1C]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footerr></Footerr>
            
        </div>
    );
};

export default Main;