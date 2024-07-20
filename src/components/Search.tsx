import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchItemName } from "../store/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import DropDownMenu from "./DropDownMenu";

export default function Search() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const cart = useSelector((state: RootState) => state.cart);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchItemName(e.target.value));
  };
  return (
    <div className="w-full pt-6 pb-6 flex flex-wrap ">
      <div className="flex items-center shadow-md rounded-md border-2 border-solid border-gray-300 bg-white">
        <svg
          className=" ml-4  text-gray-400 "
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
        <input
          className="ml-1 p-3  "
          type="text"
          placeholder="Search Food..."
          value={cart.nameFilter}
          onChange={handleSearch}
        />
      </div>
      <DropDownMenu />
    </div>
  );
}
