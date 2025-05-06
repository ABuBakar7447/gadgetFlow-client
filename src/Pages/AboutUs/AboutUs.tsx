import { Users, Star, ShoppingCart, Rocket } from "lucide-react";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


const AboutUs = () => {
  

  return (
    <div className="pt-[84px] px-6 md:px-20 text-white">

      {/* Our Story */}
      <section data-aos="fade-up" className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Story</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          We started this journey with a passion for technology and a desire to make top-quality gadgets affordable and accessible. From gaming laptops to flagship mobiles, we bring the best electronics to your fingertips.
        </p>
      </section>

      {/* Mission & Vision */}
      <section data-aos="fade-up" className="grid md:grid-cols-2 gap-10 mb-12">
        <div className="p-6 bg-[#101522] rounded-xl shadow-md">
          <Rocket className="w-8 h-8 text-blue-600 mb-2" />
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p>To deliver high-performance electronics with unbeatable value, fast service, and genuine support.</p>
        </div>
        <div className="p-6 bg-[#101522] rounded-xl shadow-md">
          <Star className="w-8 h-8 text-yellow-500 mb-2" />
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p>To become the most trusted electronics store where every customer feels confident shopping online.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section data-aos="fade-up" className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center bg-[#101522] py-10 rounded-lg">
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/hciqteio.json"
              trigger="hover"
              colors="primary:#fff"
              style={{ width: "60px", height: "60px", margin: "0 auto" }}
            />
            <p className="mt-2 font-medium">Genuine Products</p>
          </div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="hover"
              colors="primary:#fff"
              style={{ width: "60px", height: "60px", margin: "0 auto" }}
            />
            <p className="mt-2 font-medium">Fast Delivery</p>
          </div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/egiwmiit.json"
              trigger="hover"
              colors="primary:#fff"
              style={{ width: "60px", height: "60px", margin: "0 auto" }}
            />
            <p className="mt-2 font-medium">Secure Checkout</p>
          </div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/svbmmyue.json"
              trigger="hover"
              colors="primary:#fff"
              style={{ width: "60px", height: "60px", margin: "0 auto" }}
            />
            <p className="mt-2 font-medium">Customer Support</p>
          </div>
        </div>
      </section>

      {/* Stats or Achievements */}
      <section data-aos="fade-up" className="mb-12 bg-[#101522] rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Our Journey So Far</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center font-semibold text-lg">
          <div>
            <Users className="w-8 h-8 mx-auto text-green-500 mb-1" />
            <p>5000+ Happy Customers</p>
          </div>
          <div>
            <ShoppingCart className="w-8 h-8 mx-auto text-indigo-500 mb-1" />
            <p>10,000+ Orders Delivered</p>
          </div>
          <div>
            <Star className="w-8 h-8 mx-auto text-yellow-400 mb-1" />
            <p>4.8★ Average Rating</p>
          </div>
          <div>
            <Rocket className="w-8 h-8 mx-auto text-blue-500 mb-1" />
            <p>Growing Since 2022</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section data-aos="fade-up" className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Need Help or Have a Question?</h2>
        <p className="mb-6">We’re here to assist you anytime. Your satisfaction is our priority.</p>
        <Link to="/contactus" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </Link>
   </section>
    </div>
  );
};

export default AboutUs;
