import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeCartModal } from "../store/cartSlice";
import { RootState } from "../store/store";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const isCartOpen = useSelector(
    (state: RootState) =>
      state.cart.modalType.cartFormDetail ||
      state.cart.modalType.cartConfirmOrder
  );
  const dispatch = useDispatch();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(closeCartModal());
      }
    };

    if (isCartOpen) {
      dialogRef.current?.showModal();
      document.addEventListener("keydown", handleKeyDown);
    } else {
      dialogRef.current?.close();
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, dispatch]);

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      className="modal-dialog rounded-xl md:w-[500px] max-md:mx-0 max-md:mb-0 px-8 max-md:min-w-full "
      onClick={() => dispatch(closeCartModal())} // this needs changing
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </dialog>,
    document.getElementById("modal")!
  );
};

export default Modal;
