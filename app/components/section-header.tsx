interface SectionHeaderProps {
  tag: string;
  cmd: string;
  title: string;
  sub?: string;
}

export default function SectionHeader({ tag, cmd, title, sub }: SectionHeaderProps) {
  return (
    <header className="sec-head">
      <div className="sec-tag">
        <span className="dim">[</span>{tag}<span className="dim">]</span>
        <span className="ascii-div">{'─'.repeat(24)}</span>
      </div>
      <div className="sec-cmd">
        <span className="prompt">$</span> {cmd}
      </div>
      <h2 className="sec-title">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </header>
  );
}
