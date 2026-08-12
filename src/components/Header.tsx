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
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setOn(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`top ${on || open ? "on" : ""}`}>
      <div className="top__in">
        <a href="/" className="logo">
          minedrop2<i>.vip</i>
        </a>
        <nav className="nav" aria-label="Разделы сайта">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <a href="#play" className="btn btn-gold btn-sm">
            Играть
          </a>
          <button
            type="button"
            className="menu"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="site-menu" className="drawer" aria-label="Мобильное меню">
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
