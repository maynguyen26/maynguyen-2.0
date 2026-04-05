import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";

export default function SocialLinksCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-5 text-primary-dark">Follow Me</h2>

      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-300 ${social.color}`}
          >
            <social.icon className="w-5 h-5" />
            <span className="font-medium">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}