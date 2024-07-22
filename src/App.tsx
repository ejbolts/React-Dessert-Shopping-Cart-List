import React from "react";
import Cart from "./components/Cart";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./index.css";
import Modal from "./UI/Modal";
import CartList from "./components/CartList";
import { useDispatch } from "react-redux";
import { closeCartModal } from "./store/cartSlice";
import MobileCartButton from "./UI/MobileCartButton";
import ConfirmOrder from "./components/ConfirmOrder";
import CartFormDetail from "./components/CartFormDetail";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
export default function App() {
  const dispatch = useDispatch();
  const openFormDetail = useSelector(
    (state: RootState) => state.cart.modalType.cartFormDetail
  );
  const openConfirmOrder = useSelector(
    (state: RootState) => state.cart.modalType.cartConfirmOrder
  );
  return (
    <div className="bg-lightBG min-h-screen ">
      <Header />
      <div className="flex justify-center max-md:flex-wrap p-7 max-md:p-0 max-md:pb-8 gap-8 mx-12 max-md:gap-0 ">
        <FoodList />
        <Cart />
      </div>
      <MobileCartButton />
      {openFormDetail && <CartFormDetail />}
      {openConfirmOrder && <ConfirmOrder />}
    </div>
  );
}
