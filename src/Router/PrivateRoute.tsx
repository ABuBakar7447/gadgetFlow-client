import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const PrivateRoute = ({children}:any) => {
    const location = useLocation();


    const {user, loading}:any = useContext(AuthContext)
    // console.log(user, "loading:",loading)
    
    if(loading){
        return(
            <div className="w-1/2 mx-auto h-56 flex justify-center items-center">
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    

    if(user){
        return children;
    }

    
    return ( <Navigate to="/login"  state={{from: location}} replace true></Navigate> );

};

export default PrivateRoute;