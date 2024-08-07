import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
export const Hero = () => {
  return (
    <section
      className="h-[492px] flex items-center"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      <div
        className="absolute h-64 w-64 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
        style={{
          background: "rgb(2,0,6)",
          backgroundImage:
            "linear-gradient(124deg, rgba(2,0,6,1) 0%, rgba(248,244,255,1) 0%, rgba(108,70,181,1) 28%, rgba(30,12,61,1) 47%, rgba(23,7,50,1) 100%)",
        }}
      ></div>

      <div className="container relative ">
        <h1 className="text-8xl font-semibold tracking-tighter bg-gradient-to-br from-slate-50 via-violet-200 to-violet-600 bg-clip-text text-transparent text-center">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Elevate your site's visibility effortlessly <br /> with AI, where
          smart technology meets <br />
          user-friendly SEO tools.
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
