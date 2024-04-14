import { useParams } from "react-router-dom";
import { useGetSingleGadgetDataQuery } from "../../Redux/api";
import { Flex, Spin } from "antd";
import { useAppDispatch } from "../../Redux/hook";
import { addProduct } from "../../Redux/Feature/CartGadget/CartGadgetSlice";
import Swal from "sweetalert2";
import '../AllGadget/Styles.css'

const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    // console.log(id);

    const { data, isLoading } = useGetSingleGadgetDataQuery(id, { refetchOnMountOrArgChange: true, pollingInterval: 30000 });
    console.log(data, isLoading);

    if (isLoading) {
        return (
            <div className="w-1/2 min-h-screen mx-auto h-1/2 flex justify-center items-center">
                <Flex align="center" gap="middle">
                    <Spin size="large" className="w-36 h-36" />
                </Flex>
            </div>
        )
    }



    

    const handleAdd = (gadget: any) => {
        dispatch(addProduct(gadget));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div className="m-12 grid grid-cols-2">
            <div className="p-5 col-span-1">
                <img src={data.img} alt="" className="w-full h-full rounded-lg" />
            </div>

            <div className="col-span-1 p-5 border-2 rounded-2xl shadow-xl">
                <div className="text-black font-bold text-2xl">

                    <p>
                        {data.name} | {data.brand} | {data.modelNumber} | {data.operatingSystem} | {data.features.processor} | {data.features.RAM} | {data.features.storageCapacity} | {data.features.screenSize} | releases on {data.releaseDate} |
                    </p>

                </div>



                <ul className="list-disc text-black px-4 my-4 text-lg">
                    <li>{data.name}</li>
                    <li>{data.brand} Brand</li>
                    <li>Model Number, {data.modelNumber}</li>
                    <li>Installed Operating System, {data.operatingSystem}</li>
                    <li>Processor {data.features.processor} 3.7Ghz ( Turbo 5.0Ghz, Cache 24 MB ) – 14 Cores</li>
                    <li>RAM {data.features.RAM} (2x 8GB) SO-DIMM DDR5 RAM</li>
                    <li>NVMe M.2 2280 {data.features.storageCapacity}</li>
                    <li>{data.features.screenSize} WQXGA (2560×1600) IPS, Anti-glare, 100% sRGB, HDR400, G-SYNC*, Non Touchscreen Display</li>
                    <li>Network / Connectivity Technology / Port {data.connectivity.map((item: string, index: number) => <span key={index}> {item} </span>)}</li>
                    <li className="italic">Releases On, {data.releaseDate}</li>
                </ul>

                <p className="text-black font-bold text-[22px]">
                     In Stock: <span className="text-success">{data.quantity}</span>
                </p>

                <p className="text-orange-400 font-bold text-[22px]">
                    ${data.price}
                </p>

                


                <button className="mt-10 btn btn-success icon flex items-center justify-center hover:text-white font-bold text-[15px]" onClick={() => handleAdd(data)}>
                    Add to Cart
                    <lord-icon
                        src="https://cdn.lordicon.com/mfmkufkr.json"
                        trigger="hover"
                        class="current-color"
                        style={{ width: "25px", height: "25px" }}>
                    </lord-icon>
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;