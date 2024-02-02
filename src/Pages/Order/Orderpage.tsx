import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../Redux/hook";
import ProductTable from "./ProductTable";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useGadgetquantityUpadateMutation, useSellsdataMutation } from "../../Redux/api";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


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
                const data = {
                    id: item._id,
                    data: { status: false, quantity }
                }

                gadgetquantityUpadate(data)
            }
        })

        const newdata = {
            data:{
                product:product,
                name:data.name,
                email:data.email,
                date:selected
            }
        }
        console.log(newdata);
        sellsdata(newdata);



    }
    return (
        <div>
            <div>
                <p className="text-center text-5xl font-serif text-yellow-500">
                    Product Order List
                </p>
                <div>
                    <div className="overflow-x-auto bg-gray-600 text-white">
                        <table className="table">
                            {/* head */}
                            <thead className="text-white text-[16px]">
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Product Name</th>
                                    <th>Brand & Model</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                product.map((item, index) =>


                                    <tbody>
                                        <ProductTable key={item._id} item={item} index={index}></ProductTable>
                                    </tbody>
                                )
                            }

                        </table>
                    </div>

                </div>
            </div>


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
                        <input type="email" defaultValue={user?.email} className="bg-white input input-bordered" {...register("email", { required: true, maxLength: 20 })}  />

                    </div>


                    <DayPicker
                        mode="single"
                        selected={selected}
                        onDayClick={setSelected}
                    className="text-black"  
                    />
                    <p className="text-black">You picked {format(selected, 'PP')}.</p>



                    <div className="form-control mt-6">
                        <input type="submit" value="Login" className="btn bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Orderpage;