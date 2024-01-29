import { ILaptop } from "../../Globaltypes/globaltypes";

interface IProps {
    gadget: ILaptop;
  }

const GadgetCard = ({gadget}:IProps) => {

    const{name,price,quantity,releaseDate,brand,modelNumber,category,operatingSystem,connectivity,powerSource,img} =gadget;
    return (
        <div>
            <div className="card card-compact w-[280px] h-[418px] text-black rounded-none shadow-xl border-2">
                <figure ><img src={img} alt="Shoes" className="w-full h-[250px] object-fill border-b-2" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>{brand} {modelNumber} {operatingSystem}{gadget.features.RAM} {gadget.features.storageCapacity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetCard;