import { useState } from "react";
import { useAppDispatch } from "../../Redux/hook";
import { searchByBrand, searchBymodelNumber, setPriceRange, toggleState } from "../../Redux/Feature/GadgetCollection/gadgetSlice";


const Opendrawer = () => {

    const [value, setValue] = useState<number>(5000);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchmodel, setSearchmodel] = useState('');
    const dispatch = useAppDispatch();



    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
        dispatch(setPriceRange(value));
    }

    const handleBrand= (e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchQuery(e.target.value);
        dispatch(searchByBrand(searchQuery))
    }


    const handleModelNumber= (e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchmodel(e.target.value);
        dispatch(searchBymodelNumber(searchmodel))
    }
    return (
        <div>
            <div className="drawer z-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <p className="text-right">
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Filter Products</label>
                    </p>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Opendrawer;