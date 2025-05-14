import { useGetAllGedgetQuery } from "../../Redux/api";
import GadgetCard from "./GadgetCard";
import Opendrawer from "./Opendrawer";
import { useAppSelector } from "../../Redux/hook";
import { ILaptop } from "../../Globaltypes/globaltypes";
import { useState } from "react";
import { Flex, Spin } from "antd";

const AllGadget = () => {
  const { data, isLoading } = useGetAllGedgetQuery("", {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const {
    priceRange,
    status,
    brand,
    modelNumber,
    category,
    os,
    connectivity,
    power,
    feature,
  } = useAppSelector((state) => state.product);
  const [searchQuery, setSearchQuery] = useState("");

  // console.log(brand, status, modelNumber);

  const datas = data?.filter((item: ILaptop) => item.status === true);

  let productsData = datas;
  // console.log(productsData);

  if (status) {
    if (status && priceRange > 0) {
      productsData = datas?.filter(
        (item: { price: number }) => item.price < priceRange
      );
    } else {
      productsData = datas;
    }
  } else if (brand) {
    productsData = datas?.filter((item: { brand: string }) =>
      item.brand.toLowerCase().includes(brand.toLowerCase())
    );
  } else if (modelNumber) {
    productsData = datas?.filter((item: { modelNumber: string }) =>
      item.modelNumber.toLowerCase().includes(modelNumber.toLocaleLowerCase())
    );
  } else if (category) {
    productsData = datas?.filter((item: { category: string }) =>
      item.category.toLowerCase().includes(category.toLocaleLowerCase())
    );
  } else if (os) {
    productsData = datas?.filter((item: { operatingSystem: string }) =>
      item.operatingSystem.toLowerCase().includes(os.toLocaleLowerCase())
    );
  } else if (connectivity) {
    productsData = datas?.filter((item: { connectivity: string[] }) =>
      item?.connectivity?.some((conn) =>
        conn.toLowerCase().includes(connectivity.toLowerCase())
      )
    );
  } else if (power) {
    productsData = datas?.filter((item: { powerSource: string }) =>
      item.powerSource.toLowerCase().includes(power.toLocaleLowerCase())
    );
  } else if (feature) {
    productsData = datas?.filter((item: { features: { processor: string } }) =>
      item?.features?.processor
        ?.toLowerCase()
        .includes(feature.toLocaleLowerCase())
    );
  } else {
    productsData = datas;
  }

  const filteredData = searchQuery
    ? productsData?.filter((item: ILaptop) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : productsData;

  // console.log(filteredData);

  const itemsPerPage = 4; // Or however many items per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  if (isLoading) {
    return (
      <div className="w-1/2 min-h-screen mx-auto h-1/2 flex justify-center items-center">
        <Flex align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto lg:pt-[84px] py-8">
      <div className="lg:col-span-9 col-span-12 bg-[#101522] p-8 rounded-lg my-5">
        <div className="flex justify-center items-center my-8 px-5">
          <div className="lg:w-3/4 w-1/2 mr-2">
            {/* // searchBar// */}
            <input
              type="text"
              placeholder="Type here to search product"
              className="input input-bordered input-primary w-full lg:w-1/2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Opendrawer></Opendrawer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center my-5 ">
          {currentItems?.map((gadget: any) => (
            <GadgetCard key={gadget._id} gadget={gadget}></GadgetCard>
          ))}
        </div>
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
              currentPage === idx + 1 ? "bg-blue-700 text-white" : "bg-gray-200"
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
    </div>
  );
};

export default AllGadget;
