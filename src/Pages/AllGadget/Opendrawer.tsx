import { useState } from "react";
import { useAppDispatch } from "../../Redux/hook";
import { setPriceRange, toggleState } from "../../Redux/Feature/GadgetCollection/gadgetSlice";


const Opendrawer = () => {

    const [value, setValue] = useState<number>(5000);
    const dispatch = useAppDispatch();



    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
        dispatch(setPriceRange(value));
    }
    return (
        <div>
            <div className="drawer z-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {/* <li><a onClick={() => handleDelete('hello1')}>Sidebar Item 1</a></li>
                        <li><a onClick={() => handleUpdate('hello2')}>Sidebar Item 2</a></li> */}

                        <div className="form-control" onClick={() => dispatch(toggleState())}>
                            <label className="label cursor-pointer">
                                <span className="label-text">Remember me</span>
                                <input type="checkbox" className="checkbox checkbox-primary" />
                            </label>
                        </div>


                        <div className="flex items-center space-x-4">
                            <label htmlFor="slider" className="text-lg font-semibold">Slider Value: {value}</label>

                            <input type="range" min={0} max="10000" value={value} className="range range-primary" onChange={handlechange} />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Opendrawer;