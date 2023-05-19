import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="  mt-3">
        <div className="ml-4 text-white">
          <h1 className="bg-primaryDark-200 w-[286px] p-3 rounded-xl">
            List: Things to Buy
          </h1>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Layout;
