import React from "react";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="w-64 pl-3 bg-primaryDark-500 h-screen">
      <div className="pt-12 gap-1 flex justify-start items-center pb-8">
        {" "}
        <span className="p-3 py-1 ml-3 text-white font-bold bg-primary-500 rounded-full       mr-2 text-lg">
          N
        </span>
        <p className="text-white text-2xl mr-10"> Name</p>
        <Image src="/slide-left.png" alt="slide-left" width={20} height={16} />
      </div>
      <ul className="ml-3">
        <li className="flex gap-5">
          <Image src={"/home.png"} alt="home" width={17} height={17} />
          <p className="text-sm space-x-2 text-primary-200">Home</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
