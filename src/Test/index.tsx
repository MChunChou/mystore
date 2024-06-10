import { useRef } from "react";
import Collapse, { CollapseRef } from "../layout/Collapse";

const Test = () => {
  const ref = useRef<CollapseRef | null>(null);
  return <Collapse ref={ref} open={true}></Collapse>;
};

export default Test;
