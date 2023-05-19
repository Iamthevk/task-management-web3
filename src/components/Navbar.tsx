import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center bg-primary-500 text-white h-9 ">
        <p>Lorem Ipsum is simply dummy text of the printing</p>
      </div>
      <div className="h-14 border-b-2 border-secondary-200 flex justify-between items-center pl-10">
        <p className="text-lg text-white ">Section</p>
        <div className="text-white mr-4">
          <div className="flex bg-primaryDark-200 w-[200px] items-center rounded-lg gap-3">
            <Image
              src="/wallet.png"
              alt="wallet"
              width={14}
              height={14}
              className="ml-3 min-w-max py-2  "
            />
            <p> 0.2 $XYZ</p>
            <p className="bg-primary-300 text-primary-500 rounded-lg py-1 px-3 p-0 m-1">
              Tier 1
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
