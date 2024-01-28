import { useForm, SubmitHandler } from "react-hook-form"
import { useGadgetDataUpdataMutation } from "../../../Redux/api";

interface IFormInput {
    id: number;
    name: string;
    price: number;
    quantity: number;
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

const UpdateGadget = ({ proitem }) => {
    const [gadgetDataUpdata] = useGadgetDataUpdataMutation();

    const {_id} = proitem;

    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`



    const { register, handleSubmit } = useForm<IFormInput>()
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
                        id:proitem.id,
                        name:data.name,
                        price:data.price,
                        quantity:data.quantity,
                        releaseDate:data.releaseDate,
                        brand:data.brand,
                        modelNumber:data.modelNumber,
                        category:data.category,
                        operatingSystem:data.operatingSystem,
                        connectivity:data.connectivity,
                        powerSource:data.powerSource,
                        features:{
                            processor: data.features.processor,
                            RAM: data.features.RAM,
                            storageCapacity: data.features.storageCapacity,
                            screenSize: data.features.screenSize,
                        },
                        img:imgURL
                    }

                    console.log(product);
                    const datas = {
                        id: _id,
                        data: {product}
                    }

                    gadgetDataUpdata(datas)

                }
            })
    }

    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">

                    <img src={proitem.img} alt="" className=" w-[445px] h-[342px] object-cover" />
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Product Name</span>
                            </label>
                            <input defaultValue={proitem.name} className="bg-white input input-bordered" {...register("name", { required: true, maxLength: 20 })} />

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Price $</span>
                            </label>
                            <input defaultValue={proitem.price} className="bg-white input input-bordered" {...register("price", { required: true, maxLength: 20 })} />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Quantity</span>
                            </label>
                            <input defaultValue={proitem.quantity} className="bg-white input input-bordered" {...register("quantity", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Release Date</span>
                            </label>
                            <input defaultValue={proitem.releaseDate} className="bg-white input input-bordered" {...register("releaseDate", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Brand</span>
                            </label>
                            <input defaultValue={proitem.brand} className="bg-white input input-bordered" {...register("brand", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Model Number</span>
                            </label>
                            <input defaultValue={proitem.modelNumber} className="bg-white input input-bordered" {...register("modelNumber", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Category</span>
                            </label>
                            <input defaultValue={proitem.category} className="bg-white input input-bordered" {...register("category", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Operating System</span>
                            </label>
                            <input defaultValue={proitem.operatingSystem} className="bg-white input input-bordered" {...register("operatingSystem", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Connectivity</span>
                            </label>
                            <input defaultValue={proitem.connectivity} className="bg-white input input-bordered" {...register("connectivity", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Power Source</span>
                            </label>
                            <input defaultValue={proitem.powerSource} className="bg-white input input-bordered" {...register("powerSource", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Processor</span>
                            </label>
                            <input defaultValue={proitem?.features?.processor} className="bg-white input input-bordered" {...register("features.processor", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">RAM</span>
                            </label>
                            <input defaultValue={proitem?.features?.RAM} className="bg-white input input-bordered" {...register("features.RAM", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Storage Capacity</span>
                            </label>
                            <input defaultValue={proitem?.features?.storageCapacity} className="bg-white input input-bordered" {...register("features.storageCapacity", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-white">Screen Size</span>
                            </label>
                            <input defaultValue={proitem?.features?.screenSize} className="bg-white input input-bordered" {...register("features.screenSize", { required: true, maxLength: 20 })} />
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
                            <input type="submit" value="Update" className="btn bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                        </div>
                    </form>


                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateGadget;