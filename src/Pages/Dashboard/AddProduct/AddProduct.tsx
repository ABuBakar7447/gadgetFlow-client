import { useForm, SubmitHandler } from "react-hook-form"
import { useGadgetDataAddMutation } from "../../../Redux/api";


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

const AddProduct = () => {
    const [gadgetDataAdd] = useGadgetDataAddMutation()

    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        

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
                        
                        name: data.name,
                        price: parseFloat(data.price),
                        quantity: parseInt(data.quantity),
                        releaseDate: data.releaseDate,
                        brand: data.brand,
                        modelNumber: data.modelNumber,
                        category: data.category,
                        operatingSystem: data.operatingSystem,
                        connectivity: data.connectivity,
                        powerSource: data.powerSource,
                        features: {
                            processor: data.features.processor,
                            RAM: data.features.RAM,
                            storageCapacity: data.features.storageCapacity,
                            screenSize: data.features.screenSize,
                        },
                        img: imgURL,
                        status:true,
                        addedquantity:parseInt('0')
                    }

                    console.log(product);
                    

                    gadgetDataAdd({product})

                    

                }
            })
    }


    return (
        <div className="bg-black p-16">

            <p className="text-center text-4xl font-semibold text-yellow-600 mb-16">Add Product</p>

            <div className="w-11/12 mx-auto">


                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center  text-black ">
                    <div className="grid grid-cols-9 gap-5">

                        <div className="form-control lg:col-span-3 col-span-9 ">
                            <label className="label">
                                <span className="label-text text-white">Product Name</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("name", { required: true, maxLength: 20 })} />

                        </div>


                        <div className="form-control lg:col-span-3 col-span-9 ">
                            <label className="label">
                                <span className="label-text text-white">Price $</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("price", { required: true, maxLength: 20 })} />
                        </div>



                        <div className="form-control lg:col-span-3 col-span-9 ">
                            <label className="label">
                                <span className="label-text text-white">Quantity</span>
                            </label>
                            <input type="number" className="bg-white input input-bordered" {...register("quantity", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control lg:col-span-3 col-span-9 ">
                            <label className="label">
                                <span className="label-text text-white">Release Date</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("releaseDate", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control lg:col-span-3 col-span-9 ">
                            <label className="label">
                                <span className="label-text text-white">Brand</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("brand", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control lg:col-span-3 col-span-9 ">
                            <label className="label">
                                <span className="label-text text-white">Model Number</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("modelNumber", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control lg:col-span-3 col-span-9 ">
                            <label className="label">
                                <span className="label-text text-white">Category</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("category", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control lg:col-span-3 col-span-9 ">

                            <label className="label">
                                <span className="label-text text-white">Operating System</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("operatingSystem", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control lg:col-span-3 col-span-9 ">

                            <label className="label">
                                <span className="label-text text-white">Connectivity</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("connectivity", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control lg:col-span-3 col-span-9 ">

                            <label className="label">
                                <span className="label-text text-white">Power Source</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("powerSource", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control lg:col-span-3 col-span-9 ">

                            <label className="label">
                                <span className="label-text text-white">Processor</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("features.processor", { required: true, maxLength: 20 })} />
                        </div>


                        <div className="form-control lg:col-span-3 col-span-9 ">

                            <label className="label">
                                <span className="label-text text-white">RAM</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("features.RAM", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control lg:col-span-3 col-span-9 ">

                            <label className="label">
                                <span className="label-text text-white">Storage Capacity</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("features.storageCapacity", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control lg:col-span-3 col-span-9 ">

                            <label className="label">
                                <span className="label-text text-white">Screen Size</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("features.screenSize", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control lg:col-span-4 col-span-9 max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Item Image*</span>
                            </label>
                            <input type="file"
                                {...register("img", { required: true })}
                                className="file-input bg-white text-black file-input-bordered w-full max-w-xs" />
                        </div>

                    </div>



                    <div className="form-control block mt-6">
                        <input type="submit" value="Update" className="btn w-[200px] bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                    </div>
                </form>



            </div>

        </div>
    );
};

export default AddProduct;