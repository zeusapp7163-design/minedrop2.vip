import { FAQ } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="band anchor" aria-labelledby="faq-title">
      <div className="shell sec">
        <div style={{ maxWidth: "42rem" }}>
          <p className="kicker">FAQ</p>
          <h2 id="faq-title" className="h2">
            Частые вопросы
          </h2>
          <p className="lede">
            Где играть, есть ли демо, чем Mine Drop 2 отличается от Mine Slot 2.
          </p>
          <div className="faq">
            {FAQ.map((item) => (
              <details key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <span className="faq__chev" aria-hidden>
                    ▾
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
