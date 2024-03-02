import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

interface IService {
    id: number;
    pic: string;
    name: string;
    details: string;
}

const Service = () => {

    const services: IService[] = [
        {
            "id": 1,
            "pic": "https://i.ibb.co/pL0kkYC/cpu.png",
            "name": "Hardware Sales",
            "details": ""
        },
        {
            "id": 2,
            "pic": "https://i.ibb.co/9bfn0MQ/software-development.png",
            "name": "Software Solutions",
            "details": ""
        },
        {
            "id": 3,
            "pic": "https://i.ibb.co/M1NfQrk/tools.png",
            "name": "Repairs and Maintenance",
            "details": ""
        },
        {
            "id": 4,
            "pic": "https://i.ibb.co/qjnGhBT/gear.png",
            "name": "Upgrades and Enhancements",
            "details": ""
        }
    ]
    return (
        <div className="py-12 w-11/12 mx-auto">
            <SectionTitle text="Our Services"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-5">
                {
                    services?.map((service: IService) =>
                        <div key={service.id} className="w-[300px] h-[300px] mx-auto flex flex-col justify-center items-center border-4">
                            <img src={service.pic} alt="" className=" w-20 h-20 object-cover"/>
                            <p className="text-black text-[20px] font-semibold text-center mt-10">
                                {service.name}
                            </p>

                            <button className="btn btn-sm btn-outline btn-info mt-4">Read More</button>
                        </div>
                    )
                }
            </div>

            
        </div>
    );
};

export default Service;