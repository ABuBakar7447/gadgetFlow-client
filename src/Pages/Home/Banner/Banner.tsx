import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto min-h-[400px] lg:h-[650px] pt-24 lg:pt-[90px]">
      <div
        className="hero w-full h-full rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/ds8DW5KC/Chat-GPT-Image-May-5-2025-08-33-13-PM.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-white">
          <div className="w-full px-4 md:w-[70%] lg:w-[55%]">
            <h1 className="mb-5 text-xl md:text-3xl lg:text-[38px] font-bold">
              Empower Your Future with Tech
            </h1>
            <p className="mb-5 text-base md:text-lg">
              Embrace limitless innovation and unlock new horizons in the
              digital age. Empower your journey with technology's transformative
              power.
            </p>
            <Link to="/allgadget">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
