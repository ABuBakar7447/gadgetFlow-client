
import { useGetAllGedgetQuery } from "../../Redux/api";
import GadgetCard from "./GadgetCard";
import Opendrawer from "./Opendrawer";
import { useAppSelector } from "../../Redux/hook";
import { ILaptop } from "../../Globaltypes/globaltypes";


const AllGadget = () => {

    const { data, isLoading } = useGetAllGedgetQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 });


    const { priceRange, status } = useAppSelector(state => state.product)

    const datas  = data?.filter((item:ILaptop)=> item.status === true);



    if (isLoading) {
        return (
            <div>
                ....Loading..Please Wait.
            </div>
        );
    }

    let productsData = datas;

    if (status) {
        if (status) {
            productsData = datas?.filter(
                (item: { status: boolean; price: number }) =>
                    item.status === true && item.price < priceRange
            );
        } else if (priceRange > 0) {
            productsData = datas?.filter(
                (item: { price: number }) => item.price < priceRange
            );
        } else {
            productsData = datas;
        }
    } else {
        productsData = datas;
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            <div className="col-span-3">

                Hello
            </div>

            <div className="col-span-9">
                
                <Opendrawer></Opendrawer>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                    {
                        productsData?.map((gadget: any) => <GadgetCard key={gadget._id} gadget={gadget}></GadgetCard>)
                    }
                </div>
            </div>


            
        </div>
    );
};

export default AllGadget;