import { Icon } from "@iconify/react/dist/iconify.js";


const Contact = () => {
    return (
        <div className="h-[250px] bg-stone-900 flex justify-center items-center my-24">
            <div className="flex justify-between items-center w-11/12">
                <div className="flex gap-10 items-center w-1/2">
                    <div>
                        <Icon icon="ph:bicycle-bold" className="w-16 h-16 text-white"/>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">Request free consultation</p>
                        <p>Get answers and advice from people you want it from.</p>
                    </div>
                </div>

                <div>
                    <button className="btn btn-outline btn-primary btn-lg">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;