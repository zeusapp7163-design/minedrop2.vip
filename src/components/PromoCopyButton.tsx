"use client";

import { useState } from "react";
import styles from "./Landing.module.css";

export function PromoCopyButton({
  code,
  copyLabel,
  copiedLabel,
  ariaLabel,
}: {
  code: string;
  copyLabel: string;
  copiedLabel: string;
  ariaLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className={`${styles.copyButton} ${copied ? styles.copyDone : ""}`}
      onClick={copy}
      aria-label={`${ariaLabel} ${code}`}
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
