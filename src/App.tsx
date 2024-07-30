import React, { useEffect, useRef, useState } from "react";
import Cart from "./components/Cart";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./index.css";
import MobileCartButton from "./UI/MobileCartButton";
import ConfirmOrder from "./components/ConfirmOrder";
import CartFormDetail from "./components/CartFormDetail";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import DarkModeToggle from "./components/DarkModeToggle";
import SignInForm from "./components/SignInForm";
import { useDispatch } from "react-redux";
import { closeCartModal } from "./store/uiSlice";
export default function App() {
  const { signInForm, cartFormDetail, cartConfirmOrder } = useSelector(
    (state: RootState) => state.ui.modalType
  );
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("UserName");
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  function onClose() {
    setIsModalOpen(false);
    dispatch(closeCartModal());
  }
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-lightBG dark:bg-stone-900">
      <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />

      <Header userName={userName} openModal={openModal} />
      <div className="flex justify-center gap-8 mx-12 max-md:flex-wrap p-7 max-md:p-0 max-md:pb-8 max-md:gap-0 ">
        <FoodList darkMode={darkMode} />
        <Cart openModal={openModal} />
      </div>
      <MobileCartButton />
      {cartFormDetail && (
        <CartFormDetail isOpen={isModalOpen} onClose={onClose} />
      )}
      {cartConfirmOrder && (
        <ConfirmOrder isOpen={isModalOpen} onClose={onClose} />
      )}
      {signInForm && (
        <SignInForm
          isOpen={isModalOpen}
          onClose={onClose}
          userName={userName}
          handleChange={(event) => setUserName(event.target.value)}
        />
      )}
    </div>
  );
}
