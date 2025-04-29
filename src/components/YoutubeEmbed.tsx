"use client";

type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
};

export default function YouTubeEmbed({
  videoId,
  title = "YouTube video player",
}: YouTubeEmbedProps) {
  return (
    <div className="relative w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
