"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyHeader() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
const onScroll = () => setSolid(window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-colors ${solid ? "bg-white/95 backdrop-blur border-b border-black/10" : "bg-white"}`}>
      <nav className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm">
        <Link href="/" className="font-semibold tracking-tight text-black">CycleHuman</Link>
        <ul className="hidden md:flex gap-6 text-black">
          <li><Link href="/bike" className="hover:underline">Bike</Link></li>
          <li><Link href="/apparel" className="hover:underline">Apparel</Link></li>
          <li><Link href="/community" className="hover:underline">Community</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <Link href="/search" aria-label="Search" className="px-3 py-2 min-h-[44px]">Search</Link>
          <Link href="/cart" aria-label="Cart" className="px-3 py-2 min-h-[44px]">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
