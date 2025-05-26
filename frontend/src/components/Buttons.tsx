import { ReactElement } from "react";

type variants = "primary" | "secondary";

export interface ButtonProps {
  variant: variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  fullWidth?: boolean;
  loading?: boolean;
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
const defaultStyles = "flex items-center font-normal";
export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${
        sizeStyles[props.size]
      } ${defaultStyles} ${
        props.fullWidth ? "w-full justify-center items-center" : ""
      } ${
        props.loading
          ? "disabled cursor-not-allowed opacity-45"
          : "cursor-not-allowed"
      }`}
    >
      {/* {props.startIcon} */}
      <span>
        {props.startIcon ? (
          <div className="pr-2">{props.startIcon}</div>
        ) : (
          <div></div>
        )}
      </span>
      &nbsp;
      <span>{props.text}</span>
      {/* <span>{props.endIcon}</span> */}
    </button>
  );
};
