import { useState } from "react";
import { useAppDispatch } from "../../Redux/hook";
import { searchByBrand, searchBymodelNumber, searchbyCategory, searchbyConnectivity, searchbyFeature, searchbyOS, searchbyPower, setPriceRange, toggleState } from "../../Redux/Feature/GadgetCollection/gadgetSlice";

import { useForm, SubmitHandler } from "react-hook-form"




enum CategoryEnum {
    Laptop = "Laptop",
    Mobile = "Mobile",
    other = "other",
}

enum OsEnum {
    Windows = "Windows",
    IOS = "IOS",
    MacOS = "MacOS"

}

enum ConnectivityEnum {
    WiFi = "WiFi",
    Ethernet = "Ethernet",
    USBA = "USBA",
    USBC = "USBC",
    Thunderbolt = "Thunderbolt",
    Blutooth = "Blutooth",
    HDMI = "HDMI"

}
enum powerEnum {
    Battery = "Battery",
    PlugIn = "PlugIn"

}
enum featureEnum {
    AMDRyzen9 = "AMD Ryzen 9",
    AMDRyzen7 = "AMD Ryzen 7",
    Inteli7 = "Intel i7",
    Inteli9 = "Intel i9",
    AppleM1 = "Apple M1"

}

interface IFormInput {

    gender: CategoryEnum;
    os: OsEnum;
    connectivity: ConnectivityEnum;
    power: powerEnum;
    feature: featureEnum
}



// interface IFormInputOS {
//     os: OsEnum
// }


const Opendrawer = () => {

    const [value, setValue] = useState<number>(5000);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchmodel, setSearchmodel] = useState('');

    const dispatch = useAppDispatch();



    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
        dispatch(setPriceRange(value));
    }

    const handleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        dispatch(searchByBrand(searchQuery))
    }




    const handleModelNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchmodel(e.target.value);
        dispatch(searchBymodelNumber(searchmodel))
    }



    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {

        dispatch(searchbyCategory(data.gender))
    }


    const handleOS: SubmitHandler<IFormInput> = (data) => {

        dispatch(searchbyOS(data.os))
    }


    const handleConnectivity: SubmitHandler<IFormInput> = (data) => {

        dispatch(searchbyConnectivity(data.connectivity))
    }


    const handlePower: SubmitHandler<IFormInput> = (data) => {
        // console.log(data.power);
        dispatch(searchbyPower(data.power))
    }

    const handleFeature: SubmitHandler<IFormInput> = (data) => {
        console.log(data.feature);
        dispatch(searchbyFeature(data.feature))
    }


    return (
        <div >
            <div className="drawer z-10 ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <p className="">
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Filter Products</label>
                    </p>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-[84px]">

                        {/* Product In Stock with Price Change */}
                        <div className="form-control" onClick={() => dispatch(toggleState())}>
                            <label className="label cursor-pointer">
                                <span className="label-text">Remember me</span>
                                <input type="checkbox" className="checkbox checkbox-primary" />
                            </label>
                        </div>

                        {/* Product In Stock with Price Change */}
                        <div className="flex items-center space-x-4">
                            <label htmlFor="slider" className="text-lg font-semibold">Slider Value: {value}</label>

                            <input type="range" min={0} max="10000" value={value} className="range range-primary" onChange={handlechange} />
                        </div>



                        {/* Seach By Brand */}
                        <div className="my-10">
                            {/* // searchBar// */}
                            <label>
                                <p>
                                    Search By Brand
                                </p>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-primary w-full max-w-xs"
                                value={searchQuery}
                                onChange={handleBrand}
                            />
                        </div>


                        {/* Search By Model Number */}
                        <div className="mb-10">
                            {/* // searchBar// */}
                            <label>
                                <p>
                                    Search By Model Number
                                </p>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-primary w-full max-w-xs"
                                value={searchmodel}
                                onChange={handleModelNumber}
                            />
                        </div>


                        {/* search by category */}

                        <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-10">

                            <label className="font-bold"> Search By Category</label><br />
                            <select {...register("gender")} className="w-3/5 h-12 rounded-lg border-primary border-[1px]">
                                <option value="Laptop">Laptop</option>
                                <option value="Mobile">Mobile</option>

                            </select>
                            <input type="submit" value="Search" className="text-[16px] m-2 btn btn-primary btn-sm" />
                        </form>


                        <form onSubmit={handleSubmit(handleOS)} className="w-full mb-10">

                            <label className="font-bold">Search By Operating System</label><br />
                            <select {...register("os")} className="w-3/5 h-12 rounded-lg border-primary border-[1px]">
                                <option value="Windows">Windows</option>
                                <option value="IOS">IOS</option>
                                <option value="MacOS">MacOS</option>

                            </select>
                            <input type="submit" value="Search" className="text-[16px] m-2 btn btn-primary btn-sm" />
                        </form>



                        <form onSubmit={handleSubmit(handleConnectivity)} className="w-full mb-10">

                            <label className="font-bold">Search By Connectivit</label><br />
                            <select {...register("connectivity")} className="w-3/5 h-12 rounded-lg border-primary border-[1px]">
                                <option value="WiFi">WiFi</option>
                                <option value="Ethernet">Ethernet</option>
                                <option value="USBA">USBA</option>
                                <option value="USBC">USBC</option>
                                <option value="Thunderbolt">Thunderbolt</option>
                                <option value="Blutooth">Blutooth</option>
                                <option value="HDMI">HDMI</option>


                            </select>
                            <input type="submit" value="Search" className="text-[16px] m-2 btn btn-primary btn-sm" />
                        </form>


                        <form onSubmit={handleSubmit(handlePower)} className="w-full mb-10">

                            <label className="font-bold">Search By Power Source</label><br />
                            <select {...register("power")} className="w-3/5 h-12 rounded-lg border-primary border-[1px]">
                                <option value="Battery">Battery</option>
                                <option value="PlugIn">PlugIn</option>



                            </select>
                            <input type="submit" value="Search" className="text-[16px] m-2 btn btn-primary btn-sm" />
                        </form>
                        <form onSubmit={handleSubmit(handleFeature)} className="w-full mb-10">

                            <label className="font-bold">Search By Features(Processore)</label><br />
                            <select {...register("feature")} className="w-3/5 h-12 rounded-lg border-primary border-[1px]">
                                <option value="AMD Ryzen 9">AMD Ryzen 9</option>
                                <option value="AMD Ryzen 7">AMD Ryzen 7</option>
                                <option value="Intel i7">Intel i7</option>
                                <option value="Intel i9">Intel i9</option>
                                <option value="Apple M1">Apple M1</option>



                            </select>
                            <input type="submit" value="Search" className="text-[16px] m-2 btn btn-primary btn-sm" />
                        </form>



                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Opendrawer;