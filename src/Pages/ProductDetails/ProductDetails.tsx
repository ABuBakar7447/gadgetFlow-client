import { Link, useParams } from "react-router-dom";
import {
  useGetAllGedgetQuery,
  useGetSingleGadgetDataQuery,
} from "../../Redux/api";
import { Flex, Spin } from "antd";
import { useAppDispatch } from "../../Redux/hook";
import { addProduct } from "../../Redux/Feature/CartGadget/CartGadgetSlice";
import Swal from "sweetalert2";
import "../AllGadget/Styles.css";

import {
  Cpu,
  Monitor,
  Database,
  MemoryStick,
  Smartphone,
  Tag,
  PackageSearch,
} from "lucide-react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { ILaptop } from "../../Globaltypes/globaltypes";
import ProductCard from "../Home/Product/ProductCard";
import LimitedTimeOffers from "../Home/LimitedOffer/LimitedTimeOffers";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  // console.log(id);

  const { data, isLoading } = useGetSingleGadgetDataQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log("data", data?.connectivity, isLoading);

  const { data: products } = useGetAllGedgetQuery("", {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const suggestedProducts = products?.filter(
    (product: any) => product._id !== data?._id
  );
  //   console.log('suggestproduct', suggestedProducts);

  const handleAdd = (gadget: any) => {
    dispatch(addProduct(gadget));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const itemsPerPage = 4; // Or however many items per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(suggestedProducts?.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = suggestedProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  if (isLoading) {
    return (
      <div className="w-1/2 min-h-screen mx-auto h-1/2 flex justify-center items-center">
        <Flex align="center" gap="middle">
          <Spin size="large" className="w-36 h-36" />
        </Flex>
      </div>
    );
  }

  return (
    <div>
      <div className="m-12 grid grid-cols-2 pt-[84px] gap-5 text-white">
        <div className="lg:col-span-1 col-span-2 h-[510px]">
          <img src={data.img} alt="" className="w-full h-full rounded-lg" />
        </div>

        <div className="lg:col-span-1 col-span-2 p-4  shadow-xl h-[510px] bg-[#101522] rounded-xl">
          <div className="text-2xl font-bold text-blue-500 mb-2 flex items-center gap-2">
            <Tag className="text-blue-500" />
            <p>
              {data.name} | {data.brand} | {data.modelNumber}
            </p>
          </div>

          <ul className="text-lg text-whitegray-700 space-y-2 mb-3 px-4">
            <li className="flex items-center gap-2">
              <Smartphone size={18} /> {data.name}
            </li>
            <li className="flex items-center gap-2">
              <Tag size={18} /> {data.brand} Brand
            </li>
            <li className="flex items-center gap-2">
              <PackageSearch size={18} /> Model: {data.modelNumber}
            </li>
            <li className="flex items-center gap-2">
              <Cpu size={18} /> Processor: {data.features.processor}
            </li>
            <li className="flex items-center gap-2">
              <MemoryStick size={18} /> RAM: {data.features.RAM}
            </li>
            <li className="flex items-center gap-2">
              <Database size={18} /> Storage: {data.features.storageCapacity}
            </li>
            <li className="flex items-center gap-2">
              <Monitor size={18} /> Display: {data.features.screenSize}
            </li>
            <li className="flex items-center gap-2">
              <Cpu size={18} /> OS: {data.operatingSystem}
            </li>
          </ul>

          <p className="text-white font-bold text-[22px]">
            In Stock: <span className="text-success">{data.quantity}</span>
          </p>

          <p className="text-blue-500 font-bold text-[22px]">${data.price}</p>

          <button
            className="mt-2 btn btn-outline btn-sm bg-[#00C2FF] hover:bg-[#00F0FF] text-[#0A0F1C] flex items-center gap-2 "
            onClick={() => handleAdd(data)}
          >
            Add to Cart
            <lord-icon
              src="https://cdn.lordicon.com/mfmkufkr.json"
              trigger="hover"
              class="current-color"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </button>
        </div>
      </div>

      {/* //suggested product\\ */}
      <div>
        <div className="p-5 m-5 flex flex-col justify-center items-center mx-auto">
          <SectionTitle text="Suggested Products"></SectionTitle>
          

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-11/12 rounded-xl bg-[#101522] lg:p-16">
            {currentItems?.map((item: ILaptop) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === idx + 1
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
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
      </div>

      <LimitedTimeOffers></LimitedTimeOffers>
    </div>
  );
};

export default ProductDetails;
