import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { Icon } from '@iconify/react';
import CartDrawer from "../../Pages/CartGadget/CartDrawer";

const Navbar = () => {
    const { user, logOut }: any = useContext(AuthContext);


    const hangleLogOut = () => {
        logOut()
            .then(() => {
            }).catch((error: string) => { console.error(error) });
    }

    const navoptions =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allgadget'>AllGadget</Link></li>
            <li><Link to='/aboutus'>AboutUs</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            

            <li><Link to='/dashboard/allgadget'>Dashboard</Link></li>


            {user?.email ?

                <>
                    <li><Link to='' onClick={hangleLogOut}>LogOut</Link></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                </>
            }

            <li>
                <Link to='/' className="">

                    {user?.photoURL ?
                        <>
                            <div className="avatar">
                                <div className="w-9 h-9 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            {/* <span className="icon-[iconamoon--profile-thin] text-white"></span> */}

                            <Icon className="w-7 h-7" icon="iconamoon:profile-fill" />
                        </>
                    }

                </Link>
            </li>
            <li><CartDrawer></CartDrawer></li>


        </>
    return (



<div className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-[#0F1C2E]/95 text-white border-b border-[#1C2431] font-bold">
    <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow-lg bg-[#1C2431] rounded-box w-52 text-white">
                    {navoptions}
                </ul>
            </div>
            <Link to='/' className="btn btn-ghost text-xl text-white flex items-center gap-2">
                Gadget Flow
                <lord-icon
                    src="https://cdn.lordicon.com/kjtalhau.json"
                    trigger="hover"
                    style={{ width: "40px", height: "40px" }}>
                </lord-icon>
            </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-[16px]">
                {navoptions}
            </ul>
        </div>

        <div className="navbar-end">
            <Link to='/contactus' className="btn bg-[#00C2FF] hover:bg-[#00F0FF] text-[#0A0F1C] border-none">
                Contact Us
            </Link>
        </div>
    </div>
</div>

    );
};

export default Navbar;