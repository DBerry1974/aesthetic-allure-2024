import { Bars3Icon } from "@heroicons/react/24/outline/index";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../stores/menu";

export const MenuButton = () => {
  const open = useStore(isMenuOpen);

  const handleClick = () => {
    isMenuOpen.set(true);
  };
  
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-rose-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200"
      aria-controls="slide-out-menu"
      aria-expanded={open}
      onClick={handleClick}
    >
      <span className="sr-only">Open menu</span>
      <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
    </button>
  );
};
