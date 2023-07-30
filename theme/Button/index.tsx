type ButtonProps = {
  text: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  className?: string;
  disable?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  rightIcon,
  leftIcon,
  className,
  disable,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`flex items-center ${
        !disable && " hover:opacity-90"
      } rounded-lg ${disable && "opacity-50"} ${className}`}
      disabled={disable}
      onClick={onClick}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  );
};
export default Button;
