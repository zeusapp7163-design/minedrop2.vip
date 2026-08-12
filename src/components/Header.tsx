"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 h-[var(--header-h)] transition-colors ${
        scrolled ? "border-b border-line bg-black/92 backdrop-blur-md" : "bg-black/40"
      }`}
    >
      <div className="page-shell flex h-full items-center justify-between gap-3">
        <a
          href="/"
          className="shrink-0 font-display text-sm font-semibold tracking-wide"
        >
          minedrop2<span className="text-accent">.vip</span>
        </a>
        <nav className="hidden items-center gap-5 text-sm text-fg-muted md:flex">
          <a href="#play" className="hover:text-fg">
            Играть
          </a>
          <a href="#about" className="hover:text-fg">
            Об игре
          </a>
          <a href="#demo" className="hover:text-fg">
            Демо
          </a>
          <a href="#faq" className="hover:text-fg">
            FAQ
          </a>
        </nav>
        <a href="#play" className="btn-yellow !min-h-10 !px-3.5 !text-sm">
          Играть
        </a>
      </div>
    </header>
  );
}
