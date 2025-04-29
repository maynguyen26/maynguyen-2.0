import { PhotoIcon } from "@heroicons/react/24/outline";
import PhotoGallery from "@/components/PhotoGallery";

interface MemoriesCardProps {
  photos: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export default function MemoriesCard({ photos }: MemoriesCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-accent/20">
      <h2 className="text-xl font-bold mb-4 text-primary-dark flex items-center">
        <PhotoIcon className="w-5 h-5 mr-2 text-accent" />
        Favourite Memories
      </h2>

      <div className="rounded-lg overflow-hidden mb-3">
        <PhotoGallery photos={photos} compact={true} />
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm mt-3">
        A glimpse into my journey - from ultimate to outdoor adventures!
      </p>
    </div>
  );
}
