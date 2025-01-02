interface ButtonProps {
  click: () => void;
  className?: string;
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export default function Button({
  click,
  text,
  className,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
    <button className={`gap-x-2 ${className}`} onClick={click}>
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </button>
  );
}
