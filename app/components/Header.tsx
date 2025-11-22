"use client";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome, HiSearch } from "react-icons/hi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import AuthModal from "./AuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "hooks/useUser";
import { User, UserRound, User2, CircleUserRound } from "lucide-react";

import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handLogOut = async () => {
    // handle logout in the future
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
  };
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
              <div className="flex justify-between items-center gap-x-2">
                {user ? (
                  <div className="flex gap-x-4 item-center">
                    <Button
                      onClick={handLogOut}
                      className="bg-white px-2 text-sm text-black"
                    >
                      LogOut
                    </Button>
                    <Button
                      onClick={() => {}}
                      className="bg-white text-black rounded-full p-0.5"
                    >
                      <User2 size={26} />
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-between gap-x-2">
                    <Button
                      onClick={authModal.onOpen}
                      className="text-black hover:bg-white  font-bold p-1.5 text-white hover:bg-black hover:cursor-pointer hover:opacity-75 transition  text-sm rounded-2xl"
                    >
                      Sign Up
                    </Button>
                    <Button
                      onClick={authModal.onOpen}
                      className="text-black bg-green-500  hover:bg-white font-bold p-1.5 hover:text-white hover:bg-black hover:cursor-pointer hover:opacity-75 transition text-sm rounded-2xl"
                    >
                      Log In
                    </Button>
                  </div>
                )}
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
