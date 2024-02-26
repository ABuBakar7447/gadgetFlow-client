import Swal from "sweetalert2";
import { ILaptop } from "../../../Globaltypes/globaltypes";
import { addProduct } from "../../../Redux/Feature/CartGadget/CartGadgetSlice";
import { useAppDispatch } from "../../../Redux/hook";

interface IProps {
    item: ILaptop;

}

const ProductCard = ({ item }: IProps) => {
    const dispatch = useAppDispatch();

    const handleAdd = (item:any) =>{
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
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.img} alt="Shoes" className="w-full h-[250px] object-cover"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.brand}</h2>
                    <p>{item.name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary" onClick={() =>handleAdd(item)}>Add Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;