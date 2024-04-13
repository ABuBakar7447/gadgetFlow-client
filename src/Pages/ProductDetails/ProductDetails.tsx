import { useParams } from "react-router-dom";
import { useGetSingleGadgetDataQuery } from "../../Redux/api";
import { Flex, Spin } from "antd";


const ProductDetails = () => {

    const { id } = useParams();
    // console.log(id);

    const { data, isLoading } = useGetSingleGadgetDataQuery(id, { refetchOnMountOrArgChange: true, pollingInterval: 30000 });
    // console.log(data, isLoading);

    if (isLoading) {
        return (
            <div className="w-1/2 min-h-screen mx-auto h-1/2 flex justify-center items-center">
                <Flex align="center" gap="middle">
                    <Spin size="large" className="w-36 h-36"/>
                </Flex>
            </div>
        )
    }
    return (
        <div className="m-12">
            <div className="w-[500px] h-[500px]">
                <img src={data.img} alt="" className="w-full h-full" />
            </div>
        </div>
    );
};

export default ProductDetails;