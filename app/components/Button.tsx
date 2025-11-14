import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={
        (twMerge(`rounded-xl hover:bg-white hover:cursor-pointer`), className)
      }
    >
      {children}
    </button>
  );
};

export default Button;
