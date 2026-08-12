export function Footer() {
  return (
    <footer className="band">
      <div className="shell foot">
        <div className="foot__row">
          <div>
            <p className="logo">
              minedrop2<i>.vip</i>
            </p>
            <p className="lede" style={{ marginTop: "0.55rem" }}>
              Официальный сайт Mine Drop 2 — Paperclip Gaming / Stake Engine.
            </p>
          </div>
          <a href="#play" className="btn btn-gold">
            Играть
          </a>
        </div>
        <p className="foot__legal">
          <strong style={{ color: "var(--fg)" }}>18+</strong>. Играйте
          ответственно. Азартные игры могут вызывать зависимость. На сайте
          есть партнёрские ссылки. © {new Date().getFullYear()} minedrop2.vip
        </p>
      </div>
    </footer>
  );
}
