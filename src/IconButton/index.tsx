import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import classnames from "classnames";
import "./index.scss";

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconDefinition;
}

const IconButton = (props: IconButtonProps) => {
  const { icon, className, ...buttonProps } = props;

  return (
    <button className={classnames(className, "icon-button")} {...buttonProps}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
