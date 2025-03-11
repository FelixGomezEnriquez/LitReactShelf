import { toggleTheme } from "../../themes/themes";

const ThemeToggle: React.FC = () => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-blue-500 text-white rounded-md dark:bg-blue-300 dark:text-black hover:cursor-pointer"
    >
      🌗 Cambiar modo dark/light
    </button>
  );
};

export default ThemeToggle;
