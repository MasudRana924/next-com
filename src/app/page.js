import CategorySection from "@/components/category-section/CategorySection";
import Products from "@/components/products/Products";
import Banner from "@/components/shared/banner/Banner";
import Image from "next/image";
import EcommerceServices from "@/components/services/EcommerceServices";
import Discount from "@/components/discount/Discount";
import BestDealsPage from "@/components/best-deals/BestDealsPage";


export default function Home() {
  return (
    <div className="mt-24">
        <Banner/>
        <CategorySection/>
        <Products/>
        <BestDealsPage/>
        <Discount/>
        <EcommerceServices/>
      

    </div>
  );
}
