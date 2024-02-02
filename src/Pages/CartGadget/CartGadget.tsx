
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";
import CartGadgetCard from "./CartGadgetCard";


const CartGadget = () => {

    const { product } = useAppSelector(state => state.cartgadget)

    return (
        <div>
            <div>
                <button className="btn btn-lg">Hello</button>
            </div>
            {product?.map(item => <CartGadgetCard key={item._id} item={item}></CartGadgetCard>)}


            <div>
                <Link to='/orderpage' className="btn w-full bg-blue-600 text-white font-bold text-lg">
                    Proceed for Order
                </Link>

            </div>

        </div>
    );
};

export default CartGadget;