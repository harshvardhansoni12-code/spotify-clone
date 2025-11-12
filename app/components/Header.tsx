"user Client";
import { twMerge } from "tailwind-merge";
import LogOut from "./Button";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

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
        <div className="flex">
          <div className="w-full mb-4 flex item-center justify-between">
            <div className="flex gap-x-1">
              <button>
                <RxCaretLeft
                  className="text-white text-solid bg-black rounded-full"
                  size={25}
                />
              </button>
              <button>
                <RxCaretRight
                  className="text-white text-solid bg-black rounded-full"
                  size={25}
                />
              </button>
            </div>
            <LogOut className="text-black bg-green-500 p-1 hover:p-2 text-sm rounded-2xl">
              logOut
            </LogOut>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
