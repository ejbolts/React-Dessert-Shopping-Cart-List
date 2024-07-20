import React from "react";
import profilePic from "../assets/images/cat_pf.png";
import Search from "./Search";
export default function Header() {
  return (
    <div className="flex justify-between pt-14 px-20 max-md:px-16  flex-wrap items-end  ">
      <h1 className="font-extrabold text-4xl mr-6 2xl:text-5xl max-md:text-5xl">
        Desserts
      </h1>
      <div className="flex items-center gap-3 max-md:mt-4">
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
