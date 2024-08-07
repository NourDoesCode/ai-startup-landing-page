import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 ">
      <div className="container">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <LogoIcon className="h-8 w-8" />
          </div>
          {/* Button */}

          <div className="flex gap-4 items-center">
            <button>join waitlist</button>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
/*border-4 border-red-500*/
//border-4 border-blue-500
//border-4 border-purple-500
//border-4 border-yellow-500
