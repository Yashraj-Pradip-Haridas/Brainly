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
  secondary: "bg-purple-400 text-purple-600 rounded-md p-3 m-5",
  primary: "bg-purple-600 text-white rounded-md p-3 m-5"
};
export const Button = (props: ButtonProps) => {
  return (
    <button className={variantStyles[props.variant]}>
      {/* {props.startIcon} */}
      <span>{props.text}</span>
    </button>
  );
};
