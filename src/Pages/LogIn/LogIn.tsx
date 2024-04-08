
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

interface IFormInput {
  email: string
  password: string
  
}


const LogIn = () => {
    const {signInUser}:any = useContext(AuthContext)
    const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>()


    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
        signInUser(data.email, data.password)
        .then((result:any)=>{
            const user = result.user;
            console.log(user);

            navigate(from, {replace: true})
        })
    }
    
    

    return (
        <div>
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body w-11/12 lg:w-1/2 mx-auto">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-700">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="bg-white input input-bordered" {...register("email", { required: true, maxLength: 20 })} />
                    {errors.email?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Email is required</p>}
                    
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-700">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="bg-white input input-bordered" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />

                    {errors.password?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600 font-bold" role="alert">Password is required minimum 6 length</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600 font-bold" role="alert">Password is required maximum 20 digit</p>}
                </div>

                

                <div className="form-control mt-6">
                    <input type="submit" value="Login" className="btn bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                </div>
            </form>
        </div>
    );
};

export default LogIn;