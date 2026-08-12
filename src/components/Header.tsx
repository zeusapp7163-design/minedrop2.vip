"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import type { LandingConfig, Locale } from "@/content";
import styles from "./Landing.module.css";

export function Header({
  config,
  locale,
  isHome = true,
  languagePaths = { ru: "/", en: "/en" },
}: {
  config: LandingConfig;
  locale: Locale;
  isHome?: boolean;
  languagePaths?: { ru: string; en: string };
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const { header } = config.ui;
  const homeAnchor = (href: `#${string}`) =>
    isHome ? href : `${config.path}${href}`;

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
        {header.skip}
      </a>
      <header className={styles.topbar}>
        <Container className={styles.topbarInner}>
          <Link
            href={config.path}
            className={styles.brand}
            aria-label="minedrop2.vip"
          >
            minedrop2<span className={styles.brandAccent}>.vip</span>
          </Link>

          <nav className={styles.nav} aria-label={header.navLabel}>
            {config.nav.map((item) => (
              <a key={item.href} href={homeAnchor(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.topbarActions}>
            <nav
              className={styles.localeSwitch}
              aria-label={header.languageLabel}
            >
              <Link
                href={languagePaths.ru}
                className={locale === "ru" ? styles.localeActive : undefined}
                aria-current={locale === "ru" ? "page" : undefined}
              >
                RU
              </Link>
              <Link
                href={languagePaths.en}
                className={locale === "en" ? styles.localeActive : undefined}
                aria-current={locale === "en" ? "page" : undefined}
              >
                EN
              </Link>
            </nav>
            <ButtonLink
              href={homeAnchor("#play")}
              size="small"
              className={styles.headerCta}
            >
              {header.play}
            </ButtonLink>
            <button
              ref={menuRef}
              type="button"
              className={styles.menuButton}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? header.closeMenu : header.openMenu}
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
            aria-label={header.mobileNavLabel}
          >
            {config.nav.map((item) => (
              <a
                key={item.href}
                href={homeAnchor(item.href)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div
              className={`${styles.localeSwitch} ${styles.drawerLocale}`}
              role="group"
              aria-label={header.languageLabel}
            >
              <Link
                href={languagePaths.ru}
                className={locale === "ru" ? styles.localeActive : undefined}
                aria-current={locale === "ru" ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                RU
              </Link>
              <Link
                href={languagePaths.en}
                className={locale === "en" ? styles.localeActive : undefined}
                aria-current={locale === "en" ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                EN
              </Link>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}
