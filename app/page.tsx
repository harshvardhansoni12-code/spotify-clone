import Image from "next/image";
import Header from "./components/Header";
import LogOut from "./components/Button";
export default function Home() {
  return (
    <div
      className="
    bg-neutral-900 
    rounded-lg 
    w-full
    h-full 
    overflow-hidden 
    overflow-y-auto
    "
    >
      <div className="">
        <Header className="text-xl">Welcome Harsh!</Header>
      </div>
    </div>
  );
}
