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
        <div className="  mt-3">
          <div className="ml-4 text-white">
            <h1 className="bg-primaryDark-300 w-[286px] p-3 rounded-xl">
              List : Things to Buy
            </h1>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
