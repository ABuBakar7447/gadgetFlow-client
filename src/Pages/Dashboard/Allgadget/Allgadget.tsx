import { useState } from "react";
import { useGadgetDeleteMutation, useGetAllGedgetQuery } from "../../../Redux/api";
import UpdateGadget from "./UpdateGadget";
import { ILaptop } from "../../../Globaltypes/globaltypes";



const Allgadget = () => {
    const { data, error, isLoading } = useGetAllGedgetQuery('');
    const [gadgetDelete] = useGadgetDeleteMutation();
    const [proitem, setitem] = useState([])

    if (isLoading) {
        <div>
            ....loading
        </div>
    }

    const handleDelete = (id: string) => {
        console.log(id);
        gadgetDelete(id);

    }

    const handleitem = (item:any) =>{
        setitem(item)
    }
    return (
        <div>
            <div className="overflow-x-auto bg-gray-600 text-white">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                index
                            </th>
                            <th>Name</th>
                            <th>Brand & Price</th>
                            <th>Features</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data?.map((item: ILaptop, index:number) => <tr key={item.id}>
                            <th className="w-24">
                                {index + 1}
                            </th>
                            <td className="w-52">
                                <div className="flex items-center w-12 gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle  h-12">
                                            <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>

                                    </div>
                                </div>
                            </td>
                            <td className="w-48">
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    {item.modelNumber}

                                    <span className="badge badge-ghost badge-sm text-white p-3">${item.price}</span>
                                </div>

                            </td>
                            <td className="">
                                Ram {item.features.RAM}<br />
                                Storage: {item.features.storageCapacity}<br />
                                Processor: {item.features.processor}<br />

                            </td>
                            <th>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-error">Delete</button>
                            </th>

                            <th>

                                <button onClick={()=>handleitem(item)}>
                                    <label htmlFor="my_modal_6" className="btn">open modal</label>

                                </button>

                            </th>
                            
                        </tr>)
                        }

                    </tbody>
                    <UpdateGadget proitem={proitem}></UpdateGadget>
                </table>
            </div>
        </div>
    );
};

export default Allgadget;