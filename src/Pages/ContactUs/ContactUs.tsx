import { Mail, Phone, MapPin } from "lucide-react";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from "aos";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="pt-20 px-6 md:px-20 min-h-screen text-white">
      <section data-aos="fade-up" className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have a question, feedback, or need assistance? We’d love to hear from you. Reach out and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Info */}
      <section data-aos="fade-up" className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-[#1C2431] p-6 rounded-xl shadow-md">
          <Mail className="w-6 h-6 mx-auto text-blue-600 mb-2" />
          <p className="font-semibold">Email</p>
          <p>mdabsiddiq04@gmail.com</p>
        </div>
        <div className="bg-[#1C2431] p-6 rounded-xl shadow-md">
          <Phone className="w-6 h-6 mx-auto text-green-500 mb-2" />
          <p className="font-semibold">Phone</p>
          <p>+880-1889551270</p>
        </div>
        <div className="bg-[#1C2431] p-6 rounded-xl shadow-md">
          <MapPin className="w-6 h-6 mx-auto text-red-500 mb-2" />
          <p className="font-semibold">Location</p>
          <p>Cadet College Road, Feni, Bangladesh</p>
        </div>
      </section>

      {/* Contact Form */}
      <section data-aos="fade-up" className="bg-[#1C2431] p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input type="text" id="name" className="w-full bg-white text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" className="w-full bg-white text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" rows={5} className="w-full bg-white text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Lordicon animation */}
      <div data-aos="fade-up" className="flex justify-center mt-12">
        <lord-icon
          src="https://cdn.lordicon.com/sbiheqdr.json"
          trigger="loop"
          delay="2000"
          colors="primary:#3b82f6,secondary:#60a5fa"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
    </div>
  );
};

export default ContactUs;
