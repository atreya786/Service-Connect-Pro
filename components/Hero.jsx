"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Hero = () => {
  const router = useRouter();
  return (
    <div
      className="h-dvh w-full rounded-md flex items-center p-5"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('https://imgs.search.brave.com/ATHLGdc-eikKPxAYJn9pAJZ-GHzlx1XZbJLvbteOFa4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzEz/OTM2Ni9UaGUtcG93/ZXItb2YtaGVyby1p/bWFnZS1kZXNpZ24t/ZmVhdHVyZWQtaW1h/Z2UuanBn')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-white">
        <div className="text-5xl font-semibold md:text-start text-center">
          Connecting Professionals, Empowering Growth
        </div>
        <div className="pt-5 text-center md:text-start md:w-[60%]">
          Welcome to Service Connect Pro, your ultimate destination for seamless
          collaboration between service providers and clients. Whether you&apos;re a
          professional seeking new opportunities or a client in search of
          top-notch services, our platform offers the perfect match. Experience
          a revolution in service provision as we empower growth, foster
          connections, and elevate experiences. Join our vibrant community where
          success knows no bounds, and together, let&apos;s redefine the way services
          are delivered. Embrace efficiency, embrace excellence – with Service
          Connect Pro, your journey towards success begins here.
        </div>
        <div className="flex justify-center md:justify-start">
          <Button
            onClick={() => {
              router.push("/Services");
            }}
            className="px-5 py-2 bg-black text-white inline-block mt-10 border"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
