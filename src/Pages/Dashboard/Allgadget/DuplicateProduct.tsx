import { useForm, SubmitHandler } from "react-hook-form"
import { useGadgetDataAddMutation} from "../../../Redux/api";
import Swal from "sweetalert2";

interface IFormInput {
    id: number;
    name: string;
    price: string;
    quantity: string;
    releaseDate: string;
    brand: string;
    modelNumber: string;
    category: string;
    operatingSystem: string;
    connectivity: string[];
    powerSource: string;
    features: {
        processor: string;
        RAM: string;
        storageCapacity: string;
        screenSize: string;
    };
    img: string;
}



const DuplicateProduct = ({dupliproitem}:any) => {


    const [gadgetDataAdd] = useGadgetDataAddMutation()

    

    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`



    const { register, handleSubmit } = useForm<IFormInput>();


    const onSubmit: SubmitHandler<IFormInput> = (data) => {

        

        const formdata = new FormData();
        formdata.append('image', data.img[0])

        

        fetch(img_hosting_url, {
            method: 'POST',
            body: formdata
        })

            .then(res => res.json())
            .then(imgresponse => {


                if (imgresponse.success) {
                    const imgURL = imgresponse.data.display_url;


                    const product = {
                        id:dupliproitem.id,
                        name:data.name,
                        price:parseFloat(data.price),
                        quantity:parseInt(data.quantity),
                        releaseDate:data.releaseDate,
                        brand:data.brand,
                        modelNumber:data.modelNumber,
                        category:data.category,
                        operatingSystem:data.operatingSystem,
                        connectivity:[data.connectivity],
                        powerSource:data.powerSource,
                        features:{
                            processor: data.features.processor,
                            RAM: data.features.RAM,
                            storageCapacity: data.features.storageCapacity,
                            screenSize: data.features.screenSize,
                        },
                        img:imgURL?imgURL:dupliproitem.img,
                        status:true,
                        addedquantity:parseInt('0')
                    }

                    console.log(product);
                    
                    gadgetDataAdd({product})

                    Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your Product Added, Now close the modal",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                    

                }
            })
    }





    return (
        <div>
            
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">

                    <img src={dupliproitem.img} alt="" className=" w-[445px] h-[342px] object-cover" />
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Product Name</span>
                            </label>
                            <input defaultValue={dupliproitem.name} className="bg-white input input-bordered" {...register("name", { required: true, maxLength: 20 })} />

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Price $</span>
                            </label>
                            <input defaultValue={dupliproitem.price} className="bg-white input input-bordered" {...register("price", { required: true, maxLength: 20 })} />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Quantity</span>
                            </label>
                            <input type="number" defaultValue={dupliproitem.quantity} className="bg-white input input-bordered" {...register("quantity", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Release Date</span>
                            </label>
                            <input defaultValue={dupliproitem.releaseDate} className="bg-white input input-bordered" {...register("releaseDate", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Brand</span>
                            </label>
                            <input defaultValue={dupliproitem.brand} className="bg-white input input-bordered" {...register("brand", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Model Number</span>
                            </label>
                            <input defaultValue={dupliproitem.modelNumber} className="bg-white input input-bordered" {...register("modelNumber", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Category</span>
                            </label>
                            <input defaultValue={dupliproitem.category} className="bg-white input input-bordered" {...register("category", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Operating System</span>
                            </label>
                            <input defaultValue={dupliproitem.operatingSystem} className="bg-white input input-bordered" {...register("operatingSystem", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Connectivity</span>
                            </label>
                            <input defaultValue={dupliproitem.connectivity} className="bg-white input input-bordered" {...register("connectivity", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Power Source</span>
                            </label>
                            <input defaultValue={dupliproitem.powerSource} className="bg-white input input-bordered" {...register("powerSource", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Processor</span>
                            </label>
                            <input defaultValue={dupliproitem?.features?.processor} className="bg-white input input-bordered" {...register("features.processor", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">RAM</span>
                            </label>
                            <input defaultValue={dupliproitem?.features?.RAM} className="bg-white input input-bordered" {...register("features.RAM", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Storage Capacity</span>
                            </label>
                            <input defaultValue={dupliproitem?.features?.storageCapacity} className="bg-white input input-bordered" {...register("features.storageCapacity", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Screen Size</span>
                            </label>
                            <input defaultValue={dupliproitem?.features?.screenSize} className="bg-white input input-bordered" {...register("features.screenSize", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text text-black">Item Image*</span>
                            </label>
                            <input type="file"
                                {...register("img", { required: true })}
                                className="file-input bg-white text-black file-input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Duplicate Data" className="btn bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                        </div>
                    </form>


                    <div className="modal-action">
                        <label htmlFor="my_modal_7" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DuplicateProduct;