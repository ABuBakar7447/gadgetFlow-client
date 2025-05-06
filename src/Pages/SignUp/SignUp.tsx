
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { useUserdataMutation } from "../../Redux/api";

interface IFormInput {
    name:string
    email: string
    password: string

}


const SignUp = () => {

    const [userdata] = useUserdataMutation()

    const {createUser, updateUserProfile}:any = useContext(AuthContext);
    const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>()

    const navigate = useNavigate()


    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then((result:any) =>{
            const user = result.user;
            console.log(user);
            updateUserProfile(data.name)
            .then(()=>{
                const datas = {
                     
                        name: data.name,
                        email:data.email
                    
                }
                userdata(datas);

                console.log('profile updated');
                navigate('/')
            })
        })
        .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
        
    }



    return (
        <div className="pt-[84px] min-h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-11/12 lg:w-1/2 mx-auto">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-500">Name</span>
                    </label>
                    <input placeholder="Name" className="bg-white input input-bordered" {...register("name", { required: true, maxLength: 20 })} />
                    {errors.name?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Name is required</p>}

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-500">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="bg-white input input-bordered" {...register("email", { required: true, maxLength: 20 })} />
                    {errors.email?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Email is required</p>}

                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-500">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="bg-white input input-bordered" {...register("password", { required: true, minLength:6, maxLength: 20 })} />

                    
                    {errors.password?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600 font-bold" role="alert">Password is required minimum 6 length</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600 font-bold" role="alert">Password is required maximum 20 digit</p>}
                </div>



                <div className="form-control mt-6">
                    <input type="submit" value="Login" className="btn bg-[#00C2FF] hover:bg-[#00F0FF] text-[#0A0F1C] font-bold  hover:text-black border-0" />
                </div>
            </form>
        </div>
    );
};

export default SignUp;