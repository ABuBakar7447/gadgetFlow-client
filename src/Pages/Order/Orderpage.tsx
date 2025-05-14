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
  phone: number;
  location: string;
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
    <div className="w-[95%] mx-auto py-[60px] bg-[#101522] min-h-screen">
      <p className="text-center text-3xl md:text-4xl font-serif text-white mb-10">
        Order Page
      </p>

      {product?.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* product table part */}
          <div className="w-full lg:w-1/2 text-white p-2">
            <div className="overflow-x-auto rounded-lg">
              <table className="table w-full text-sm bg-white text-black">
                <thead className="bg-blue-100 text-blue-600 text-[16px]">
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Brand & Model</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((item, index) => (
                    <ProductTable key={item._id} item={item} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* form part */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-600 font-semibold mb-1">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true, maxLength: 20 })}
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="block text-blue-600 font-semibold mb-1">
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    readOnly
                    defaultValue={user?.email}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="block text-blue-600 font-semibold mb-1">
                    Phone
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    placeholder="Enter phone number"
                    type="tel"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="block text-blue-600 font-semibold mb-1">
                    Location
                  </label>
                  <input
                    {...register("location", { required: true })}
                    placeholder="Enter your location"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="pt-4">
                <input
                  type="submit"
                  value="Place Order"
                  className="btn btn-success w-full md:w-1/3 text-white font-bold hover:bg-green-700"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <p className="text-red-700 text-xl font-semibold text-center my-10 p-10 bg-gray-200 rounded-md">
          There is no Product Booked yet
        </p>
      )}
    </div>
  );
};

export default Orderpage;
