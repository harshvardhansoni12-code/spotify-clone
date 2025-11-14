import Image from "next/image";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

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
        <Header className="text-3xl ">
          <div>Welcome Harsh!</div>
          <ListItem href="/liked" image="liked.png" name="Liked Songs" />
        </Header>
      </div>
      <div>NEW SONGS!</div>
      <div>list of new songs!</div>
    </div>
  );
}
//56:33
