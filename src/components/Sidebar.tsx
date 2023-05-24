import { useState } from "react";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <>
      {openSidebar && (
        <div className="pl-3 bg-primaryDark-500 h-screen border-r-2 border-secondary-200 md:w-[300px]">
          <div className="pt-12 gap-1 flex justify-start items-center pb-8">
            <span className="p-3 py-1 ml-3 text-white font-bold bg-primary-500 rounded-full mr-2 text-lg">
              N
            </span>
            <p className="text-white text-2xl mr-10"> Name</p>
            <Image
              onClick={() => setOpenSidebar(false)}
              src="/slide-left.png"
              alt="slide-left"
              width={20}
              height={16}
              className="cursor-pointer"
            />
          </div>
          <ul className="ml-3">
            <li className="flex gap-5 mb-5 hover:bg-primaryDark-100 hover:py-2 hover:px-0.5 hover:rounded-lg">
              <Image src="/home.png" alt="home" width={20} height={17} />
              <p className="text-sm space-x-2 text-primary-200 hover:text-white ">
                Home
              </p>
            </li>
            <li className="flex gap-5 mb-5 hover:bg-primaryDark-100 hover:py-2 hover:px-0.5 hover:rounded-lg">
              <Image
                src="/section-1.png"
                alt="section-one"
                width={20}
                height={17}
              />
              <p className="text-sm space-x-2 text-primary-200 hover:text-white ">
                Section 1
              </p>
            </li>
            <li className="flex gap-5 mb-5 hover:bg-primaryDark-100 hover:py-2 hover:px-0.5 hover:rounded-lg">
              <Image
                src="/section-2.svg"
                alt="section-two"
                width={17}
                height={17}
              />
              <p className="text-sm space-x-2 text-primary-200 hover:text-white ">
                Section 2
              </p>
            </li>
            <li className="flex gap-5 mb-5 hover:bg-primaryDark-100 hover:py-2 hover:px-0.5 hover:rounded-lg">
              <Image
                src="/share.svg"
                alt="section-eight"
                width={17}
                height={17}
              />
              <p className="text-sm space-x-2 text-primary-200 hover:text-white ">
                Section 8
              </p>
            </li>
            <li className="flex gap-5 hover:bg-primaryDark-100 hover:py-2 hover:px-0.5 hover:rounded-lg">
              <Image
                src="/share.svg"
                alt="section-eight"
                width={17}
                height={17}
              />
              <p className="text-sm space-x-2 text-primary-200 hover:text-white">
                Section 8
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
