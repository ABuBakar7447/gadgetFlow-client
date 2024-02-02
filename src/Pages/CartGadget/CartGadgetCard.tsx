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

    return (
        <div className="grid grid-cols-3 gap-5">
            <div>
                <img src={item.img} alt="" className="w-[100px], h-[100px] object-cover" />
            </div>
            <div>
                <p className="underline font-bold">{item.name}</p>
                <p>In Stock: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.addedquantity}</p>
            </div>
            <div>
                <button className="btn btn-lg text-4xl" onClick={() =>dispatch(addProduct(item))}>
                    +
                </button>
                <button className="btn btn-lg text-4xl" onClick={() => dispatch(deleteProduct(item))}>
                    -
                </button>
                <button className="btn btn-lg text-4xl" onClick={() => dispatch(removeEntireProduct(item))}>
                    X
                </button>
            </div>
        </div>
    );
};

export default CartGadgetCard;