import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./index.css";
import { useDispatch } from "react-redux";
import MobileCartButton from "./UI/MobileCartButton";
import ConfirmOrder from "./components/ConfirmOrder";
import CartFormDetail from "./components/CartFormDetail";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import DarkModeToggle from "./components/DarkModeToggle";
import SignInForm from "./components/SignInForm";
export default function App() {
  const modalType = useSelector((state: RootState) => state.cart.modalType);
  const [userName, setUserName] = useState("UserName");
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="bg-lightBG min-h-screen dark:bg-stone-900">
      <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />

      <Header userName={userName} />
      <div className="flex justify-center max-md:flex-wrap p-7 max-md:p-0 max-md:pb-8 gap-8 mx-12 max-md:gap-0 ">
        <FoodList darkMode={darkMode} />
        <Cart />
      </div>
      <MobileCartButton />
      {modalType.cartFormDetail && <CartFormDetail />}
      {modalType.cartConfirmOrder && <ConfirmOrder />}
      {modalType.signInForm && (
        <SignInForm
          userName={userName}
          handleChange={(event) => setUserName(event.target.value)}
        />
      )}
    </div>
  );
}
