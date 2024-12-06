import Image from "next/image";
import phones from '../../assets/web-traffic.png'
const CategorySection = () => {
  // Sample category data with image URLs and names
  const categories = [
    { imgSrc: "https://cdn-icons-png.freepik.com/256/12862/12862122.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Smartphones" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/8293/8293263.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Laptops" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/1712/1712509.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Tablets" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/2259/2259933.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Cameras" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/4242/4242795.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Headphones" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/9668/9668702.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Smartwatches" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/550/550486.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "TVs" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/10509/10509367.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Speakers" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/4602/4602062.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Printers" },
    { imgSrc: "https://cdn-icons-png.freepik.com/256/8734/8734209.png?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid", name: "Game Consoles" }
  ];

  return (
    <div className="md:w-3/4 mx-auto my-12 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border rounded-md p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative w-32 h-32 mb-2">
              <Image
                src={category.imgSrc}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-center text-lg font-medium text-gray-700">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
