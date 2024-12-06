"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Discount = () => {
  return (
    <div className="md:w-3/4 container mx-auto px-4 py-8 md:py-16 mt-12  md:mt-24 ">
      <div className="flex flex-wrap justify-between gap-6">
        {/* First Image Card */}
        <div className="flex-1 min-w-[calc(50%-1.5rem)]"> {/* Adjusts to 50% width minus margin */}
          <Card className="relative overflow-hidden group">
            <div className="relative w-full h-64">
              <Image 
                src="https://img.freepik.com/premium-photo/close-up-small-shopping-cart-with-text_1048944-28660947.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid" 
                alt="Shopping Cart"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <CardContent className="absolute inset-0 flex flex-col justify-end items-center text-center bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2 md:text-2xl">First Service</h3>
              <p className="mb-4 text-sm md:text-base">
                Discover amazing features and benefits.
              </p>
              <Button variant="secondary" className="px-6 py-2">
                Order Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Second Image Card */}
        <div className="flex-1 min-w-[calc(50%-1.5rem)]"> {/* Adjusts to 50% width minus margin */}
          <Card className="relative overflow-hidden group">
            <div className="relative w-full h-64">
              <Image 
                src="https://img.freepik.com/premium-photo/close-up-small-shopping-cart-with-text_1048944-28660947.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid" 
                alt="Shopping Cart 2"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <CardContent className="absolute inset-0 flex flex-col justify-end items-center text-center bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2 md:text-2xl">Second Service</h3>
              <p className="mb-4 text-sm md:text-base">
                Explore our exciting offerings.
              </p>
              <Button variant="secondary" className="px-6 py-2">
                Order Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Discount;
