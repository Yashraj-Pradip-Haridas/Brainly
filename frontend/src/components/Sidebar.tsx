import BrainIcon from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="h-screen bg-white w-64 fixed left-0 top-0 hidden sm:block z-10">
      <h1 className="text-center pt-5 font-bold text-purple-600 text-3xl flex justify-center">
        {" "}
        Brainly <BrainIcon size="lg" />
      </h1>
      <div className="pt-10 px-4 justify-center">
        <SidebarItem
          startIcon={<TwitterIcon size="lg" />}
          title="Twitter"
        />
        <SidebarItem
          startIcon={<YoutubeIcon size="lg" />}
          title="YouTube"
        />
      </div>
    </div>
  );
}
