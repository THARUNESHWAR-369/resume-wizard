import React from "react";
import { ButtonObjectProps } from "src/components/objects/interface/button.object.interface";

function ButtonObject({ btnCss, props={}, children }: ButtonObjectProps) {
  return (
      <button {...props} className={`${btnCss}`}>
        {children}
      </button>
  );
}

export default ButtonObject;
