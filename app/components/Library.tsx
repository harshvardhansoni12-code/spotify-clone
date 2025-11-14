import {
  AiFillFileAdd,
  AiFillPlayCircle,
  AiFillPlusSquare,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiBookAdd, BiMessageSquareAdd, BiPlusMedical } from "react-icons/bi";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  return (
    <>
      <div>
        <div className="flex flex-cols items-center space-between gap-x-20 ">
          <div className="flex flex-cols items-center gap-x-2 p-1.5">
            <TbPlaylist size={26} className="text-neutral-500" />
            <p className="text-neutral-500 font-medium text-md">Your Library</p>
          </div>
          <div>
            <BiMessageSquareAdd
              size={26}
              className="text-neutral-500 hover:cursor-pointer hover:text-white"
            />
          </div>
        </div>
        <div className="p-2">Library of songs!</div>
      </div>
    </>
  );
};

export default Library;
