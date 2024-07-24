import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchItemCategory } from "../store/uiSlice";

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const dispatch = useDispatch();
  const categories = [
    "Cakes",
    "Cookies",
    "Pies",
    "Ice cream",
    "Pastries",
    "Puddings",
    "Candy",
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory("");
      dispatch(searchItemCategory(""));
    } else {
      dispatch(searchItemCategory(category));

      setActiveCategory(category);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col ml-auto" ref={dropdownRef}>
      <button
        className={`flex items-center bg-orange hover:bg-orangeHover p-3 text-white font-semibold rounded-md ease-linear duration-200`}
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {activeCategory === "" ? "Filter by Category" : activeCategory}
        <svg
          className="w-5 h-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={`flex flex-col shadow-md rounded mt-14 py-2 absolute z-10 bg-white dark:text-white dark:bg-stone-950`}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`text-left pl-6 py-2 pr-16 hover:bg-gray-100 dark:hover:bg-stone-800${
                activeCategory === category
                  ? "bg-gray-100 dark:bg-stone-800  "
                  : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
