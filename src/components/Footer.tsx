export function Footer() {
  return (
    <footer className="band">
      <div className="shell foot">
        <div className="foot__row">
          <div>
            <p className="brand">
              minedrop2<span>.vip</span>
            </p>
            <p className="lead" style={{ marginTop: 8 }}>
              Официальный сайт Mine Drop 2. Paperclip Gaming / Stake Engine. 18+.
            </p>
          </div>
          <a href="#play" className="btn btn--primary">
            Играть
          </a>
        </div>
        <p className="foot__note">
          <strong style={{ color: "var(--fg)" }}>18+</strong>. Играйте
          ответственно. Партнёрские ссылки могут быть remunerated. ©{" "}
          {new Date().getFullYear()} minedrop2.vip
        </p>
      </div>
    </footer>
  );
}
