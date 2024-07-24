import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeCartModal } from "../store/uiSlice";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const isCartOpen = useSelector(
    (state: RootState) =>
      state.ui.modalType.cartFormDetail ||
      state.ui.modalType.cartConfirmOrder ||
      state.ui.modalType.signInForm
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
      className="modal-dialog rounded-xl md:w-[500px] max-md:mx-0 max-md:mb-0 px-8 max-md:min-w-full dark:bg-stone-950 "
      onClick={() => dispatch(closeCartModal())}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </dialog>,
    document.getElementById("modal")!
  );
};

export default Modal;
