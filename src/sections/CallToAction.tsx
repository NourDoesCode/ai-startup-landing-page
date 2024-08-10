import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="w-full border border-white/15 rounded-xl p-24 overflow-hidden relative "
          style={{ backgroundImage: `url(${starsBg.src})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <div className="relative">
            <h3 className="text-center text-4xl font-medium leading-[120%] tracking-tighter max-w-sm mx-auto md:text-6xl ">
              AI-driven SEO for everyone.
            </h3>
            <p className="text-center text-lg tracking-tight text-white/70  md:text-xl max-w-xs mx-auto mt-7">
              Achieve clear, impactful results without complexity.
            </p>
            <div className="mt-5 justify-center flex">
              <Button>Join now!</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
/*border-4 border-red-500*/
//border-4 border-blue-500
//border-4 border-purple-500
//border-4 border-yellow-500
