interface MarqueeProps {
  items: string[];
}

export const Marquee = ({ items }: MarqueeProps) => {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line bg-base-elev/40 py-4">
      <div className="mask-fade-x flex">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {track.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-10 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-ink-ghost" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
