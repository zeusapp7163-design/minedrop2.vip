import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./ui.module.css";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cx(styles.container, className)} {...props} />;
}

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "default" | "soft";
  compact?: boolean;
};

export function Section({
  className,
  tone = "default",
  compact = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cx(
        styles.section,
        tone === "soft" && styles.sectionSoft,
        compact && styles.sectionCompact,
        className,
      )}
      {...props}
    />
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  titleId: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  titleId,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cx(styles.header, Boolean(action) && styles.headerRow, className)}
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </header>
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
  size?: "default" | "small";
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cx(
        styles.button,
        variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary,
        size === "small" && styles.buttonSmall,
        className,
      )}
      {...props}
    />
  );
}

export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return <article className={cx(styles.card, className)} {...props} />;
}

export function DataTable({
  caption,
  children,
  className,
}: {
  caption: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(styles.tableWrap, className)}>
      <table className={styles.table}>
        <caption className="sr-only">{caption}</caption>
        {children}
      </table>
    </div>
  );
}
