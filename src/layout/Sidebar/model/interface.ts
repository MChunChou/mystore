import React from "react";

export interface SideBarProps {
  template?: React.FunctionComponent;
  // headerTemplate: React.ReactNode;
  // headerTemplate?: React.ReactElement;
  headerTemplate: React.ComponentType;
}
