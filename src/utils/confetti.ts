const SHAPES = ['★', '✿', '♡', '✦', '🌟', '🩷', '🌈', '✨'];

/**
 * Bursts a shower of little scrapbook stickers out from a screen point.
 * Pure DOM + Web Animations API — no dependencies.
 */
export function confettiBurst(originX: number, originY: number, count = 26) {
  if (typeof document === 'undefined') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.fontSize = `${14 + Math.random() * 16}px`;
    document.body.appendChild(piece);

    const angle = Math.PI * (0.15 + Math.random() * 0.7) * -1; // mostly upward
    const velocity = 120 + Math.random() * 260;
    const dx = Math.cos(angle) * velocity * (Math.random() > 0.5 ? 1 : -1);
    const dy = Math.sin(angle) * velocity - 120;
    const rotate = (Math.random() - 0.5) * 720;
    const duration = 900 + Math.random() * 800;

    const anim = piece.animate(
      [
        { transform: 'translate(-50%, -50%) rotate(0deg)', opacity: 1 },
        {
          transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy + 320}px)) rotate(${rotate}deg)`,
          opacity: 0,
        },
      ],
      { duration, easing: 'cubic-bezier(0.21, 0.6, 0.35, 1)', fill: 'forwards' }
    );

    anim.onfinish = () => piece.remove();
  }
}

/** Convenience: burst from the center of the element that fired the event. */
export function confettiFromEvent(e: { currentTarget: EventTarget | null }) {
  const el = e.currentTarget as HTMLElement | null;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  confettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
}
