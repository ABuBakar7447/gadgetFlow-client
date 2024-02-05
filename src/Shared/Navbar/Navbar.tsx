import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { Icon } from '@iconify/react';
import CartDrawer from "../../Pages/CartGadget/CartDrawer";

const Navbar = () => {
    const { user, logOut }:any = useContext(AuthContext);


    const hangleLogOut = () => {
        logOut()
            .then(() => {
            }).catch((error: string) => { console.error(error) });
    }

    const navoptions =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allgadget'>AllGadget</Link></li>
            <li><Link to='' className="lg:hidden sm:display">Cart</Link></li>


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

                            <Icon className="w-7 h-7 mt-1" icon="iconamoon:profile-fill" />
                        </>
                    }

                </Link>
            </li>

        </>
    return (
        <div>
            <div className="navbar bg-base-100 z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navoptions}
                            

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navoptions}
                        <CartDrawer></CartDrawer>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>

            </div>


        </div>
    );
};

export default Navbar;