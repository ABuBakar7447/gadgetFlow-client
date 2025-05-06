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
  
  BadgeCheck,
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
    <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 my-5">
      <div className="">
        <div className="card w-full max-w-sm mx-auto bg-[#1C2431] rounded-xl shadow-lg shadow-[#00C2FF33]hover:shadow-[#00F0FF66] shadow-[#00C2FF33] hover:shadow-[#00F0FF66] transition duration-300 hover:scale-[1.02] text-white">
          <figure className="px-6 pt-6">
            <img
              src={img}
              alt={name}
              className="rounded-xl w-full h-[200px] object-cover shadow"
            />
          </figure>
          <div className="card-body text-left space-y-3">
            <h2 className="card-title text-lg font-semibold text-primary flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-green-500" />
              {brand}
            </h2>
            <p className="font-medium">{name}</p>
            <ul className="text-sm  space-y-1">
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                {gadget.features.processor}
              </li>
              <li className="flex items-center gap-2">
                <MemoryStick className="w-4 h-4" />
                {gadget.features.RAM}
              </li>
              <li className="flex items-center gap-2">
                <HardDrive className="w-4 h-4" />
                {gadget.features.storageCapacity}
              </li>
              <li className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                {gadget.features.screenSize}
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

          {/* <div className="flex justify-evenly w-full">
            <Link to={`/details/${_id}`}>
              <button className="hover:text-black">
                <lord-icon
                  src="https://cdn.lordicon.com/yxczfiyc.json"
                  trigger="hover"
                  color=""
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
              </button>
            </Link>
            <button className="icon" onClick={() => handleAdd(gadget)}>
              <lord-icon
                src="https://cdn.lordicon.com/mfmkufkr.json"
                trigger="hover"
                class="current-color"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
            </button>
            <button className="">
              <lord-icon
                src="https://cdn.lordicon.com/xyboiuok.json"
                trigger="hover"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
            </button>
          </div> */}

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
