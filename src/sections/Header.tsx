import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-4  rounded-xl   ">
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
            <button className=" relative rounded-lg py-2 px-3 font-medium text-sm bg-gradient-to-b from-slate-900 to-purple-800 shadow-[0px_0px_12px_#8c45ff] left-2 ">
              <div className="absolute inset-0 ">
                {/* gradient border */}
                <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image: linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="border absolute inset-0 rounded-lg  border-white/40 [mask-image: linear-gradient(to_top,black,transparent) ] "></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>

              <span className="whitespace-nowrap">Join waitlist</span>
            </button>
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
