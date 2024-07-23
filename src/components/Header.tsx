import profilePic from "../assets/images/cat_pf.png";
import { useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { openSignInForm } from "../store/cartSlice";
export default function Header({ userName }: { userName: string }) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="flex justify-between pt-6 px-20 max-md:px-16  flex-wrap items-end  ">
      <h1 className="font-extrabold text-5xl mr-6 2xl:text-6xl max-md:text-5xl dark:text-white">
        Desserts
      </h1>
      <div className="flex items-center gap-3 max-md:mt-4">
        <img
          src={profilePic}
          alt="profile-pic"
          className="rounded-full w-10 h-10 "
        />
        <button onClick={() => dispatch(openSignInForm())}>
          <span className="text-stone-800 font-semibold dark:text-white">
            {userName}
          </span>
        </button>
      </div>
    </div>
  );
}
