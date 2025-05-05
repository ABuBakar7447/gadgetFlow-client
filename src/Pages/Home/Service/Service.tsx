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
      id: 1,
      pic: "https://i.ibb.co/pL0kkYC/cpu.png",
      name: "Hardware Sales",
      details: "",
    },
    {
      id: 2,
      pic: "https://i.ibb.co/9bfn0MQ/software-development.png",
      name: "Software Solutions",
      details: "",
    },
    {
      id: 3,
      pic: "https://i.ibb.co/M1NfQrk/tools.png",
      name: "Repairs and Maintenance",
      details: "",
    },
    {
      id: 4,
      pic: "https://i.ibb.co/qjnGhBT/gear.png",
      name: "Upgrades and Enhancements",
      details: "",
    },
  ];

  return (
    <div className="py-16 w-[90%] mx-auto">
      <SectionTitle text="Our Services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 bg-[#101522] p-10 rounded-xl">
        {services.map((service: IService) => (
          <div
            key={service.id}
            className="group bg-white/30 border-slate-200 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300
            bg-[#1A2233] backdrop-blur-sm border border-[#00C2FF22] text-white
"
          >
            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-blue-100 rounded-full shadow-inner mb-5 transition-all group-hover:rotate-12">
              <img src={service.pic} alt={service.name} className="w-12 h-12" />
            </div>

            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
              {service.name}
            </h3>

            <p className="text-sm h-12">
              {service.details || "Explore our reliable and expert-level services."}
            </p>

            <button className="btn btn-sm btn-outline mt-6 hover:scale-105 duration-200 bg-[#00C2FF] hover:bg-[#00F0FF] text-black ">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
