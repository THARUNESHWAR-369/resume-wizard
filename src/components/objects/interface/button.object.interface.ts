import React from "react";

export interface ButtonObjectProps {
  btnCss: string;
  props?: ButtonProps;
  children: React.ReactNode;
}


export interface ButtonProps {
  onClick?: () => void;
}