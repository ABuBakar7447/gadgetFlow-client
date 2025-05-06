import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../Redux/hook";
import ProductTable from "./ProductTable";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import {
  useGadgetquantityUpadateMutation,
  useSellsdataMutation,
} from "../../Redux/api";

import Swal from "sweetalert2";

interface IFormInput {
  name: string;
  email: string;
  phone:number;
  location:string;
}

const Orderpage = () => {
  const { product } = useAppSelector((state) => state.cartgadget);
  const [gadgetquantityUpadate] = useGadgetquantityUpadateMutation();
  const [sellsdata] = useSellsdataMutation();

  

  const { user }: any = useContext(AuthContext);
  const { register, handleSubmit } = useForm<IFormInput>();

  

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    product?.map((item) => {
      const quantityies = item.quantity;
      if (quantityies > 0) {
        console.log(item, quantityies);
        const datas = {
          id: item._id,
          data: { quantityies },
        };

        gadgetquantityUpadate(datas);
      } else {
        const quantity = item.quantity;
        console.log("status");
        const data = {
          id: item._id,
          data: { status: false, quantity },
        };

        gadgetquantityUpadate(data);
      }
    });

    const newdata = {
      data: {
        product: product,
        name: data.name,
        email: data.email,
        
      },
    };
    console.log(newdata);
    sellsdata(newdata);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <div className="w-[90%] mx-auto py-[90px] bg-[#101522]">
        <p className="text-center text-4xl font-serif text-white my-5">Order Page</p>
        {product?.length > 0 ? (
          <>
            <div className="flex">
              {/* product table part */}
              <div className="bg-[#101522] text-white w-1/2 p-10">
                <table className="table bg-slate-400">
                  {/* head */}
                  <thead className="text-blue-600 text-[16px]">
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Brand & Model</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {product.map((item, index) => (
                    <tbody className="">
                      <ProductTable
                        key={item._id}
                        item={item}
                        index={index}
                      ></ProductTable>
                    </tbody>
                  ))}
                </table>
              </div>

              {/* form part */}
              <div className="w-1/2">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text text-blue-600 font-semibold">Name</span>
                      </label>
                      <input
                        placeholder="Name"
                        className="bg-white input input-bordered"
                        {...register("name", { required: true, maxLength: 20 })}
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-600 font-semibold">Email</span>
                      </label>
                      <input
                        readOnly
                        type="email"
                        defaultValue={user?.email}
                        className="bg-white input input-bordered"
                        {...register("email", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-600 font-semibold">Phone</span>
                      </label>
                      <input
                        placeholder="enter phone number"
                        type="email"
                        
                        className="bg-white input input-bordered"
                        {...register("phone", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-600 font-semibold">Location Details</span>
                      </label>
                      <input
                        placeholder="enter your location"
                        type="email"
                        
                        className="bg-white input input-bordered"
                        {...register("location", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                    </div>

                  </div>

                  {/* <DayPicker
                    mode="single"
                    selected={selected}
                    onDayClick={setSelected}
                    className="text-black bg-slate-400 w-[290px] px-2 rounded-lg"
                  />
                  <p className="text-white px-4">
                    You picked{" "}
                    <span className="font-bold text-blue-500">{format(selected, "PP")}</span>.
                  </p> */}

                  <div className="form-control mt-6 w-1/4">
                    <input
                      type="submit"
                      value="Order"
                      className="btn btn-success text-white font-bold hover:bg-slate-300 hover:text-black border-0"
                    />
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="text-red-700 text-xl font-semibold text-center my-10 p-10 bg-gray-400">
              There is no Product Booked yet
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Orderpage;
