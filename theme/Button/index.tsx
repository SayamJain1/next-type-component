type ButtonProps = {
  text: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  className?: string;
  disable?: boolean;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  variant: "primary-btn" | "secondary-btn" | "text-blue-btn";
  size: "sm" | "md" | "lg";
  gap?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  rightIcon,
  leftIcon,
  className,
  disable,
  type,
  onClick,
  variant,
  size,
  gap,
}) => {
  return (
    <button
      type={type}
      className={`inline-block w-full ${variant} ${size} rounded-lg  ${
        disable ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      disabled={disable}
      onClick={onClick}
    >
      <span className={`flex items-center justify-center ${gap}`}>
        {leftIcon ? leftIcon : ""}
        {text}
        {rightIcon ? rightIcon : ""}
      </span>
    </button>
  );
};
export default Button;

// ${
//   !disable && "hover:opacity-90"
// }
