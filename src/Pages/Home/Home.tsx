import { useGetAllGedgetQuery } from "../../Redux/api";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import CustomerReview from "./CustomerReview/CustomerReview";
import LimitedTimeOffers from "./LimitedOffer/LimitedTimeOffers";
import OurFacility from "./OurFacility/OurFacility";
import Product from "./Product/Product";
import Service from "./Service/Service";
import TrustedBrands from "./TrustedBrands/TrustedBrands";

const Home = () => {

    const reviews = [
        {
          img: "https://randomuser.me/api/portraits/women/68.jpg",
          name: "Alice Johnson",
          review: "Great product! It exceeded my expectations.",
          rating: 5
        },
        {
          img: "https://randomuser.me/api/portraits/men/52.jpg",
          name: "Brian Lee",
          review: "Good quality, but the delivery was a bit slow.",
          rating: 4
        },
        {
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Cynthia Gomez",
          review: "Average experience. The item worked fine.",
          rating: 3
        },
        {
          img: "https://randomuser.me/api/portraits/men/77.jpg",
          name: "David Smith",
          review: "Not satisfied. The product stopped working after a week.",
          rating: 2
        },
        {
          img: "https://randomuser.me/api/portraits/women/12.jpg",
          name: "Emily Davis",
          review: "Excellent service and the product is top-notch!",
          rating: 5
        }
      ];
      

    

        
  const { isLoading } = useGetAllGedgetQuery("");

  if (isLoading) {
    <div className="h-96 w-1/2 mx-auto">
      <span className="loading loading-dots loading-lg"></span>
    </div>;
  }
  // console.log(data)
  return (
    <div>
      <Banner></Banner>
      
      <Product></Product>
      <Service></Service>
      <LimitedTimeOffers></LimitedTimeOffers>
      <OurFacility></OurFacility>
      
      <CustomerReview reviews={reviews}></CustomerReview>
      

      <TrustedBrands></TrustedBrands>

      <Contact></Contact>
      






















      


    </div>
  );
};

export default Home;
