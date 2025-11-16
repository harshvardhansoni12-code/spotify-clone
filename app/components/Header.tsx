"user Client";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome, HiSearch } from "react-icons/hi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <>
      <div
        className={twMerge(
          `
        h-fit 
        bg-gradient-to-b
        from-emerald-800
        p-6
        `,
          className
        )}
      >
        <div className="flex ">
          <div className="flex item-center justify-between w-full">
            <div className="w-full mb-4 flex item-center justify-between hidden md:flex">
              <div className="flex gap-x-1 ">
                <button>
                  <RxCaretLeft
                    className="text-white text-solid bg-black rounded-full hover:cursor-pointer"
                    size={25}
                  />
                </button>
                <button>
                  <RxCaretRight
                    className="text-white text-solid bg-black rounded-full hover:cursor-pointer"
                    size={25}
                  />
                </button>
              </div>
              <div className="flex justify-between gap-x-2">
                <Button className="text-black  font-bold p-1.5 text-white hover:bg-black hover:cursor-pointer hover:opacity-75 transition  text-sm rounded-2xl">
                  Sign Up
                </Button>
                <Button className="text-black bg-green-500 font-bold p-1.5 hover:text-white hover:bg-black hover:cursor-pointer hover:opacity-75 transition text-sm rounded-2xl">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between gap-x-140  md:hidden">
              <div className="flex gap-x-2">
                <button className="text-neutral-500 hover:text-white hover:bg-black p-1.5 rounded-full">
                  <HiHome />
                </button>
                <button className="text-neutral-500 hover:text-white hover:bg-black p-1.5 rounded-full">
                  <HiSearch />
                </button>
              </div>
              <div>
                <Button className="text-sm font-bold  hover:bg-black p-1 rounded-xl text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Header;
