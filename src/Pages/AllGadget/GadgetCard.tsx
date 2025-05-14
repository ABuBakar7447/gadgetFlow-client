import Swal from "sweetalert2";
import { ILaptop } from "../../Globaltypes/globaltypes";
import { addProduct } from "../../Redux/Feature/CartGadget/CartGadgetSlice";

import { useAppDispatch } from "../../Redux/hook";
import "./Styles.css";
import { Link } from "react-router-dom";

interface IProps {
  gadget: ILaptop;
}

import {
  Monitor,
  Cpu,
  MemoryStick,
  HardDrive,
  CalendarDays,
} from "lucide-react";

const GadgetCard = ({ gadget }: IProps) => {
  const { _id, name, brand, img } = gadget;
  const dispatch = useAppDispatch();

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

  return (
    <div className="">
      <div className="">
        <div className="card w-full max-w-sm mx-auto bg-[#1C2431] rounded-2xl shadow-lg transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform text-white hover:scale-[1.03] py-4">
          <figure className="px-6 pt-6">
            <img
              src={img}
              alt={name}
              className="rounded-xl w-full h-[200px] object-cover shadow"
            />
          </figure>
          <div className="p-5 text-left space-y-3">
            <h2 className="text-[17px] font-semibold text-primary text-center">
              
              {name} ||{brand}
            </h2>
            
            <ul className="text-sm  space-y-1">
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                {gadget.features.processor} Processor
              </li>
              <li className="flex items-center gap-2">
                <MemoryStick className="w-4 h-4" />
                {gadget.features.RAM} DDR4 3200Mhz RAM
              </li>
              <li className="flex items-center gap-2">
                <HardDrive className="w-4 h-4" />
                {gadget.features.storageCapacity} NVMe
              </li>
              <li className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                {gadget.features.screenSize} IPS Display with Full HD
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Released: {gadget.releaseDate}
              </li>
            </ul>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold text-primary">
                ${gadget.price}
              </span>
            </div>
          </div>

          

          <div className="flex justify-evenly w-full space-x-3">
            {/* Info Button */}
            <div className="group relative">
              <Link to={`/details/${_id}`}>
                <button className="hover:text-black">
                  <lord-icon
                    src="https://cdn.lordicon.com/yxczfiyc.json"
                    trigger="hover"
                    colors="primary:#38bdf8,secondary:#3b82f6"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </button>
              </Link>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100">
                Info
              </span>
            </div>

            {/* Add to Cart Button */}
            <div className="group relative">
              <button onClick={() => handleAdd(gadget)}>
                <lord-icon
                  src="https://cdn.lordicon.com/mfmkufkr.json"
                  trigger="hover"
                  colors="primary:#38bdf8,secondary:#3b82f6"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
              </button>
              <span className="absolute w-[64px] -top-8 left-1/2 -translate-x-1/2 scale-0 transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100">
                Add Cart
              </span>
            </div>

            {/* Wishlist Button */}
            <div className="group relative">
              <button>
                <lord-icon
                  src="https://cdn.lordicon.com/xyboiuok.json"
                  trigger="hover"
                  colors="primary:#38bdf8,secondary:#3b82f6"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
              </button>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100">
                Wishlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
