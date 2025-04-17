import { ReactElement } from "react";

export interface cardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export interface sidebarItems {
  startIcon: ReactElement;
  title: string;
}
