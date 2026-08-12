export function Footer() {
  return (
    <footer className="section-rule">
      <div className="page-shell py-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold">
              minedrop2<span className="text-accent">.vip</span>
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-fg-muted">
              Официальный сайт Mine Drop 2 — играть онлайн. Paperclip Gaming /
              Stake Engine. 18+.
            </p>
          </div>
          <a href="#play" className="btn-yellow self-stretch sm:self-auto">
            Играть
          </a>
        </div>
        <p className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-fg-muted">
          <strong className="text-fg">18+</strong>. Играйте ответственно.
          Азартные игры могут вызывать зависимость. Партнёрские ссылки могут быть
          remunerated. © {new Date().getFullYear()} minedrop2.vip
        </p>
      </div>
    </footer>
  );
}
