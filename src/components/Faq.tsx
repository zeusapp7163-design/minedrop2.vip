import { FAQ } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="section-rule scroll-target">
      <div className="page-shell section-pad" style={{ maxWidth: "48rem" }}>
        <h2 className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-3xl">
          FAQ
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {FAQ.map((item) => (
            <details key={item.question} className="faq-item py-1">
              <summary className="flex cursor-pointer items-start justify-between gap-4 py-4">
                <h3 className="min-w-0 text-[15px] font-semibold leading-snug sm:text-lg">
                  {item.question}
                </h3>
                <span
                  className="faq-chevron mt-1 shrink-0 text-fg-muted transition-transform"
                  aria-hidden
                >
                  ▾
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-fg-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
