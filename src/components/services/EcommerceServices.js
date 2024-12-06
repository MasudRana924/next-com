"use client";
import { Truck, Clock, Shield } from "lucide-react";

const EcommerceServices = () => {
  const services = [
    {
      icon: <Truck size={48} className="text-blue-600" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders",
    },
    {
      icon: <Clock size={48} className="text-green-600" />,
      title: "24 Hours Delivery",
      description: "Fast delivery within 24 hours of order",
    },
    {
      icon: <Shield size={48} className="text-purple-600" />,
      title: "24/7 Active Support",
      description: "Customer support available round the clock",
    },
  ];

  return (
    <div className="w-full md:w-3/4   mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            style={{ flex: 1 }} // Ensures each card takes up an equal amount of space
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceServices;
