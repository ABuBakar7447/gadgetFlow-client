// import { useContext } from "react";
// import { useForm, SubmitHandler } from "react-hook-form"
// import { AuthContext } from "../../Providers/AuthProviders";
// import { useLocation, useNavigate } from "react-router-dom";
// import pic from '../../assets/login.png'

// interface IFormInput {
//   email: string
//   password: string

// }

// const LogIn = () => {
//     const {signInUser}:any = useContext(AuthContext)
//     const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>()

//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";

//     const onSubmit: SubmitHandler<IFormInput> = (data) =>{
//         signInUser(data.email, data.password)
//         .then((result:any)=>{
//             const user = result.user;
//             console.log(user);

//             navigate(from, {replace: true})
//         })
//     }

//     return (
//         <div className="pt-[84px] min-h-screen">
//             <form  onSubmit={handleSubmit(onSubmit)} className="card-body w-11/12 lg:w-1/2 mx-auto flex justify-center items-center">

//                 <div className="form-control w-3/4">
//                     <label className="label">
//                         <span className="label-text text-blue-500">Email</span>
//                     </label>
//                     <input type="email" placeholder="email" className="bg-white input input-bordered" {...register("email", { required: true, maxLength: 20 })} />
//                     {errors.email?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Email is required</p>}

//                 </div>

//                 <div className="form-control w-3/4">
//                     <label className="label">
//                         <span className="label-text text-blue-500">Password</span>
//                     </label>
//                     <input type="password" placeholder="password" className="bg-white input input-bordered" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />

//                     {errors.password?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Password is required</p>}
//                     {errors.password?.type === 'minLength' && <p className="text-red-600 font-bold" role="alert">Password is required minimum 6 length</p>}
//                     {errors.password?.type === 'maxLength' && <p className="text-red-600 font-bold" role="alert">Password is required maximum 20 digit</p>}
//                 </div>

//                 <div className="form-control mt-6 w-1/2">
//                     <input type="submit" value="Login" className="btn bg-[#00C2FF] hover:bg-[#00F0FF] text-[#0A0F1C] font-bold  hover:text-black border-0" />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default LogIn;

import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pic from "../../assets/login.png";

interface IFormInput {
  email: string;
  password: string;
}

const LogIn = () => {
  const { signInUser }: any = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    signInUser(data.email, data.password).then((result: any) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGitHubLogin = () => {
    console.log("GitHub login clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center pt-[84px] px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Left Image Section */}
        <div
          className="w-full lg:w-1/2 hidden lg:flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${pic})` }}
        ></div>

        {/* Right Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 p-8 space-y-4 text-white"
        >
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-4">
            Login to Your Account
          </h2>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-blue-400 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white/20 text-white placeholder:text-gray-300 border focus:outline-none focus:ring-2 focus:ring-cyan-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-blue-400 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-white/20 text-white placeholder:text-gray-300 border focus:outline-none focus:ring-2 focus:ring-cyan-400"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-400 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-400 text-sm mt-1">
                Minimum 6 characters required
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-400 text-sm mt-1">
                Maximum 20 characters allowed
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="space-y-3">
            <input
              type="submit"
              value="Login"
              className="btn w-full bg-cyan-400 hover:bg-cyan-300 text-[#0A0F1C] font-bold transition-all duration-300 border-none"
            />

            <div className="divider text-white">or</div>

            <div className="lg:flex justify-center items-center lg:w-[50%] mx-auto gap-2 ">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="my-2 lg:my-0 btn w-full bg-white/20 hover:bg-white/30 text-white font-semibold border border-white/30 flex items-center justify-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Login with Google
              </button>

              <button
                type="button"
                onClick={handleGitHubLogin}
                className="btn w-full bg-white/20 hover:bg-white/30 text-white font-semibold border border-white/30 flex items-center justify-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="GitHub"
                  className="w-5 h-5"
                />
                Login with GitHub
              </button>
            </div>
          </div>

          <p className="font-semibold text-sm text-center">
            Already have an account?{" "}
            <span className="text-blue-500">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
