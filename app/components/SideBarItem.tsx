import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
interface SideBarItemProps {
  icon: IconType;
  active: boolean;
  label: string;
  href: string;
  className?: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  icon: Icon,
  active,
  label,
  href,
  className,
}) => {
  return (
    <div className="flex space-between">
      <Link
        href={href}
        className={twMerge(
          `flex flex-row h-auto text-neutral-500 hover:text-white-500 items-center w-full gap-x-4 text-md font-medium cursor-pointer`,
          className
        )}
      >
        <Icon size={25} />
        <p className="truncate w-full">{label}</p>
      </Link>
    </div>
  );
};

export default SideBarItem;
