interface IFeature {
    id: number;
    pic: string;
    name: string;
    details: string;
}

const WhyChoose = () => {
    const services: IFeature[] = [
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
            "id": 2,
            "pic": "https://i.ibb.co/M1NfQrk/tools.png",
            "name": "Repairs and Maintenance",
            "details": ""
        },
        {
            "id": 2,
            "pic": "https://i.ibb.co/qjnGhBT/gear.png",
            "name": "Upgrades and Enhancements",
            "details": ""
        }
    ]
    return (
        <div>

            <div>
                <p className="text-center text-4xl text-primary font-bold">
                    Why Choose Use
                </p>
            </div>
            
        </div>
    );
};

export default WhyChoose;