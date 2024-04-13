
import { useGetAllGedgetQuery } from "../../Redux/api";
import GadgetCard from "./GadgetCard";
import Opendrawer from "./Opendrawer";
import { useAppSelector } from "../../Redux/hook";
import { ILaptop } from "../../Globaltypes/globaltypes";
import { useState } from "react";
import imgpic from '../../assets/offer img.jpg'
import { Flex, Spin } from "antd";


const AllGadget = () => {

    const { data, isLoading } = useGetAllGedgetQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 });


    const { priceRange, status, brand, modelNumber,category,os, connectivity,power,feature } = useAppSelector(state => state.product);
    const [searchQuery, setSearchQuery] = useState('');

    // console.log(brand, status, modelNumber);


    const datas = data?.filter((item: ILaptop) => item.status === true);

    let productsData = datas;
    // console.log(productsData);


    if (isLoading) {
        return (
            <div className="w-1/2 min-h-screen mx-auto h-1/2 flex justify-center items-center">
                <Flex align="center" gap="middle">
                    <Spin size="large"/>
                </Flex>
            </div>
        )
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



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2">
            <div className="lg:col-span-3 col-span-12 m-2">

            <img src={imgpic} alt="Shoes" className="rounded-xl h-[600px] mx-auto lg:mt-28" />
            </div>

            <div className="lg:col-span-9 col-span-12">
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

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center my-5">
                    {
                        filteredData?.map((gadget: any) => <GadgetCard key={gadget._id} gadget={gadget}></GadgetCard>)
                    }
                </div>
            </div>



        </div>
    );
};

export default AllGadget;