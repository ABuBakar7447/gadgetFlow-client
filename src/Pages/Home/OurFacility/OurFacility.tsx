import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const OurFacility = () => {
    const facility = [
        {
            id: 1,
            icon: "https://cdn.lordicon.com/amfpjnmb.json",
            title: "Free Delivery",
            details: "Enjoy fast complimentary shipping on all gadget purchases"
        },
        {
            id: 2,
            icon: "https://cdn.lordicon.com/jtiihjyw.json",
            title: "Exciting Discount",
            details: "Unlock exhilarating discounts with every order placed on our website."
        },
        {
            id: 3,
            icon: "https://cdn.lordicon.com/qxqvtswi.json",
            title: "Gift On Occasion",
            details: "Receive a special gift on special occasions when you shop with us"
        }
    ]
    return (
        <div className="w-3/4 mx-auto my-24">
            <SectionTitle text="Shop safely with GadgetFlow"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 rounded-xl bg-slate-100">
                {facility?.map(item =>
                    <div className="w-[300px] h-[300px] mx-auto p-10 flex flex-col justify-center items-center" key={item.id}>
                        <lord-icon
                            src={item.icon}
                            trigger="hover"
                            style={{ width: "100px", height: "150px" }}>
                        </lord-icon>
                        <h1 className="text-xl text-black font-bold">{item.title}</h1>
                        <p className="text-center text-black">{item.details}</p>
                    </div>

                )}
            </div>
        </div>
    );
};

export default OurFacility;