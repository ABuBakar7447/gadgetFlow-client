

const Banner = () => {
    return (
        <div className="w-[90%] mx-auto h-[650px] lg:pt-[90px]">
            <div className="hero h-full object-fill rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co.com/ds8DW5KC/Chat-GPT-Image-May-5-2025-08-33-13-PM.png)' }}>
                <div className=""></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Unlock Your Potential with Technology</h1>
                        <p className="mb-5 text-[20px]">Embrace limitless innovation and unlock new horizons in the digital age. Empower your journey with technology's transformative power.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;