"use client";

import { Button } from "./ui/button";

const Hero = () => {

  return (
    <div
      className="h-dvh w-full rounded-md flex items-center p-5"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('https://plus.unsplash.com/premium_photo-1683141123518-ae57c1b4d335?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-white">
        <div className="text-5xl font-semibold md:text-start text-center">
          Melodies that help you stay focus
        </div>
        <div className="pt-5 text-center md:text-start md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, hic quam.
          Optio aperiam quod accusantium fugiat sequi, enim cupiditate!
          Perspiciatis ipsum dolorem, nobis assumenda, inventore repellat est
          sed eius quasi vero alias, accusantium magni? Quo, aspernatur
          voluptate. Quam recusandae aperiam est culpa id nemo dolorem vitae,
          non ratione minus iste tempore asperiores quisquam. Eos, modi aut odit
          voluptas error illum exercitationem mollitia alias at delectus saepe
          facilis earum eaque animi porro ipsa dicta, veritatis praesentium
          commodi. Laborum voluptate voluptates animi, deleniti, sequi facere
          eum obcaecati pariatur dolore doloribus, amet excepturi recusandae
          fugiat numquam est eius sunt non mollitia expedita officiis.
        </div>
        <div className="flex justify-center md:justify-start">
          <Button className="px-5 py-2 bg-black text-white inline-block mt-10 border">
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
