import Swal from "sweetalert2";
import { ILaptop } from "../../../Globaltypes/globaltypes";
import { addProduct } from "../../../Redux/Feature/CartGadget/CartGadgetSlice";
import { useAppDispatch } from "../../../Redux/hook";
import '../../../Styles/styless.css'

interface IProps {
    item: ILaptop;

}

const ProductCard = ({ item }: IProps) => {
    const dispatch = useAppDispatch();

    const handleAdd = (item: any) => {
        dispatch(addProduct(item));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Product Added To Cart",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div>

            <div className="card w-96 mx-auto bg-slate-50 hover:bg-slate-300 shadow-inner">
                <figure className="px-10 pt-10">
                    <img src={item.img} alt="Shoes" className="rounded-xl w-full h-[250px] object-cover transitions" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black">{item.brand}</h2>
                    <p className="text-black">{item.name}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-outline transitions"
                        
                        onClick={() => handleAdd(item)}>Add Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;