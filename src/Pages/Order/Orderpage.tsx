import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../Redux/hook";
import ProductTable from "./ProductTable";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useGadgetquantityUpadateMutation, useSellsdataMutation } from "../../Redux/api";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import Swal from "sweetalert2";


interface IFormInput {
    name: string
    email: string


}

const Orderpage = () => {
    const { product } = useAppSelector(state => state.cartgadget);
    const [gadgetquantityUpadate] = useGadgetquantityUpadateMutation()
    const [sellsdata] = useSellsdataMutation()

    const [selected, setSelected] = useState(new Date());

    const { user }: any = useContext(AuthContext);
    const { register, handleSubmit } = useForm<IFormInput>()


    console.log(selected)


    const onSubmit: SubmitHandler<IFormInput> = (data) => {

        console.log(data);
        product?.map(item => {

            const quantityies = item.quantity;
            if (quantityies > 0) {
                console.log(item, quantityies);
                const datas = {
                    id: item._id,
                    data: { quantityies }
                }

                gadgetquantityUpadate(datas)
            }

            else {
                const quantity = item.quantity;
                console.log('status')
                const data = {
                    id: item._id,
                    data: { status: false, quantity }
                }

                gadgetquantityUpadate(data)
            }
        })

        const newdata = {
            data: {
                product: product,
                name: data.name,
                email: data.email,
                date: selected
            }
        }
        console.log(newdata);
        sellsdata(newdata);

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        



    }
    return (
        <div>
            <div>
                <p className="text-center text-4xl font-serif text-black">
                    Order Page
                </p>
                <div className="grid grid-cols-2">

                    {/* product table part */}
                    <div className=" bg-white text-black col-span-1 p-10">
                        <table className="table border-2 rounded-full">
                            {/* head */}
                            <thead className="text-black text-[16px]">
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Product Name</th>
                                    <th>Brand & Model</th>
                                    <th>Quantity</th>
                                    <th>Price</th>

                                </tr>
                            </thead>
                            {
                                product.map((item, index) =>


                                    <tbody className="">
                                        <ProductTable key={item._id} item={item} index={index}></ProductTable>
                                    </tbody>
                                )
                            }

                        </table>
                    </div>



                    {/* form part */}
                    <div className="col-span-1">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="flex gap-2">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Name</span>
                                    </label>
                                    <input placeholder="Name" className="bg-white input input-bordered" {...register("name", { required: true, maxLength: 20 })} />

                                </div>

                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Email</span>
                                    </label>
                                    <input type="email" defaultValue={user?.email} className="bg-white input input-bordered" {...register("email", { required: true, maxLength: 20 })} />

                                </div>
                            </div>


                            <DayPicker
                                mode="single"
                                selected={selected}
                                onDayClick={setSelected}
                                className="text-black"
                            />
                            <p className="text-black">You picked <span className="font-bold">{format(selected, 'PP')}</span>.</p>



                            <div className="form-control mt-6 w-1/4">
                                <input type="submit" value="Order" className="btn btn-success text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Orderpage;