import Swal from "sweetalert2";
import { ILaptop } from "../../Globaltypes/globaltypes";
import { addProduct } from "../../Redux/Feature/CartGadget/CartGadgetSlice";

import { useAppDispatch } from "../../Redux/hook";

interface IProps {
    gadget: ILaptop;
}

const GadgetCard = ({ gadget }: IProps) => {

    const { name, brand, modelNumber, operatingSystem, img } = gadget;
    const dispatch = useAppDispatch();

    const handleAdd = (gadget:any) =>{
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
        <div>
            <div className="card card-compact w-[280px] h-[418px] text-black rounded-none shadow-xl border-2">
                <figure ><img src={img} alt="Shoes" className="w-full h-[250px] object-fill border-b-2" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>{name} {brand} {modelNumber} {operatingSystem} {gadget.features.RAM} {gadget.features.storageCapacity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleAdd(gadget)}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetCard;