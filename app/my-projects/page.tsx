import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

function Page() {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0c011a]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
          My work<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text=[16px] text-gray-200 md:text-gray-400">
          See the latest updates to the MDN reference pages about JavaScript
          regular expressions, including new sections on sub-features and
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
}

export default Page;
