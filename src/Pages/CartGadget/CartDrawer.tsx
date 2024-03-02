import { useAppSelector } from "../../Redux/hook";
import CartGadget from "./CartGadget";

const CartDrawer = () => {
    const { product } = useAppSelector(state => state.cartgadget)
    return (
        <div className="">
            <div className="drawer drawer-end z-50">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-sm mt-1">
                        <lord-icon
                            src="https://cdn.lordicon.com/mfmkufkr.json"
                            colors="primary:#fff"
                            trigger="hover"
                            style={{width:"25px",height:"25px"}}>
                        </lord-icon>
                        <p>{product?product.length:''}</p>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[500px] min-h-full bg-base-200 text-base-content">
                        <CartGadget></CartGadget>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;