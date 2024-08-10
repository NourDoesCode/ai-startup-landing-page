import LogoIcon from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-10 md:py-14 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* logo + brand name */}
          <div className="flex gap-3 items-center">
            <LogoIcon className="h-8 w-8 " />
            <h3 className="font-medium lg:text-3xl">AI Startup</h3>
          </div>

          {/* navbar */}

          <nav className="flex flex-col gap-4 lg:flex-row lg:gap-8">
            <Link
              href="https://x.com/NourEdit"
              className="text-gray-400 hover:text-white transition text-xs md:text-md lg:text-lg"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition text-xs md:text-md lg:text-lg"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition text-xs md:text-md lg:text-lg"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition text-xs md:text-md lg:text-lg"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition text-xs md:text-md lg:text-lg"
            >
              Changelog
            </Link>
          </nav>

          {/* social links */}

          <div className="flex py-8 gap-5">
            <XSocial className="text-white/40 hover:text-white  cursor-pointer transition" />
            <InstaSocial className="text-white/40 hover:text-white  cursor-pointer transition" />
            <YTSocial className="text-white/40 hover:text-white cursor-pointer transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
