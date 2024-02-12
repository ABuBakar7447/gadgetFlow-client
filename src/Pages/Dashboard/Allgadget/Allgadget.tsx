import { useState } from "react";
import { useGadgetDeleteMutation, useGetAllGedgetQuery } from "../../../Redux/api";
import UpdateGadget from "./UpdateGadget";
import { ILaptop } from "../../../Globaltypes/globaltypes";
import Opendrawer from "../../AllGadget/Opendrawer";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { addProductId } from "../../../Redux/Feature/BulkDelete/BulkDeleteSlice";
import DuplicateProduct from "./DuplicateProduct";
interface ifeature {
    feature: {
        processore: string
    }
}


const Allgadget = () => {
    const { data, isLoading } = useGetAllGedgetQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 });
    const [gadgetDelete] = useGadgetDeleteMutation();
    const [proitem, setitem] = useState([])
    const [dupliproitem, setdupliproitem] = useState([])

    const dispatch = useAppDispatch()




    if (isLoading) {
        <div>
            ....loading
        </div>
    }


    const { productId } = useAppSelector(state => state.productsId)
    const { priceRange, status, brand, modelNumber, category, os, connectivity, power, feature } = useAppSelector(state => state.product);
    const [searchQuery, setSearchQuery] = useState('');

    // console.log(brand, status, modelNumber);


    const datas = data?.filter((item: ILaptop) => item.status === true);

    let productsData = datas;
    // console.log(feature);


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
    else if (power) {
        productsData = datas?.filter(
            (item: {powerSource : string }) => 
            item.powerSource.toLowerCase().includes(power.toLocaleLowerCase())
        );
    }
    else if (feature) {
        productsData = datas?.filter(
            (item: {features:{processor : string} }) => 
            item?.features?.processor?.toLowerCase().includes(feature.toLocaleLowerCase())
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
    const handledupliitem = (item: any) => {
        setdupliproitem(item)
    }


    const handleBulkDelete = (ids: string[]): void => {
        ids.map(item => {
            console.log(item)
            gadgetDelete(item)
        })
    }





    return (
        <div>
            <div className="flex flex-col my-8 px-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Type here to search product"
                        className="input input-bordered input-primary w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <Opendrawer />
            </div>

            <div className="overflow-x-auto bg-gray-600 text-white">
                <table className="table w-full">
                    {/* Head */}
                    <thead className="text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Brand & Price</th>
                            <th>Features</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData?.map((item: ILaptop, index: number) => (
                            <tr key={item._id}>
                                <th className="w-16 flex items-center gap-2">
                                    {index + 1}
                                    <div className="form-control" onClick={() => dispatch(addProductId(item._id))}>
                                        <label className="label cursor-pointer">
                                            <span className="label-text"></span>
                                            <input type="checkbox" className="checkbox checkbox-primary border-2" />
                                        </label>
                                    </div>
                                </th>

                                <td className="w-1/3 lg:w-1/4">
                                    <div className="flex items-center w-full gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12">
                                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="w-1/2 lg:w-1/4">
                                    <div className="flex flex-col gap-2">
                                        {item.modelNumber}
                                        <span className="badge badge-ghost badge-sm text-white p-3">${item.price}</span>
                                    </div>
                                </td>

                                <td className="lg:w-1/4">
                                    Ram {item.features.RAM}<br />
                                    Storage: {item.features.storageCapacity}<br />
                                    Processor: {item.features.processor}<br />
                                </td>

                                <th className="w-1/6 lg:w-1/12">
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-error">Delete</button>
                                </th>

                                <th className="w-1/6 lg:w-1/12">
                                    <button onClick={() => handleitem(item)}>
                                        <label htmlFor="my_modal_6" className="btn">Update</label>
                                    </button>
                                </th>

                                <th className="w-1/6 lg:w-1/12">
                                    <button onClick={() => handledupliitem(item)}>
                                        <label htmlFor="my_modal_7" className="btn">Create Variant</label>
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="text-center my-12">
                <button className="btn btn-md btn-primary" onClick={() => handleBulkDelete(productId)}>
                    Delete Selected Item
                </button>
            </div>

            <UpdateGadget proitem={proitem} />
            <DuplicateProduct dupliproitem={dupliproitem} />
        </div>

    );
};

export default Allgadget;