import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
    const navoptions =
        <>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard/allgadget'>AllProduct</Link></li>
            <li><Link to='/dashboard/addproduct'>AddProduct</Link></li>
            <li><Link to='/dashboard/allgadget'>Dashboard</Link></li>

        </>



    return (
        <div className="lg:grid lg:grid-cols-12 grid-cols-none">
            <div className="flex flex-col bg-base-100 col-span-2">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navoptions}
                        </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex justify-center">
                    <ul className="menu menu-vertical px-1">
                        {navoptions}
                    </ul>
                </div>
                
            </div>
            <div className="col-span-10">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;