// import heroImg from "../hero.jpg"

import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="h-[calc(100vh-132px)] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="flex h-full w-full items-center justify-center bg-gray-900/40">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Unleash Your Inner Style Icon
          </h1>
          <p className="mt-4 text-sm text-white lg:text-base">
            Discover the latest trends in men’s fashion, tailored for every
            occasion.
          </p>
          <Link
            href="#collection"
            className="mt-4 w-full transform rounded-md bg-yellow-400 px-5 py-2 text-sm font-medium capitalize text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:w-auto"
          >
            View Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
