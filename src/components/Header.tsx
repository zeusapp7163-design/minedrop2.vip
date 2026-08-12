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
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 6);
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
    <header className={`topbar ${solid || open ? "is-solid" : ""}`}>
      <div className="topbar__row">
        <a href="/" className="brand">
          minedrop2<span>.vip</span>
        </a>
        <nav className="nav" aria-label="Навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <a href="#play" className="btn btn--primary btn--sm">
            Играть
          </a>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="mobile-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
