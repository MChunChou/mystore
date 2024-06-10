import { useState, useCallback, forwardRef, useImperativeHandle } from "react";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import classnames from "classnames";
import IconButton from "../../IconButton";

import { CollapseProps } from "./module";

import "./Collapse.scss";
export interface CollapseRef {
  open?(): void;
  close?(): void;
}

// ForwardRefRenderFunction<CollapseRef, CollapseProps>
const Collapse = forwardRef(
  (props: CollapseProps, ref: React.Ref<CollapseRef>) => {
    const [isOpen, setIsOpen] = useState(true);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          setIsOpen(true);
        },
        close: () => {
          setIsOpen(false);
        },
        // getOpenStatus: () => isOpen,
      };
    });

    const handleActive = useCallback(() => {
      setIsOpen((open) => !open);
    }, []);

    return (
      <div className={classnames("my-collapse", { active: isOpen })}>
        <div className="content box">{props.children}</div>
        <IconButton
          className={classnames("collapse-btn")}
          onClick={handleActive}
          icon={faCaretUp}
        ></IconButton>
      </div>
    );
  }
);

// export default forwardRef(Collapse);
export default Collapse;
