import { useState } from "react";
import { useGadgetDeleteMutation, useGetAllGedgetQuery } from "../../../Redux/api";
import UpdateGadget from "./UpdateGadget";
import { ILaptop } from "../../../Globaltypes/globaltypes";
import Opendrawer from "../../AllGadget/Opendrawer";
import { useAppSelector } from "../../../Redux/hook";



const Allgadget = () => {
    const { data, isLoading } = useGetAllGedgetQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 });
    const [gadgetDelete] = useGadgetDeleteMutation();
    const [proitem, setitem] = useState([])

    if (isLoading) {
        <div>
            ....loading
        </div>
    }



    const { priceRange, status, brand, modelNumber, category, os, connectivity } = useAppSelector(state => state.product);
    const [searchQuery, setSearchQuery] = useState('');

    // console.log(brand, status, modelNumber);


    const datas = data?.filter((item: ILaptop) => item.status === true);

    let productsData = datas;
    // console.log(productsData);


    if (isLoading) {
        return (
            <div>
                ....Loading..Please Wait.
            </div>
        );
    }



    if (status) {
        if (status && priceRange > 0) {
            productsData = datas?.filter(
                (item: { price: number }) => item.price < priceRange
            );
        }
        else {
            productsData = datas;
        }
    }
    else if (brand) {
        productsData = datas?.filter(
            (item: { brand: string }) => item.brand.toLowerCase().includes(brand.toLowerCase()));
    }
    else if (modelNumber) {
        productsData = datas?.filter(
            (item: { modelNumber: string }) => item.modelNumber.toLowerCase().includes(modelNumber.toLocaleLowerCase()));
    }
    else if (category) {
        productsData = datas?.filter(
            (item: { category: string }) => item.category.toLowerCase().includes(category.toLocaleLowerCase()));
    }
    else if (os) {
        productsData = datas?.filter(
            (item: { operatingSystem: string }) => item.operatingSystem.toLowerCase().includes(os.toLocaleLowerCase()));
    }
    else if (connectivity) {
        productsData = datas?.filter(
            (item: { connectivity: string[] }) =>
                item?.connectivity?.some(conn => conn.toLowerCase().includes(connectivity.toLowerCase()))
        );
    }
    else {
        productsData = datas;
    }






    const filteredData = searchQuery
        ? productsData?.filter((item: ILaptop) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : productsData;

    // console.log(filteredData);



    const handleDelete = (id: string) => {
        console.log(id);
        gadgetDelete(id);

    }

    const handleitem = (item: any) => {
        setitem(item)
    }



    
    return (
        <div>
            <div className="flex justify-center items-center my-8 px-5">
                <div className="lg:w-3/4 w-1/2 mr-2">
                    {/* // searchBar// */}
                    <input
                        type="text"
                        placeholder="Type here to search product"
                        className="input input-bordered input-primary w-full lg:w-1/2"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
                <Opendrawer></Opendrawer>
            </div>
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
                        {filteredData?.map((item: ILaptop, index: number) => <tr key={item._id}>
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

                                <button onClick={() => handleitem(item)}>
                                    <label htmlFor="my_modal_6" className="btn">Update</label>

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