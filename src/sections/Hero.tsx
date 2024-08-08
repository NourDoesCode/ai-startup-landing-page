import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      {/* gradient purple background */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgb(80,27,122)",
          backgroundImage:
            "radial-gradient(circle, rgba(80,27,122,1) 0%, rgba(65,15,106,1) 7%, rgba(43,8,69,1) 23%, rgba(31,5,62,1) 46%, rgba(0,0,0,1) 84%, rgba(6,0,17,1) 100%)",
        }}
      ></div>

      {/* Planet */}
      <div
        className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
        style={{
          background: "rgb(2,0,6)",
          backgroundImage:
            "linear-gradient(124deg, rgba(2,0,6,1) 0%, rgba(248,244,255,1) 0%, rgba(108,70,181,1) 28%, rgba(30,12,61,1) 47%, rgba(23,7,50,1) 100%)",
        }}
      ></div>

      {/* Ring around the planet with flowing objects*/}

      <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-white inline-flex justify-center items-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Second ring*/}
      <div className=" absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Third Ring around the planet with flowing objects*/}

      <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute h-2 w-2 top-1.2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-white inline-flex justify-center items-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Page content*/}

      <div className="container relative mt-16 ">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-gradient-to-br from-slate-50 via-violet-200 to-violet-600 bg-clip-text text-transparent text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center ">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Now</Button>
        </div>
      </div>
    </section>
  );
};

//h1 gradients testing: bg-gradient-to-br from-sky-50 via-violet-600 to-violet-900 bg-clip-text text-transparent

//sphere color testing: bg-gradient-to-br from-purple-50 via-violet-900 to-stone-900
/*<div
className="absolute h-64 w-64 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
style={{
  background: "rgb(255,255,255)",
  backgroundImage:
    "linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(110,83,129,1) 19%, rgba(29,6,48,1) 35%)",
}}
></div> */
