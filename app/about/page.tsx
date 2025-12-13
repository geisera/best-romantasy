"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base text-amber-400/80 transition-colors hover:text-amber-300"
          >
            <span>←</span> Back to Books
          </Link>
        </div>

        {/* Title */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex justify-center gap-2">
            <span className="text-amber-400/60 text-xl">✦</span>
            <span className="text-amber-400/60 text-xl">✦</span>
            <span className="text-amber-400/60 text-xl">✦</span>
          </div>
          <h1 className="text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-violet-200 to-amber-200 sm:text-6xl mb-4 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
            About Our Collection
          </h1>
          <p className="text-lg text-violet-300/80 font-light italic">
            A curated sanctuary for romantasy lovers
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-base leading-7">
          <div className="rounded-lg border border-violet-900/40 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 p-8 shadow-lg shadow-violet-950/50">
            <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-violet-300">
              Our Mission
            </h2>
            <p className="text-slate-300">
              Welcome to your gateway into worlds where ancient magic collides with forbidden desire, 
              where fae courts scheme in shadows, and where love blooms amidst the chaos of enchanted realms. 
              We curate the top 100 romantasy books from Amazon's bestseller lists, tracking the stories that 
              capture readers' hearts and imaginations. Whether you crave enemies-to-lovers tension, morally 
              grey antiheroes, or epic world-building intertwined with passion, you'll find your next obsession here.
            </p>
          </div>

          <div className="rounded-lg border border-violet-900/40 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 p-8 shadow-lg shadow-violet-950/50">
            <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-violet-300">
              What is Romantasy?
            </h2>
            <p className="text-slate-300 mb-4">
              Romantasy is where fantasy and romance entwine—genre-bending stories that give equal weight to 
              epic magical adventures and swoon-worthy love stories. These aren't just books with romantic subplots; 
              they're tales where the romance is as central to the story as the magic system, the political intrigue, 
              and the battle against darkness.
            </p>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">✧</span>
                <div>
                  <span className="font-semibold text-amber-300">Epic Fantasy Romance:</span> Sprawling worlds 
                  with intricate magic systems where love stories unfold against destinies and prophecies
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">✧</span>
                <div>
                  <span className="font-semibold text-violet-300">Dark & Spicy:</span> Morally complex characters, 
                  enemies-to-lovers tension, and romance that burns with intensity
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">✧</span>
                <div>
                  <span className="font-semibold text-amber-300">Fae Courts & Politics:</span> Scheming immortals, 
                  dangerous bargains, and the intoxicating danger of falling for the fae
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">✧</span>
                <div>
                  <span className="font-semibold text-violet-300">Found Family & Chosen Ones:</span> Powerful 
                  bonds forged in fire, destiny's call, and love that saves—or dooms—worlds
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-violet-900/40 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 p-8 shadow-lg shadow-violet-950/50">
            <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-violet-300">
              How We Rank
            </h2>
            <p className="text-slate-300">
              Our rankings are drawn directly from Amazon's romantasy bestseller lists and updated regularly 
              to reflect what readers are devouring right now. From Sarah J. Maas to Rebecca Yarros, from 
              established series to breakout debuts, we track the books that are casting spells on readers 
              everywhere. Whether you're seeking your next binge-worthy series or discovering new authors, 
              our list guides you to the most beloved stories in the genre.
            </p>
          </div>

          <div className="rounded-lg border border-violet-900/40 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 p-8 shadow-lg shadow-violet-950/50">
            <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-violet-300">
              Affiliate Disclosure
            </h2>
            <p className="text-slate-300">
              This site contains affiliate links to Amazon. When you purchase books through our links, 
              we may earn a small commission at no additional cost to you. This helps us maintain this 
              resource and continue bringing you the best romantasy recommendations. Every purchase 
              supports our mission to help readers find their next favorite world to get lost in.
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block rounded-lg border-2 border-amber-600/50 bg-amber-900/20 px-8 py-3 text-lg font-medium text-amber-300 transition-all hover:border-amber-500/70 hover:bg-amber-900/30 hover:text-amber-200 shadow-lg shadow-amber-900/30"
          >
            Explore the Collection ✧
          </Link>
        </div>
      </main>
    </div>
  );
}
