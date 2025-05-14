type Review = {
  img: string;
  name: string;
  review: string;
  rating: number;
};

type UserReviewProps = {
  reviews: Review[];
};

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CustomerReview: React.FC<UserReviewProps> = ({ reviews }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-[90%]"
    >
      <div className="">
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="w-[90%] bg-[#101522] text-white rounded-xl flex flex-col items-center text-center mb-8 mx-auto">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                className="my-5"
              />
              <img src={review.img} className="w-24 h-22 my-8 rounded-lg" alt="" />
              <p>{review.review}</p>
              <p className="text-2xl text-yellow-600 font-semibold m-3">
                {review.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default CustomerReview;
