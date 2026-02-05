export function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col items-center justify-center gap-4 border-t border-stone-200 mt-24">
      <h2 className="font-display text-2xl text-stone-400">María Susarlat</h2>
      <p className="text-xs text-stone-500 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
