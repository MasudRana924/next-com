"use client";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { Button } from "../ui/button";
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
      <Button variant="indigo">
        <CiSearch  width={20} height={20} className="text-white"/>
      </Button>
    </form>
  );
};
export default SearchBar;
