import { useGetAllGedgetQuery } from "../../Redux/api";


const Home = () => {
    const {data, error, isLoading} = useGetAllGedgetQuery('')

    if(isLoading){
        <div className="h-96 w-1/2 mx-auto">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    console.log(data)
    return (
        <div>
            This is home
        </div>
    );
};

export default Home;