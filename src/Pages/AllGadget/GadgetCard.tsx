import Swal from "sweetalert2";
import { ILaptop } from "../../Globaltypes/globaltypes";
import { addProduct } from "../../Redux/Feature/CartGadget/CartGadgetSlice";

import { useAppDispatch } from "../../Redux/hook";
import './Styles.css'
import { Link } from "react-router-dom";


interface IProps {
    gadget: ILaptop;
}

const GadgetCard = ({ gadget }: IProps) => {

    const { _id,name, brand, modelNumber, operatingSystem, img } = gadget;
    const dispatch = useAppDispatch();

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
        <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 my-5">
            <div className=" w-[280px] h-[420px] border-2 rounded-lg p-3 flex flex-col justify-start gap-5 items-center hover:shadow-2xl">
                <div>
                    <img src={img} alt="" className="w-[270px] h-[180px] object-cover rounded-lg" />
                </div>

                <div className="font-semibold h-[140px]">
                    <h2 className="font-bold text-2xl text-center my-3 text-success">{name}</h2>
                    <p className="text-black">{name} | {brand} {modelNumber} | {operatingSystem} | {gadget.features.RAM} | {gadget.features.storageCapacity}</p>
                </div>

                <div className="flex justify-evenly w-full">
                    <Link to={`/details/${_id}`}>
                        <button className="hover:text-black">
                            <lord-icon
                                src="https://cdn.lordicon.com/yxczfiyc.json"
                                trigger="hover"
                                style={{ width: "25px", height: "25px" }}>
                            </lord-icon>
                        </button>
                    </Link>
                    <button className="icon" onClick={() => handleAdd(gadget)}>
                        <lord-icon
                            src="https://cdn.lordicon.com/mfmkufkr.json"
                            trigger="hover"
                            class="current-color"
                            style={{ width: "25px", height: "25px" }}>
                        </lord-icon>
                    </button>
                    <button className="">
                        <lord-icon
                            src="https://cdn.lordicon.com/xyboiuok.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}>
                        </lord-icon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GadgetCard;