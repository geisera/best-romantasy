"use client";

import { useState } from "react";
import Image from "next/image";

interface BookCardProps {
  book: {
    title: string;
    url: string;
    asin: string;
    author: string;
    stars?: number;
    thumbnailImage: string;
    highResolutionImages?: string[];
    bookDescription?: string;
    bestsellerPageData?: {
      categoryName: string;
      position: number;
    };
  };
  index: number;
}

export default function BookCard({ book, index }: BookCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const highResImage = book.highResolutionImages?.[0];
  const affiliateUrl = `${book.url}${book.url.includes("?") ? "&" : "?"}tag=tbsp02-20`;

  // Normalize + split description into paragraphs
  const paragraphs = book.bookDescription
    ? book.bookDescription
        // Handle HTML <br> tags from some sources
        .replace(/<br\s*\/?>/gi, "\n")
        // Handle literal "\n" sequences (backslash + n) from JSON / APIs
        .replace(/\\n/g, "\n")
        // Normalize Windows / old-style line endings
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        // Split on one-or-more newlines (paragraph-ish breaks)
        .split(/\n+/)
        .map((para) => para.trim())
        .filter((para) => para.length > 0)
    : [];

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-lg border border-violet-900/40 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 p-8 shadow-lg shadow-violet-950/50 transition-all hover:shadow-xl hover:shadow-violet-900/50 hover:border-amber-600/50"
    >

      {/* Content Row: Position Badge, Thumbnail and Details */}
      <div className="relative z-10 flex items-start gap-4">
        {/* Position Badge */}
        <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-900/40 via-violet-900/40 to-amber-900/40" />
          <div className="absolute inset-0 rounded-full border-2 border-amber-600/60 shadow-inner shadow-amber-500/20" />
          <span className="text-xs absolute -top-1 left-1/2 -translate-x-1/2 text-amber-400/60">✦</span>
          <span className="relative z-10 text-2xl font-bold text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
            #{book.bestsellerPageData?.position ?? index + 1}
          </span>
        </div>

        {/* Thumbnail and Details Container */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* Thumbnail */}
          {book.thumbnailImage ? (
            <div className="relative h-[280px] w-[190px] flex-shrink-0 overflow-hidden rounded-md border-2 border-violet-900/50 bg-slate-950 shadow-lg shadow-violet-950/50 mx-6">
              <Image
                src={book.thumbnailImage}
                alt={book.title}
                fill
                className="object-cover transition-all duration-300 group-hover:brightness-110"
                sizes="190px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="relative h-[280px] w-[190px] flex-shrink-0 overflow-hidden rounded-md border-2 border-violet-900/50 bg-gradient-to-br from-slate-900 to-indigo-950 shadow-lg mx-6">
              <div className="flex h-full items-center justify-center text-6xl text-amber-500/20">
                ✧
              </div>
            </div>
          )}

          {/* Book Details */}
          <div
            className={`flex min-w-0 flex-1 flex-col transition-all ${
              !isExpanded ? "max-h-[300px] overflow-hidden" : ""
            }`}
          >
            <h3 className="mb-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-violet-200 to-amber-200 leading-tight">
              {book.title}
            </h3>
            <p className="mb-4 text-base text-violet-300/70 italic">
              by {book.author}
            </p>

            {book.stars && (
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl text-amber-400">
                  ★
                </span>
                <span className="text-base font-semibold text-amber-300/90">
                  {book.stars.toFixed(1)}
                </span>
              </div>
            )}

            {paragraphs.length > 0 && (
              <div className="relative flex-1">
                {!isExpanded ? (
                  // Collapsed: show only the first paragraph
                  <div className="space-y-3 text-base leading-7 text-slate-300 line-clamp-4">
                    <p>{paragraphs[0]}</p>
                  </div>
                ) : (
                  // Expanded: show all paragraphs
                  <div className="space-y-3 text-base leading-7 text-slate-300">
                    {paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {book.bookDescription &&
                  book.bookDescription.length > 400 &&
                  !isExpanded && (
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsExpanded(true);
                        }}
                        className="mt-3 px-4 py-2 text-sm font-medium text-amber-300 hover:text-amber-200 border border-amber-600/50 hover:border-amber-500/70 bg-amber-900/20 hover:bg-amber-900/30 rounded-md transition-all shadow-sm shadow-amber-900/30"
                      >
                        Read More ✧
                      </button>
                    </div>
                  )}

                {isExpanded && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsExpanded(false);
                    }}
                    className="mt-4 mx-auto block px-4 py-2 text-sm font-medium text-amber-300 hover:text-amber-200 border border-amber-600/50 hover:border-amber-500/70 bg-amber-900/20 hover:bg-amber-900/30 rounded-md transition-all shadow-sm shadow-amber-900/30"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

    </a>
  );
}
