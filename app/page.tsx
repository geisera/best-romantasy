import Link from "next/link";
import romantasyData from "../romantasy-100.json";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";

interface Book {
  title?: string;
  name?: string;
  url: string;
  asin: string;
  price?: {
    value: number;
    currency: string;
  } | null;
  author?: string;
  stars?: number;
  thumbnailImage?: string;
  highResolutionImages?: string[];
  bookDescription?: string;
  bestsellerPageData?: {
    categoryName: string;
    position: number;
  };
  position?: number;
}

export default function Home() {
  const books = (romantasyData as any[]).sort((a, b) => {
    const posA = (a as any).bestsellerPageData?.position ?? (a as any).position ?? 999;
    const posB = (b as any).bestsellerPageData?.position ?? (b as any).position ?? 999;
    return posA - posB;
  }) as Book[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-12 flex justify-end">
          <Link
            href="/about"
            className="text-base font-medium text-amber-400/80 transition-colors hover:text-amber-300"
          >
            About
          </Link>
        </div>

        <div className="mb-16 text-center">
          <div className="mb-4 flex justify-center gap-2">
            <span className="text-amber-400/60 text-xl">✦</span>
            <span className="text-amber-400/60 text-xl">✦</span>
            <span className="text-amber-400/60 text-xl">✦</span>
          </div>
          <h1 className="text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-violet-200 to-amber-200 sm:text-6xl mb-4 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
            Top 100 Romantasy Books
          </h1>
          <p className="text-lg text-violet-300/80 font-light italic">
            Where darkness meets desire ✧
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {books.map((book, index) => {
            const bookData = {
              title: (book.title || book.name) ?? "",
              url: book.url,
              asin: book.asin,
              author: book.author ?? "Unknown",
              stars: book.stars,
              thumbnailImage: book.thumbnailImage ?? "",
              highResolutionImages: book.highResolutionImages,
              bookDescription: book.bookDescription,
              bestsellerPageData: book.bestsellerPageData ?? {
                categoryName: "",
                position: book.position ?? index + 1
              }
            };
            return <BookCard key={book.asin} book={bookData} index={index} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
