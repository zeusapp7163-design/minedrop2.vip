"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#play", label: "Играть" },
  { href: "#about", label: "Об игре" },
  { href: "#how", label: "Как играть" },
  { href: "#demo", label: "Демо" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors ${
        scrolled || open
          ? "border-b border-line bg-black/95 backdrop-blur-md"
          : "bg-black/35"
      }`}
    >
      <div className="page-shell flex h-[var(--header-h)] items-center justify-between gap-3">
        <a
          href="/"
          className="shrink-0 font-display text-sm font-semibold tracking-wide"
        >
          minedrop2<span className="text-accent">.vip</span>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-fg-muted lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#play" className="btn-yellow !min-h-10 !px-3.5 !text-sm">
            Играть
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-black px-4 py-3 lg:hidden"
        >
          <ul className="mx-auto flex max-w-[var(--page-max)] flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-sm text-fg-muted hover:bg-white/5 hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
