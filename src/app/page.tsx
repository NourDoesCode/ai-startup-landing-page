import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
    </>
  );
}
