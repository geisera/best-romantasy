export default function Footer() {
  return (
    <footer className="mt-20 border-t border-violet-900/30 bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-violet-900/40 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 p-8 shadow-lg shadow-violet-950/50">
          <div className="text-center">
            <div className="mb-3 flex justify-center gap-2">
              <span className="text-amber-400/40 text-sm">✦</span>
              <span className="text-amber-400/40 text-sm">✦</span>
              <span className="text-amber-400/40 text-sm">✦</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              <span className="font-semibold text-amber-300">Disclosure:</span> This site contains affiliate links. 
              When you click on links to Amazon products and make a purchase, we may earn a small commission at no additional cost to you. 
              This helps support our work in bringing you the best romantasy book recommendations.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-violet-400/50">
            © {new Date().getFullYear()} Top 100 Romantasy Books. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
