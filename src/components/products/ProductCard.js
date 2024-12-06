"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { LiaShoppingBagSolid } from "react-icons/lia";// Cart icon from react-icons

const ProductCard = ({ product }) => {
  return (
    <Card className="shadow-md overflow-hidden">
      <Image
        src={product.imageSrc}
        alt={product.name}
        width={300} // Consistent width
        height={300} // Consistent height
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-center mb-2">{product.name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-red-500 font-semibold">{product.price}</p>
          <LiaShoppingBagSolid className="text-gray-900 text-xl" />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
