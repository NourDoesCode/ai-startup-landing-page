"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-[54px] font-[600] leading-[120%] tracking-tighter md:text-[60px]">
          Elevate your SEO efforts.
        </h2>
        <p className="text-center text-lg tracking-tight text-white/70 mt-5 md:text-xl max-w-2xl mx-auto">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab) => (
            <div
              className="flex items-center gap-3 border rounded-xl  border-white/15 p-2.5 lg:flex-1"
              key={tab.title}
            >
              <div className="border border-white/15 w-12 h-12 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="w-5 h-5" autoplay />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="bg-[#8c44ff] rounded-full px-2 py-0.5 text-xs text-black font-semibold">
                  new!
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-md"
            style={{ backgroundImage: `url(${productImage.src})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
