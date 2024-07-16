import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/cartSlice";
import { RootState } from "../store/store";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const dispatch = useDispatch();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(closeModal());
      }
    };

    if (isOpen) {
      dialogRef.current?.showModal();
      document.addEventListener("keydown", handleKeyDown);
    } else {
      dialogRef.current?.close();
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, dispatch]);

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      className="modal-dialog"
      onClick={() => dispatch(closeModal())}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={() => dispatch(closeModal())}>Close</button>
      </div>
    </dialog>,
    document.getElementById("modal")!
  );
};

export default Modal;
