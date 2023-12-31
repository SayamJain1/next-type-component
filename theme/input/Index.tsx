type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  classNameContianer?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  classNameContianer,
  disabled,
  icon,
}) => {
  return (
    <div className={`flex flex-col ${classNameContianer}`}>
      <label htmlFor={`input-${label}`} className="mb-1">
        {label}
      </label>
      {icon}
      <input
        type="text"
        id={`input-${label}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-lg px-4 py-2 ${
          disabled ? "opacity-50" : "hover:opacity-90"
        } ${className}`}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
