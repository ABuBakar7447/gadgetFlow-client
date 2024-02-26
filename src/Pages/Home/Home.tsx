import { useGetAllGedgetQuery } from "../../Redux/api";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Product from "./Product/Product";
import Service from "./Service/Service";


const Home = () => {
    const {data, isLoading} = useGetAllGedgetQuery('')

    if(isLoading){
        <div className="h-96 w-1/2 mx-auto">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Product></Product>
            <Contact></Contact>
        </div>
    );
};

export default Home;