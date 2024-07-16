import React from "react";
import profilePic from "../assets/images/cat_pf.png";
export default function Header() {
  return (
    <div className="flex justify-between pt-14 px-14 flex-wrap items-end  pb-6 ">
      <h1 className="font-extrabold text-4xl mr-6 2xl:text-5xl max-sm:text-5xl">
        Desserts
      </h1>
      <div className="flex items-center gap-3 max-sm:mt-4">
        <img
          src={profilePic}
          alt="profile-pic"
          className="rounded-full w-10 h-10 "
        />
        <span className="text-stone-800 font-semibold">UserName</span>
      </div>
    </div>
  );
}
