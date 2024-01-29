
import { useGetAllGedgetQuery } from "../../Redux/api";
import GadgetCard from "./GadgetCard";
import Opendrawer from "./Opendrawer";
import { useAppSelector } from "../../Redux/hook";


const AllGadget = () => {

    const { data, isLoading } = useGetAllGedgetQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 });


    const { priceRange, status } = useAppSelector(state => state.product)


    


    if (isLoading) {
        return (
            <div>
                ....Loading..Please Wait.
            </div>
        );
    }

    let productsData=data;

    if (status) {
        if (status) {
            productsData = data?.filter(
                (item: { status: boolean; price: number }) =>
                    item.status === true && item.price < priceRange
            );
        } else if (priceRange > 0) {
            productsData = data?.filter(
                (item: { price: number }) => item.price < priceRange
            );
        } else {
            productsData = data;
        }
    } else {
        productsData = data;
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            <div className="col-span-4">

                <Opendrawer></Opendrawer>
            </div>

            <div className="col-span-8">
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