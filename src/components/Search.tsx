import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import DropDownMenu from "./DropDownMenu";
import { searchItemName } from "../store/uiSlice";

export default function Search() {
  const dispatch = useDispatch();
  const nameFilter = useSelector((state: RootState) => state.ui.nameFilter);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchItemName(e.target.value));
  };
  return (
    <div className="flex flex-wrap w-full gap-2 pt-6 pb-6 ">
      <div className="flex items-center bg-white border-2 border-gray-300 border-solid rounded-md shadow-md max-md:w-full dark:border-stone-700 dark:bg-stone-950">
        <svg
          className="ml-4 text-gray-400 "
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
        <input
          className="p-3 ml-1 max-md:w-full dark:bg-stone-950 dark:text-white"
          type="text"
          placeholder="Search Food..."
          value={nameFilter}
          onChange={handleSearch}
        />
      </div>
      <DropDownMenu />
    </div>
  );
}
