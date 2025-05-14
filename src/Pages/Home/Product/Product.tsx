import { Link } from "react-router-dom";
import { ILaptop } from "../../../Globaltypes/globaltypes";
import { useGetAllGedgetQuery } from "../../../Redux/api";
import ProductCard from "./ProductCard";
import "../../../Styles/styless.css";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Flex, Spin } from "antd";

const Product = () => {
  const { data, isLoading } = useGetAllGedgetQuery("");

  if (isLoading) {
    <div className="h-96 w-1/2 mx-auto">
      <span className="loading loading-dots loading-lg"></span>
    </div>;
  }
  return (
    <div className="p-5 m-5 flex flex-col justify-center items-center mx-auto">
      <SectionTitle text="Our Popular Products"></SectionTitle>
      <div className="w-11/12 rounded-xl bg-[#101522] lg:p-16">
        {data?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              {data?.slice(0, 4).map((item: ILaptop) => (
                <ProductCard key={item._id} item={item}></ProductCard>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="w-1/2 mx-auto h-1/2 flex justify-center items-center">
              <Flex align="center" gap="middle">
                <Spin size="large" className="w-36 h-36" />
              </Flex>
            </div>
          </>
        )}
      </div>

      <Link to="/allgadget">
        <button
          className="btn btn-outline bg-[#00C2FF] hover:bg-[#00F0FF] text-[#0A0F1C]
 mt-5 transitions"
        >
          See All
        </button>
      </Link>
    </div>
  );
};

export default Product;
