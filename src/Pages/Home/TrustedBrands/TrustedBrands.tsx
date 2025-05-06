

const brands = [
  { name: "Apple", logo: "https://i.ibb.co.com/s9G1nv3P/apple-removebg-preview.png" },
  { name: "Samsung", logo: "https://i.ibb.co.com/fYyyLjSQ/samsung-removebg-preview.png" },
  { name: "Asus", logo: "https://i.ibb.co.com/Wp3cNGgd/asus-removebg-preview.png" },
  { name: "HP", logo: "https://i.ibb.co.com/gFSb7TW9/hp-removebg-preview.png"},
  { name: "Dell", logo: "https://i.ibb.co.com/JRH7rcQL/dell-removebg-preview.png" },
  { name: "Lenovo", logo: "https://i.ibb.co.com/wF0Kh10S/lenevo-removebg-preview.png" },
];









const TrustedBrands = () => {
  return (
    <div className="bg-[#1C2431] w-[90%] mx-auto rounded-lg py-16 px-6 md:px-20 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 ">
        Trusted by Top Brands
      </h2>
      <div className="flex justify-center items-center gap-5 w-[90%] mx-auto">
        {brands.map((brand, index) => (
          <div key={index} className="flex w-24 h-24 justify-center items-center  transition duration-300  rounded-full">
            <img src={brand.logo} alt={brand.name} className="w-24 h-full object-contain " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
