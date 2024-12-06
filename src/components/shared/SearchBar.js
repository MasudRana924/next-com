"use client";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  const router = useRouter();
  const handleSearch = () => {
    e.preventDefault();
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button >
        <CiSearch  width={16} height={16} className="text-gray-900 text-2xl"/>
      </button>
    </form>
  );
};
export default SearchBar;
