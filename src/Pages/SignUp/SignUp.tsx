
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProviders";

interface IFormInput {
    name:string
    email: string
    password: string

}


const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            updateUserProfile(data.name)
            .then(()=>{
                console.log('profile updated');
            })
        })
        .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
        
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-700">Name</span>
                    </label>
                    <input placeholder="Name" className="bg-white input input-bordered" {...register("name", { required: true, maxLength: 20 })} />

                </div>

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

export default SignUp;