import React from "react";
import Card from "./Card";

function Layout() {
  return (
    <div className="w-full  mt-3">
      <div className="ml-4 text-white">
        <h1 className="bg-primaryDark-200 w-[286px] p-3 rounded-xl">
          List: Things to Buy
        </h1>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Layout;
