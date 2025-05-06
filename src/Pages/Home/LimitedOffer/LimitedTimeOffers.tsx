import { useEffect, useState } from "react";
import { Flame, ShoppingCart, BadgePercent } from "lucide-react";
import { useGetAllGedgetQuery } from "../../../Redux/api";
import { useAppDispatch } from "../../../Redux/hook";
import { addProduct } from "../../../Redux/Feature/CartGadget/CartGadgetSlice";
import Swal from "sweetalert2";

const LimitedTimeOffers = () => {
  const { data: product, isLoading } = useGetAllGedgetQuery("");
  const dispatch = useAppDispatch()

  if (isLoading) {
    <div className="h-96 w-1/2 mx-auto">
      <span className="loading loading-dots loading-lg"></span>
    </div>;
  }
  const offerProducts = product?.filter((product: any) => product.id % 2 !== 0);

  const calculateTimeLeft = () => {
    const difference = +new Date("2025-06-10T23:59:59") - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const handleAdd = (product: any, discountedPrice:any) => {
    product = { ...product, price: discountedPrice };
    console.log(product);
    
      dispatch(addProduct(product));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    };//   const product = {
  //     img: "https://i.ibb.co/5nz0bTK/electronic-device-balancing-concept.jpg",
  //     name: "Laptop ABC",
  //     brand: "XYZ Technologies",
  //     price: 1299.99,
  //     discount: 999.99,
  //   };

  return (
    <div className="bg-[#101522] w-[90%] mx-auto py-12 px-4 rounded-lg shadow-inner">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-red-600 flex justify-center items-center gap-2">
          <Flame className="text-red-500" />
          Limited-Time Offers
        </h2>
        <p className="mb-6 text-white">
          Hurry! These hot deals won’t last long.
        </p>

        <div className="flex justify-center gap-4 mb-8 text-white font-bold text-sm">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={index}
              className="bg-red-600 rounded-md px-4 py-2 shadow-md"
            >
              <span className="text-lg">{value}</span>
              <div className="uppercase text-xs">{unit}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerProducts?.map((product: any, index:number) => {
            const discountedPrice = (product.price * 0.8).toFixed(2); // 20% off
            return (
              <div
                key={index}
                className="card w-full max-w-sm mx-auto bg-[#1C2431] rounded-xl shadow-lg shadow-[#00C2FF33]
hover:shadow-[#00F0FF66] transition duration-300 hover:scale-[1.02] text-white"
              >
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <BadgePercent className="w-4 h-4" />
                  20% OFF
                </div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full mx-auto rounded-xl h-48 object-cover"
                />
                <div className="p-5 text-left space-y-2">
                  <h3 className="text-lg font-semibold text-red-700">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xl font-bold text-green-600">
                      ${discountedPrice}
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <button className="btn btn-primary btn-sm mt-3 flex items-center gap-2" onClick={() => handleAdd(product, discountedPrice)}>
                    <ShoppingCart className="w-4 h-4" />
                    Grab Deal
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOffers;
