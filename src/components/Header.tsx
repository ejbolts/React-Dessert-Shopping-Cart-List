import React from "react";
import profilePic from "../assets/images/silhouette-of-a-kitten-playing-with-yarn.jpg";
export default function Header() {
  return (
    <div className="flex justify-between p-14 border-solid border-2 border-sky-500">
      <h1 className="font-extrabold text-3xl">Desserts</h1>
      <div className="flex items-center gap-5">
        <img
          src={profilePic}
          alt="profile-pic"
          className="rounded-full w-10 h-10"
        />
        <span>UserName</span>
      </div>
    </div>
  );
}
