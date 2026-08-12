"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import styles from "./Landing.module.css";

const STORAGE_KEY = "minedrop2-age-ok";

type AgeGateCopy = {
  title: string;
  text: string;
  confirm: string;
  deny: string;
  denied: string;
};

function isAgeConfirmed() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberAgeConfirmed() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // ignore storage failures
  }
}

export function AgeGateLink({
  href,
  className,
  children,
  copy,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  copy: AgeGateCopy;
}) {
  const titleId = useId();
  const textId = useId();
  const confirmRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [denied, setDenied] = useState(false);
  const pendingHref = useRef(href);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    confirmRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setDenied(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const continueToPartner = useCallback(() => {
    rememberAgeConfirmed();
    setOpen(false);
    setDenied(false);
    window.open(pendingHref.current, "_blank", "noopener,noreferrer");
  }, []);

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    if (isAgeConfirmed()) {
      return;
    }

    event.preventDefault();
    pendingHref.current = href;
    setDenied(false);
    setOpen(true);
  }

  return (
    <>
      <a
        href={href}
        className={className}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>

      {open
        ? createPortal(
            <div
              className={styles.ageGate}
              role="presentation"
              onClick={() => {
                setOpen(false);
                setDenied(false);
              }}
            >
              <div
                className={styles.ageGateDialog}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={textId}
                onClick={(event) => event.stopPropagation()}
              >
                <p className={styles.ageGateBadge}>18+</p>
                <h2 id={titleId} className={styles.ageGateTitle}>
                  {copy.title}
                </h2>
                <p id={textId} className={styles.ageGateText}>
                  {copy.text}
                </p>
                {denied ? (
                  <p className={styles.ageGateDenied} role="status">
                    {copy.denied}
                  </p>
                ) : null}
                <div className={styles.ageGateActions}>
                  <button
                    ref={confirmRef}
                    type="button"
                    className={styles.ageGateConfirm}
                    onClick={continueToPartner}
                  >
                    {copy.confirm}
                  </button>
                  <button
                    type="button"
                    className={styles.ageGateDeny}
                    onClick={() => setDenied(true)}
                  >
                    {copy.deny}
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
