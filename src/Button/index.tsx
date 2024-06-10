import { useState, useEffect, useMemo, useCallback } from "react";
import { Props } from "./model/interface";

const Button = (props: Props) => {
  return (
    <div>
      <span className="lable"></span>
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
