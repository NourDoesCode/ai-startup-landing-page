"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="w-full border border-white/15 rounded-xl p-24 overflow-hidden relative "
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear",
          }}
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
        </motion.div>
      </div>
    </section>
  );
};
