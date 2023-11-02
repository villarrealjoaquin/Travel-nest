import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  className: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ className, type, onClick, children, ...attributes }: ButtonProps) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      {...attributes}
    >
      {children}
    </button>
  )
}
export default Button;