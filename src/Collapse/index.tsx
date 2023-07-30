import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import IconButton from "IconButton";
import "./index.scss";

import { CollapseProps } from "./type";

const Collapse = forwardRef(
  (props: CollapseProps, ref: React.Ref<unknown> | undefined) => {
    const [isOpen, setIsOpen] = useState(true);
    useImperativeHandle(ref, () => {
      return {
        open: () => {
          setIsOpen(true);
        },
        close: () => {
          setIsOpen(false);
        },
        getOpenStatus: () => isOpen,
      };
    });

    const handleActive = useCallback(() => {
      setIsOpen((open) => !open);
    }, []);

    return (
      <div className={classnames("collapse", { active: isOpen })}>
        <div className="content box">{props.children}</div>
        <IconButton
          className={classnames("collapse-btn")}
          onClick={handleActive}
          icon={faCaretUp}
        />
      </div>
    );
  }
);

// export default forwardRef(Collapse);
export default Collapse;
