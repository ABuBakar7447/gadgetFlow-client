import Swal from "sweetalert2";
import { ILaptop } from "../../Globaltypes/globaltypes";
import { addProduct } from "../../Redux/Feature/CartGadget/CartGadgetSlice";

import { useAppDispatch } from "../../Redux/hook";
import { Card } from "antd";


interface IProps {
    gadget: ILaptop;
}

const GadgetCard = ({ gadget }: IProps) => {

    const { name, brand, modelNumber, operatingSystem, img } = gadget;
    const dispatch = useAppDispatch();

    const handleAdd = (gadget: any) => {
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
            {/* <div className="card card-compact w-[280px] h-[418px] text-black rounded-none shadow-xl border-2">
                <figure ><img src={img} alt="Shoes"  /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>{name} {brand} {modelNumber} {operatingSystem} {gadget.features.RAM} {gadget.features.storageCapacity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleAdd(gadget)}>Add Product</button>
                    </div>
                </div>
            </div> */}


            <Card
                className="bg-gray-100 border-4"
                hoverable
                style={{ width: 270, height: 400 }}
                cover={<img alt="example" src={img} className="h-56 border-b-2" />}
            >
                {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}

                <h2 className="font-bold card-title">{name}</h2>
                <p>{name} {brand} {modelNumber} {operatingSystem} {gadget.features.RAM} {gadget.features.storageCapacity}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleAdd(gadget)}>Add Product</button>
                </div>
            </Card>
        </div>
    );
};

export default GadgetCard;