import { SideBarProps } from "./model/interface";

const Sidebar: React.FC<SideBarProps> = ({
  headerTemplate: HeaderTemplate,
}) => {
  return (
    <div className="">
      <HeaderTemplate />
    </div>
  );
};

export default Sidebar;
