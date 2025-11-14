"use client";
import { useRouter } from "next/navigation";
import { FaPlayCircle } from "react-icons/fa";
interface ListItemProps {
  name: string;
  image: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ name, image, href }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };
  return (
    <>
      <button
        onClick={onClick}
        className="
      relative
      group
      flex
      item-center
      rounded-md
      overflow-hidden 
      gap-x-4
      bg-neutral-100/10
      hover: bg-neutral-100/
      transition
      pr-
      m-3
      "
      >
        <div className="flex justify-center item-center pt-4 pr-1 m-0.5">
          <div className="relative min-h-[52px] min-w-[100px] p-2">
            <image className="object-cover" href={image} />
          </div>
          <div>{name}</div>
          <div>
            <FaPlayCircle
              size={35}
              className="p-1.5 mb-3 hover:cursor-pointer hover:p-0.5 transition"
            />
          </div>
        </div>
      </button>
    </>
  );
};

export default ListItem;
//
