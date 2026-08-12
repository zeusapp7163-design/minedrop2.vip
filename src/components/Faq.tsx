import { FAQ } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="band anchor">
      <div className="shell sec">
        <div style={{ maxWidth: 720 }}>
          <p className="eyebrow">FAQ</p>
          <h2 className="title">Частые вопросы</h2>
          <p className="lead">Где играть, демо, RTP, Mine Slot 2.</p>
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
