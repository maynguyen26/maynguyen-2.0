import { FilmIcon } from "@heroicons/react/24/outline";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

function YouTubeEmbed({
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

interface VideoCardProps {
  videoId: string;
  title: string;
  caption: string;
}

export default function VideoCard({ videoId, title, caption }: VideoCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-accent/20">
      <h2 className="text-xl font-bold mb-4 text-primary-dark flex items-center">
        <FilmIcon className="w-5 h-5 mr-2 text-accent" />
        {title}
      </h2>

      <div className="rounded-lg overflow-hidden mb-3 border-2 border-accent/20">
        <YouTubeEmbed videoId={videoId} title={title} />
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm">{caption}</p>
    </div>
  );
}
