
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProviders";

interface IFormInput {
  email: string
  password: string
  
}


const LogIn = () => {
    const {signInUser} = useContext(AuthContext)
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
        signInUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }
    
    

    return (
        <div>
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-700">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="bg-white input input-bordered" {...register("email", { required: true, maxLength: 20 })} />
                    
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-700">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="bg-white input input-bordered" {...register("password", { required: true, maxLength: 20 })} />
                </div>

                

                <div className="form-control mt-6">
                    <input type="submit" value="Login" className="btn bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                </div>
            </form>
        </div>
    );
};

export default LogIn;