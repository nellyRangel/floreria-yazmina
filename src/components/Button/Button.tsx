interface ButtonProps {
  click: () => void;
  className?: string;
  text: string;
}

export default function Button({ click, text, className }: ButtonProps) {
  return (
    <button className={className} onClick={click}>
      {text}
    </button>
  );
}
