import useTheme from "../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="btn btn-sm border border-base-content/20 rounded-full bg-transparent hover:bg-base-content/5 transition-colors"
      >
        {theme === "light" ? <BsMoonStars size={20} /> : <FaSun size={20} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
