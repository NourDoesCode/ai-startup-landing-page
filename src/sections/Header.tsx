import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 ">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-4  rounded-xl  backdrop-blur ">
          {/* Logo */}
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <LogoIcon className="h-8 w-8" />
          </div>
          <nav className="md:flex items-center justify-between gap-8 px-9 text-sm sm:hidden">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Changelog
            </Link>
          </nav>

          <div className="flex gap-4 items-center">
            <Button>Join Waitlist</Button>
            <MenuIcon className=" md:hidden" />
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
