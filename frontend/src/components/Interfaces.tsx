import { ReactElement } from "react";

export interface cardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  content?: string;
}

export interface sidebarItems {
  startIcon: ReactElement;
  title: string;
}
