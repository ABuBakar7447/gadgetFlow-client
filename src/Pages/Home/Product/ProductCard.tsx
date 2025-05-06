import Swal from "sweetalert2";
import { ILaptop } from "../../../Globaltypes/globaltypes";
import { addProduct } from "../../../Redux/Feature/CartGadget/CartGadgetSlice";
import { useAppDispatch } from "../../../Redux/hook";
import "../../../Styles/styless.css";
import {
  ShoppingCart,
  BadgeCheck,
  Monitor,
  Cpu,
  MemoryStick,
  HardDrive,
  CalendarDays,
} from "lucide-react";

interface IProps {
  item: ILaptop;
}

const ProductCard = ({ item }: IProps) => {
  console.log(item);
  const dispatch = useAppDispatch();

  const handleAdd = (item: any) => {
    dispatch(addProduct(item));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Product Added To Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div
      className="card w-full max-w-sm mx-auto bg-[#1C2431] rounded-xl shadow-lg shadow-[#00C2FF33]hover:shadow-[#00F0FF66] 
       shadow-[#00C2FF33] hover:shadow-[#00F0FF66] transition duration-300 hover:scale-[1.02] text-white"
    >
      <figure className="px-6 pt-6">
        <img
          src={item.img}
          alt={item.name}
          className="rounded-xl w-full h-[200px] object-cover shadow"
        />
      </figure>
      <div className="card-body text-left space-y-3">
        <h2 className="card-title text-lg font-semibold text-primary flex items-center gap-2">
          <BadgeCheck className="w-5 h-5 text-green-500" />
          {item.brand}
        </h2>
        <p className="font-medium">{item.name}</p>
        <ul className="text-sm  space-y-1">
          <li className="flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            {item.features.processor}
          </li>
          <li className="flex items-center gap-2">
            <MemoryStick className="w-4 h-4" />
            {item.features.RAM}
          </li>
          <li className="flex items-center gap-2">
            <HardDrive className="w-4 h-4" />
            {item.features.storageCapacity}
          </li>
          <li className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            {item.features.screenSize}
          </li>
          <li className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Released: {item.releaseDate}
          </li>
        </ul>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-primary">${item.price}</span>
          <button
            className="btn btn-outline btn-sm bg-[#00C2FF] hover:bg-[#00F0FF] text-[#0A0F1C] flex items-center gap-2 "
            onClick={() => handleAdd(item)}
          >
            <ShoppingCart className="w-4 h-4" />
            Add Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
