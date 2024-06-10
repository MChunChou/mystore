import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  Children,
} from "react";
import { Props } from "./model/interface";

const DataGrid = ({ data, children }: Props) => {
  console.log(data);
  const conntroller = useMemo(() => {
    if (children) {
      const c = Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          console.log(child.type);
        }
        return;
      });
    }
    return <div></div>;
  }, [children]);

  return (
    <div className="my-data-grid">
      <div className="controller">{conntroller}</div>
    </div>
  );
};
export default DataGrid;
