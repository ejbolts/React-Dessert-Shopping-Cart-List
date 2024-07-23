import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkModeToggle({
  setDarkMode,
  darkMode,
}: {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}) {
  return (
    <div className="flex flex-row-reverse px-20 pt-10">
      <button onClick={() => setDarkMode(!darkMode)} className="">
        <DarkModeSwitch checked={darkMode} onChange={setDarkMode} size={40} />
      </button>
    </div>
  );
}
