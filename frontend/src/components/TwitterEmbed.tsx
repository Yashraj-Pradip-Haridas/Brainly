import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr: any;
  }
}

export default function TweetEmbed({ link }: { link: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    script.setAttribute("charset", "utf-8");
    document.body.appendChild(script);

    const interval = setInterval(() => {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load(containerRef.current);
        clearInterval(interval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [link]);

  return (
    <div
      className="p-3 overflow-hidden"
      ref={containerRef}
    >
      <blockquote className="twitter-tweet">
        <a
          href={`${link.replace("x.com", "twitter.com")}?ref_src=twsrc%5Etfw`}
        ></a>
      </blockquote>
    </div>
  );
}
