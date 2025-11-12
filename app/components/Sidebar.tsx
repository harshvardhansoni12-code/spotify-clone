"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSearch, BiHome, BiBook } from "react-icons/bi";
import Box from "./Box";
import Library from "./Library";
import SideBarItem from "./SideBarItem";
interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathName = usePathname();
  const routes = [
    {
      label: "Home",
      active: pathName !== "/search",
      href: "/",
      icon: BiHome,
    },
    ,
    {
      label: "Search",
      active: pathName === "/search",
      href: "/search",
      icon: BiSearch,
    },
    {
      label: "About",
      active: pathName === "/about",
      href: "/about",
      icon: BiBook,
    },
  ];
  return (
    <div className=" flex h-full">
      <div
        className="
        md:flex
        flex-col
        gap-y-2
        bg-black-500
        h-screen
        w-64
        p-2
        m-1
        rounded-xl
      "
      >
        <Box className="flex flex-col gap-y-4 px-5 py-4">
          <div>
            {routes.map((item) => (
              //@ts-ignore
              <SideBarItem key={item?.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>
      <main>{children}</main>
    </div>
  );
};
export default SideBar;
