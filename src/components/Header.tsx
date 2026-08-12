"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    }

    document.body.style.overflow = open ? "hidden" : "";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <a href="#content" className={styles.skipLink}>
        К содержанию
      </a>
      <header className={styles.topbar}>
        <Container className={styles.topbarInner}>
          <Link href="/" className={styles.brand} aria-label="minedrop2.vip">
            minedrop2<span className={styles.brandAccent}>.vip</span>
          </Link>

          <nav className={styles.nav} aria-label="Основная навигация">
            {landingConfig.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.topbarActions}>
            <ButtonLink href="#play" size="small">
              Играть
            </ButtonLink>
            <button
              ref={menuRef}
              type="button"
              className={styles.menuButton}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </Container>

        {open ? (
          <nav
            id="mobile-navigation"
            className={styles.drawer}
            aria-label="Мобильная навигация"
          >
            {landingConfig.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>
    </>
  );
}
