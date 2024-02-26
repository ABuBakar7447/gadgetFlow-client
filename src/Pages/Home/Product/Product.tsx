import { Link } from "react-router-dom";
import { ILaptop } from "../../../Globaltypes/globaltypes";
import { useGetAllGedgetQuery } from "../../../Redux/api";
import ProductCard from "./ProductCard";


const Product = () => {
    const { data, isLoading } = useGetAllGedgetQuery('')

    if (isLoading) {
        <div className="h-96 w-1/2 mx-auto">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    return (
        <div className="p-5 m-5 flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    data?.slice(0, 3).map((item: ILaptop) => <ProductCard key={item._id} item={item}></ProductCard>)
                }
            </div>

            <Link to='/allgadget'><button className="btn btn-outline btn-primary mt-5">See All</button></Link>
        </div>
    );
};

export default Product;