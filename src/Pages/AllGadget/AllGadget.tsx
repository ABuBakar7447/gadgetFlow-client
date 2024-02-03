
import { useGetAllGedgetQuery } from "../../Redux/api";
import GadgetCard from "./GadgetCard";
import Opendrawer from "./Opendrawer";
import { useAppSelector } from "../../Redux/hook";
import { ILaptop } from "../../Globaltypes/globaltypes";
import { useState } from "react";


const AllGadget = () => {

    const { data, isLoading } = useGetAllGedgetQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 });


    const { priceRange, status, brand, modelNumber,category,os, connectivity } = useAppSelector(state => state.product);
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
    
    else {
        productsData = datas;
    }






    const filteredData = searchQuery
        ? productsData?.filter((item: ILaptop) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : productsData;

    // console.log(filteredData);



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            <div className="col-span-3">

                Hello
            </div>

            <div className="col-span-9">
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

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                    {
                        filteredData?.map((gadget: any) => <GadgetCard key={gadget._id} gadget={gadget}></GadgetCard>)
                    }
                </div>
            </div>



        </div>
    );
};

export default AllGadget;