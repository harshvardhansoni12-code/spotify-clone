import { useActionState } from "react";
import {
  AiFillFileAdd,
  AiFillPlayCircle,
  AiFillPlusSquare,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiBookAdd, BiMessageSquareAdd, BiPlusMedical } from "react-icons/bi";
import { TbPlaylist } from "react-icons/tb";
//
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
const Library = () => {
  const authModal = useAuthModal();
  const UploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    return UploadModal.onOpen();
  };
  //
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
              onClick={onClick}
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
