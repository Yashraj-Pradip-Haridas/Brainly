// import { useEffect } from "react";
import { BinIcon } from "../icons/BinIcon";
import ShareIcon from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { cardProps } from "./Interfaces";
import TweetEmbed from "./TwitterEmbed";

const defaultStyle = "flex items-center p-1 m-1";

export default function Card(props: cardProps) {
  // YouTube embed conversion function
  const getYouTubeEmbedLink = (link: string) => {
    try {
      const url = new URL(link);
      const videoId = url.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : link;
    } catch {
      return link;
    }
  };

  return (
    <div className="rounded-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md  p-2 bg-white min-h-24 min-w-72">
      {/* Header */}
      <div className={`${defaultStyle} justify-between flex-nowrap`}>
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="text-gray-500">
            {props.type === "youtube" && <YoutubeIcon size="lg" />}
            {props.type === "twitter" && <TwitterIcon size="lg" />}
          </span>
          <span className="text-sm sm:text-base truncate whitespace-nowrap overflow-hidden">
            {props.title}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 flex-shrink-0">
          <BinIcon size="md" />
          <ShareIcon size="md" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full">
        {/* YouTube Embed */}
        {props.type === "youtube" && (
          <div className="p-3">
            <iframe
              className="w-full aspect-video p-3"
              height={315}
              src={getYouTubeEmbedLink(props.link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Twitter Embed */}
        {props.type === "twitter" && <TweetEmbed link={props.link} />}

        {props.content ? (
          <p className="text-sm sm:text-base">{props.content}</p>
        ) : null}
      </div>
    </div>
  );
}
