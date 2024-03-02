// import { Icon } from "@iconify/react/dist/iconify.js";
import '../../../Styles/styless.css'

const Contact = () => {
    return (
        <div className="h-[250px] bg-stone-900 flex justify-center items-center my-24">
            <div className="flex flex-col lg:flex-row justify-between items-center w-11/12">
                <div className="flex gap-10 items-center lg:w-1/2 w-full my-5">
                    <div>
                        {/* <Icon icon="ph:bicycle-bold" className="w-16 h-16 text-white" /> */}
                        <lord-icon
                            src="https://cdn.lordicon.com/qirwcvlr.json"
                            
                            colors="primary:#fff"
                            trigger="hover"
                            style={{ width: "64px", height: "64px" }}>
                        </lord-icon>
                    </div>
                    <div>
                        <p className="font-bold lg:text-2xl text-xl">Request free consultation</p>
                        <p>Get answers and advice from people you want it from.</p>
                    </div>
                </div>

                <div>
                    <button className="btn btn-outline btn-primary transitions">Contact Us</button>
                </div>

                
            </div>
        </div>
    );
};

export default Contact;