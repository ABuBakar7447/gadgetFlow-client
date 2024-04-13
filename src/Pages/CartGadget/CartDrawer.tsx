import { useState } from "react";
import { useAppSelector } from "../../Redux/hook";
import CartGadget from "./CartGadget";
import { Drawer } from "antd";

const CartDrawer = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    const { product } = useAppSelector(state => state.cartgadget)


    return (
        <div className="">
           
            <div onClick={showDrawer} className="flex justify-start items-center gap-2">
                <span className="lg:hidden md:hidden">Cart Item</span>
                <lord-icon
                    src="https://cdn.lordicon.com/mfmkufkr.json"
                    colors="primary:#fff"
                    trigger="hover"
                    style={{ width: "25px", height: "25px" }}>
                </lord-icon>
                <p>{product ? product.length : ''}</p>
            </div>
            <Drawer title="Cart Items" placement={'right'} onClose={onClose} open={open} width={420}>
                <CartGadget></CartGadget>
            </Drawer>
        </div>
    );
};

export default CartDrawer;