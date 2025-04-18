import { sidebarItems } from "./Interfaces";

export default function SidebarItem(props: sidebarItems) {
  return (
    <div className="flex items-center  gap-4  hover:bg-gray-300 transition-all p-2 rounded duration-200">
      <div className="text-xl">{props.startIcon}</div>
      <span className="hidden sm:inline text-sm">{props.title}</span>
    </div>
  );
}
