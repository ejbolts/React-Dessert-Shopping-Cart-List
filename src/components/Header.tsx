import profilePic from "../assets/cat_pf.png";
import { useDispatch } from "react-redux";
import { openSignInForm } from "../store/uiSlice";
export default function Header({ userName }: { userName: string }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap items-end justify-between px-20 pt-6 max-md:px-16 ">
      <h1 className="mr-6 text-5xl font-extrabold 2xl:text-6xl max-md:text-5xl dark:text-white">
        Desserts
      </h1>
      <div className="flex items-center gap-3 max-md:mt-4">
        <img
          src={profilePic}
          alt="profile-pic"
          className="w-10 h-10 rounded-full "
        />
        <button onClick={() => dispatch(openSignInForm())}>
          <span className="font-semibold text-stone-800 dark:text-white">
            {userName}
          </span>
        </button>
      </div>
    </div>
  );
}
