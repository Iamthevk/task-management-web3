import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="grid grid-flow-col gap-7 place-items-baseline w-[286px]">
          <div className="ml-4 text-white">
            <h1 className="bg-primaryDark-300  p-3 rounded-xl">
              List : Things to Buy
            </h1>
            <Card />
          </div>

          <div className="text-white">
            <h1 className="bg-primaryDark-300 p-3 rounded-xl">
              List : Empty List
            </h1>
            <Card />
          </div>
          <div className="text-white">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
