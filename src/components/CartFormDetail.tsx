import React, { useState } from "react";
import Modal, { ModalHandleRef } from "../UI/Modal";
import { useDispatch } from "react-redux";
import { openCartConfirmOrder } from "../store/uiSlice";
import { validateForm } from "../util/formValidation";

interface CartFormDetailProps {
  handleModalClose: () => void;
  modalRef: React.RefObject<ModalHandleRef>;
}

export default function CartFormDetail({
  handleModalClose,
  modalRef,
}: CartFormDetailProps) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    notes: "",
  });
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors as React.SetStateAction<typeof errors>);
      return;
    }
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      notes: "",
    });
    console.log(data);
    dispatch(openCartConfirmOrder());
  }

  return (
    <Modal ref={modalRef} onClose={handleModalClose}>
      <div className="mx-2 my-6">
        <svg viewBox="0 0 1024 1024" fill="currentColor" width="48" height="48">
          <path
            fill="#0E86D4"
            d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"
          />
          <path
            fill="#0E86D4"
            d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"
          />
        </svg>

        <h2 className="mt-6 text-4xl font-extrabold dark:text-white">
          Enter Details
        </h2>
        <p className="my-1 text-stone-500 dark:text-stone-400">
          Please fill out to complete your order.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="font-semibold dark:text-white"
            >
              First Name
            </label>
            <input
              className="pl-2 border border-gray-200 rounded-md bg-slate-100 dark:bg-stone-800 dark:border-stone-700 dark:text-white"
              type="text"
              name="firstName"
              id="firstName"
              required
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName}</span>
            )}
            <label htmlFor="lastName" className="font-semibold dark:text-white">
              last Name
            </label>
            <input
              className="pl-2 border border-gray-200 rounded-md bg-slate-100 dark:bg-stone-800 dark:border-stone-700 dark:text-white"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName}</span>
            )}
            <label htmlFor="email" className="font-semibold dark:text-white">
              Email
            </label>
            <input
              className="pl-2 border border-gray-200 rounded-md bg-slate-100 dark:bg-stone-800 dark:border-stone-700 dark:text-white"
              type="email"
              name="email"
              id="email"
              required
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
            <label htmlFor="address" className="font-semibold dark:text-white">
              Address
            </label>
            <input
              className="pl-2 border border-gray-200 rounded-md bg-slate-100 dark:bg-stone-800 dark:border-stone-700 dark:text-white"
              type="text"
              name="address"
              id="address"
              required
            />
            {errors.address && (
              <span className="text-red-500">{errors.address}</span>
            )}
            <label htmlFor="notes" className="font-semibold dark:text-white">
              Notes
            </label>
            <textarea
              className="pl-2 border border-gray-200 rounded-md bg-slate-100 dark:bg-stone-800 dark:border-stone-700 dark:text-white"
              name="notes"
              id="notes"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`mt-4 p-3 w-full font-semibold rounded-full flex items-center justify-center relative  text-white bg-orange hover:bg-orangeHover  ease-linear duration-200`}
          >
            Progress to Checkout
          </button>
        </form>
      </div>
    </Modal>
  );
}
