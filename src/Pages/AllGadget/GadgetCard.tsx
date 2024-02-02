import { ILaptop } from "../../Globaltypes/globaltypes";
import { addProduct } from "../../Redux/Feature/CartGadget/CartGadgetSlice";
import { useGadgetquantityUpadateMutation } from "../../Redux/api";
import { useAppDispatch } from "../../Redux/hook";

interface IProps {
    gadget: ILaptop;
}

const GadgetCard = ({ gadget }: IProps) => {

    const { name, price, quantity, releaseDate, brand, modelNumber, category, operatingSystem, connectivity, powerSource, img } = gadget;
    const dispatch = useAppDispatch();
    const [gadgetquantityUpadate] = useGadgetquantityUpadateMutation()

    // const handlechange = ({ gadget }: IProps) => {
    //     if (gadget.quantity > 1) {
    //         dispatch(addProduct(gadget));

    //         // const quantity = gadget.quantity - 1;
    //         // console.log(gadget, quantity);
    //         // const data = {
    //         //     id: gadget._id,
    //         //     data: { quantity }
    //         // }

    //         // gadgetquantityUpadate(data)

    //     }
    //     else {
    //         dispatch(addProduct(gadget));
    //         const quantity = gadget.quantity - 1;
    //         const data = {
    //             id: gadget._id,
    //             data: { status:false, quantity }
    //         }

    //         gadgetquantityUpadate(data)
    //     }
    // }
    return (
        <div>
            <div className="card card-compact w-[280px] h-[418px] text-black rounded-none shadow-xl border-2">
                <figure ><img src={img} alt="Shoes" className="w-full h-[250px] object-fill border-b-2" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>{brand} {modelNumber} {operatingSystem}{gadget.features.RAM} {gadget.features.storageCapacity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => dispatch(addProduct(gadget))}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetCard;