import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: any;
  disabled?: any;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge("rounded-xl hover:cursor-pointer", className)}
    >
      {children}
    </button>
  );
};

export default Button;
