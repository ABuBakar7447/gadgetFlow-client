import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { useUserdataMutation } from "../../Redux/api";
import pic from "../../assets/signup.jpg";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  role: string;
}

const SignUp = () => {
  const [userdata] = useUserdataMutation();

  const { createUser, updateUserProfile }: any = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result: any) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name)
          .then(() => {
            const datas = {
              name: data.name,
              email: data.email,
            };
            userdata(datas);
            console.log("profile updated");
            navigate("/");
          })
          .catch((error: any) => {
            console.error("Failed to update profile", error);
          });
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    // <div className="pt-[84px] min-h-screen">
    //     <form onSubmit={handleSubmit(onSubmit)} className="card-body w-11/12 lg:w-1/2 mx-auto">

    //         <div className="form-control">
    //             <label className="label">
    //                 <span className="label-text text-blue-500">Name</span>
    //             </label>
    //             <input placeholder="Name" className="bg-white input input-bordered" {...register("name", { required: true, maxLength: 20 })} />
    //             {errors.name?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Name is required</p>}

    //         </div>

    //         <div className="form-control">
    //             <label className="label">
    //                 <span className="label-text text-blue-500">Email</span>
    //             </label>
    //             <input type="email" placeholder="email" className="bg-white input input-bordered" {...register("email", { required: true, maxLength: 20 })} />
    //             {errors.email?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Email is required</p>}

    //         </div>

    //         <div className="form-control">
    //             <label className="label">
    //                 <span className="label-text text-blue-500">Password</span>
    //             </label>
    //             <input type="password" placeholder="password" className="bg-white input input-bordered" {...register("password", { required: true, minLength:6, maxLength: 20 })} />

    //             {errors.password?.type === 'required' && <p className="text-red-600 font-bold" role="alert">Password is required</p>}
    //             {errors.password?.type === 'minLength' && <p className="text-red-600 font-bold" role="alert">Password is required minimum 6 length</p>}
    //             {errors.password?.type === 'maxLength' && <p className="text-red-600 font-bold" role="alert">Password is required maximum 20 digit</p>}
    //         </div>

    //         <div className="form-control mt-6">
    //             <input type="submit" value="Login" className="btn bg-[#00C2FF] hover:bg-[#00F0FF] text-[#0A0F1C] font-bold  hover:text-black border-0" />
    //         </div>
    //     </form>
    // </div>

    <div className="min-h-screen  bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center pt-[84px] px-4 w-[90%] mx-auto">
      <div className="my-10 flex flex-col lg:flex-row w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Left Image Section */}
        <div
          className="w-full lg:w-[40%] hidden lg:flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${pic})`,
          }}
        ></div>

        {/* Right Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[60%] p-8 space-y-4 text-white"
        >
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-4">
            Create Account
          </h2>

          <div className="lg:flex lg:justify-center lg:items-center gap-2">
            {/* Name */}
            <div className="w-full">
              <label className="block text-sm font-semibold text-blue-400 mb-1">
                Name
              </label>
              <input
                placeholder="Enter your name"
                className="input input-bordered w-full bg-white/20 text-white placeholder:text-gray-300 border focus:outline-none focus:ring-2 focus:ring-cyan-400"
                {...register("name", { required: true, maxLength: 20 })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-400 text-sm mt-1">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block text-sm font-semibold text-blue-400 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white/20 text-white placeholder:text-gray-300 border focus:outline-none focus:ring-2 focus:ring-cyan-400"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-400 text-sm mt-1">Email is required</p>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-blue-400 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
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
              <p className="text-red-400 text-sm mt-1">Minimum 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-400 text-sm mt-1">Max 20 characters</p>
            )}
          </div>

          {/* Role Selector */}
          <div>
            <label className="block text-sm font-semibold text-blue-400 mb-1">
              Login as
            </label>
            <select
              {...register("role", { required: true })}
              className="select w-full text-white border focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role?.type === "required" && (
              <p className="text-red-400 text-sm mt-1">Please select a role</p>
            )}
          </div>

          {/* Submit Button */}
          {/* Submit Button */}
          <div className="space-y-3">
            <input
              type="submit"
              value="Sign Up"
              className="btn w-full bg-cyan-400 hover:bg-cyan-300 text-[#0A0F1C] font-bold transition-all duration-300 border-none"
            />

            <div className="divider text-white">or</div>

            <div className="lg:flex justify-center items-center gap-2 lg:w-[50%] mx-auto">
              <button
                type="button"
                className="my-2 lg:my-0 btn w-full bg-white/20 hover:bg-white/30 text-white font-semibold border border-white/30 flex items-center justify-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="Google"
                />
                Sign up with Google
              </button>

              <button
                type="button"
                className="btn w-full bg-white/20 hover:bg-white/30 text-white font-semibold border border-white/30 flex items-center justify-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  className="w-5 h-5"
                  alt="GitHub"
                />
                Sign up with GitHub
              </button>
            </div>
          </div>

          <p className="font-semibold text-sm text-center">
            Already have an account?{" "}
            <span className="text-blue-500">
              <Link to="/login">Log In</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
