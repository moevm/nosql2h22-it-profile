import "./style.scss";
import React from "react";

interface IProps {
  children: JSX.Element | String;
  variant?: "primary" | "secondary";
}

export default function SubmitButton({
  children,
  variant = "secondary",
}: IProps): JSX.Element {
  return (
    <button type="submit" className={"submit--button " + variant}>
      {children}
    </button>
  );
}
