"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bestDealsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    originalPrice: 199.99,
    discountedPrice: 129.99,
    discount: 35,
    image: "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Smart Watch",
    originalPrice: 249.99,
    discountedPrice: 179.99,
    discount: 28,
    image: "https://img.freepik.com/premium-photo/purple-smart-watch-isolated-white-background_298425-764.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    originalPrice: 149.99,
    discountedPrice: 99.99,
    discount: 33,
    image: "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Noise Cancelling Earbuds",
    originalPrice: 299.99,
    discountedPrice: 199.99,
    discount: 33,
    image: "https://img.freepik.com/premium-photo/blue-wireless-headphones-charging-case-closeup_90258-3698.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Portable Charger",
    originalPrice: 79.99,
    discountedPrice: 49.99,
    discount: 38,
    image: "https://img.freepik.com/free-photo/white-cell-phone-charger-white-isolated-background-with-usb-cabe_58702-4527.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid",
  },
];

const BestDealsPage = () => {
  return (
    <div className="md:w-3/4 mx-auto container px-4 py-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-start mb-4">Best Deals</h1>
        <hr className="border-t-2 border-gray-300 mb-8" />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Equal spacing between slides
        slidesPerView={4} // Fixed number of slides visible
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 card on small screens
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, // 2 cards on medium screens
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // 3 cards on large screens
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4, // 4 cards on extra-large screens
            spaceBetween: 30,
          },
        }}
      >
        {bestDealsData.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <Card className="w-full max-w-xs h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 flex flex-col justify-between min-h-[350px]">
                <div>
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      {product.discount}% OFF
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-red-600 font-bold">
                      ${product.discountedPrice}
                    </span>
                  </div>
                </div>
                <Button variant="default" className="w-full">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestDealsPage;
