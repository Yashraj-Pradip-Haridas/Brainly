import { ReactElement } from "react";

type variants = "primary" | "secondary";

export interface ButtonProps {
  variant: variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  //   startIcon: ReactElement;
  //   endIcon?: string;
  onClick: () => void;
  //   Adding ? makes the variable optional in react
}
// u can also use maps or records
const variantStyles: { [key in variants]: string } = {
  secondary: "bg-purple-400 text-purple-600 rounded-md",
  primary: "bg-purple-600 text-white rounded-md"
};

const sizeStyles = {
  sm: "px-2 py-1 text-sm m-2",
  md: "px-4 py-2 text-md m-2",
  lg: "px-4 py-2 text-md m-2"
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${
        sizeStyles[props.size]
      } flex`}
    >
      {/* {props.startIcon} */}
      <span>{props.startIcon}</span>
      <span>{props.text}</span>
    </button>
  );
};
