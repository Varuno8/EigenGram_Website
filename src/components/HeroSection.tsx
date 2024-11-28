import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-grey bg-gradient-to-b from-neutral-50 to-neutral-400">
          Deploy your website in seconds, not hours.
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          With our state of the art, cutting edge, we are so back kinda hosting
          services, you can deploy your website in seconds.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          {/* Create Account Button */}
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Create Account
            </Button>
          </Link>
          {/* Book a Call Button */}
          <Link href={"/contact"}>
            <Button
              borderRadius="1.75rem"
              className="bg-transparent border-white"
            >
              Book a Call
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
