import React from "react";
import Image from "next/image";

function Card() {
  return (
    <div className="bg-primaryDark-200 w-72 p-2 rounded-lg mt-2">
      <form className="mb-4 relative">
        <div className="flex">
          <Image
            src="/bag.png"
            alt="money bag"
            width={24}
            height={24}
            className="min-w-[24px] mb-1 "
          />
          <input
            type="text"
            placeholder="Add Todo"
            className="rounded px-2 py-1 bg-inherit"
            //   value={}
            //   onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Add Todo Description"
          className="rounded px-2 py-1 bg-inherit"
          //   value={}
          //   onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primaryDark-100 absolute right-2 top-2 text-white px-2 py-1 ml-2 rounded-full"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default Card;
