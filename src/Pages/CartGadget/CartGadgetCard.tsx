import Swal from "sweetalert2";
import { ILaptop } from "../../Globaltypes/globaltypes";
import { addProduct, deleteProduct, removeEntireProduct } from "../../Redux/Feature/CartGadget/CartGadgetSlice";
import { useAppDispatch } from "../../Redux/hook";

interface IProps {
    item: ILaptop;

}

const CartGadgetCard = ({ item }: IProps) => {

    const dispatch = useAppDispatch();

    // const handlechange = (items) => {
    //     console.log(items)
    //     dispatch(addProduct(item))
    //     // if (gadget.quantity > 1) {
    //     //     dispatch(addProduct(gadget));

    //     //     // const quantity = gadget.quantity - 1;
    //     //     // console.log(gadget, quantity);
    //     //     // const data = {
    //     //     //     id: gadget._id,
    //     //     //     data: { quantity }
    //     //     // }

    //     //     // gadgetquantityUpadate(data)

    //     // }
    //     // else {
    //     //     dispatch(addProduct(gadget));
    //     //     // const quantity = gadget.quantity - 1;
    //     //     // const data = {
    //     //     //     id: gadget._id,
    //     //     //     data: { status:false, quantity }
    //     //     // }

    //     //     // gadgetquantityUpadate(data)
    //     // }
    // }

    const handleTotalDelte = (items: any) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeEntireProduct(items))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="grid grid-cols-3 gap-5 my-5">
            <div>
                <img src={item.img} alt="" className="w-[100px], h-[100px] object-cover" />
            </div>
            <div>
                <p className="underline font-bold">{item.name}</p>
                <p>In Stock: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.addedquantity}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <button className="btn bg-white rounded-none px-5 hover:btn-ghost btn-sm text-[20px] font-bold text-black" onClick={() => dispatch(addProduct(item))}>
                    +
                </button>
                <button className="btn bg-white rounded-none px-5 hover:btn-ghost btn-sm text-[20px] font-bold text-black" onClick={() => dispatch(deleteProduct(item))}>
                    -
                </button>
                <button className="btn bg-red-600 rounded-none px-5 hover:btn-ghost btn-sm text-[16px] font-bold text-black" onClick={() =>handleTotalDelte(item)}>
                    X
                </button>
            </div>
        </div>
    );
};

export default CartGadgetCard;