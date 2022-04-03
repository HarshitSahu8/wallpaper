import React from "react";
import "./styles.css";

type ButtonProps = {
  onclick: any;
  label: string;
};
const Button = ({ onclick, label }: ButtonProps) => {
  return (
    <>
      <button className="btn" onClick={onclick}>
        {label}
      </button>
    </>
  );
};

export default Button;
