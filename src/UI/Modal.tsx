import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
export interface ModalHandleRef {
  open: () => void;
}
const ModalComponent = forwardRef<ModalHandleRef, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal();
    },
  }));

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      className="modal-dialog rounded-xl md:w-[500px] max-md:mx-0 max-md:mb-0 px-8 max-md:min-w-full dark:bg-stone-950 "
      onClose={onClose}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </dialog>,
    document.getElementById("modal")!
  );
});

export default ModalComponent;
