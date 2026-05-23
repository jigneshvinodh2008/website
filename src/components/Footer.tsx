import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-black py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Jignesh Vinodh. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://threads.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors flex items-center justify-center font-bold text-lg leading-none"
            aria-label="Threads"
          >
            @
          </Link>
        </div>
      </div>
    </footer>
  );
}
