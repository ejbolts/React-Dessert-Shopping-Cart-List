import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (!dialogRef.current?.open) {
        dialogRef.current?.showModal();
      }
    } else if (dialogRef.current?.open) {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      className="modal-dialog rounded-xl md:w-[500px] max-md:mx-0 max-md:mb-0 px-8 max-md:min-w-full dark:bg-stone-950"
      onClose={onClose}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </dialog>,
    document.getElementById("modal")!
  );
};

export default ModalComponent;
