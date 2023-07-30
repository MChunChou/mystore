import { ButtonProps } from "useButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IconButtonProps extends ButtonProps {
  icon?: IconProp;
}
