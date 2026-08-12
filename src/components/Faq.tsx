import { FAQ } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="section-rule scroll-target">
      <div className="page-shell section-pad" style={{ maxWidth: "48rem" }}>
        <p className="section-eyebrow">FAQ</p>
        <h2 className="section-title">Частые вопросы про Mine Drop 2</h2>
        <p className="section-lead">
          Где играть онлайн, демо, RTP и чем Mine Drop 2 не равен Mine Slot 2.
        </p>
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
