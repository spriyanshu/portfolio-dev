import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS, scrollToSection } from '@/lib/nav';
import { ArrowRight, ArrowUpRight, Check, Copy, Document, Github, LinkedIn, Mail, Search, XLogo } from '@/components/Icons';
import { useCopy } from '@/hooks/useCopy';
import { PersonalInfo } from '@/types';

interface Command {
  id: string;
  label: string;
  hint: string;
  group: 'Navigate' | 'Links' | 'Actions';
  icon: JSX.Element;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  personalInfo: PersonalInfo;
}

export const CommandPalette = ({ open, onClose, personalInfo }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { copied, copy } = useCopy();

  const commands = useMemo<Command[]>(() => {
    const openTab = (url: string) => () => window.open(url, '_blank', 'noopener,noreferrer');

    return [
      ...NAV_ITEMS.map<Command>((item) => ({
        id: `nav-${item.id}`,
        label: item.label,
        hint: `Section ${item.index}`,
        group: 'Navigate',
        icon: <ArrowRight className="h-3.5 w-3.5" />,
        run: () => scrollToSection(item.id),
      })),
      {
        id: 'link-github',
        label: 'GitHub',
        hint: '@spriyanshu',
        group: 'Links',
        icon: <Github className="h-3.5 w-3.5" />,
        run: openTab(personalInfo.social.github),
      },
      {
        id: 'link-linkedin',
        label: 'LinkedIn',
        hint: 'priyanshusingh07',
        group: 'Links',
        icon: <LinkedIn className="h-3.5 w-3.5" />,
        run: openTab(personalInfo.social.linkedin),
      },
      {
        id: 'link-x',
        label: 'X / Twitter',
        hint: '@07spriyanshu',
        group: 'Links',
        icon: <XLogo className="h-3.5 w-3.5" />,
        run: openTab(personalInfo.social.twitter),
      },
      {
        id: 'action-resume',
        label: 'Open résumé',
        hint: 'PDF',
        group: 'Actions',
        icon: <Document className="h-3.5 w-3.5" />,
        run: openTab(personalInfo.resumeUrl),
      },
      {
        id: 'action-email',
        label: 'Send an email',
        hint: personalInfo.email,
        group: 'Actions',
        icon: <Mail className="h-3.5 w-3.5" />,
        run: () => {
          window.location.href = personalInfo.social.email;
        },
      },
      {
        id: 'action-copy',
        label: 'Copy email address',
        hint: personalInfo.email,
        group: 'Actions',
        icon: copied ? <Check className="h-3.5 w-3.5 text-signal" /> : <Copy className="h-3.5 w-3.5" />,
        run: () => copy(personalInfo.email),
      },
    ];
  }, [personalInfo, copied, copy]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.hint} ${command.group}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => setCursor(0), [query]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setCursor(0);
    const id = window.setTimeout(() => inputRef.current?.focus(), 40);
    document.body.style.overflow = 'hidden';
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${cursor}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setCursor((c) => (c + 1) % Math.max(results.length, 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setCursor((c) => (c - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const command = results[cursor];
      if (!command) return;
      command.run();
      if (command.id !== 'action-copy') onClose();
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  let lastGroup = '';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, y: -8, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onKeyDown={onKeyDown}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-line-strong bg-base-elev shadow-2xl shadow-black/60"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="h-4 w-4 shrink-0 text-ink-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, links, actions…"
                className="w-full bg-transparent py-3.5 text-sm text-ink outline-none placeholder:text-ink-ghost"
                aria-label="Search commands"
              />
              <kbd className="shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-ghost">
                ESC
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[52vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-8 text-center font-mono text-2xs text-ink-ghost">
                  No matches for “{query}”
                </p>
              )}

              {results.map((command, index) => {
                const showGroup = command.group !== lastGroup;
                lastGroup = command.group;

                return (
                  <div key={command.id}>
                    {showGroup && (
                      <p className="mono-label px-3 pb-1.5 pt-3">{command.group}</p>
                    )}
                    <button
                      data-index={index}
                      onMouseMove={() => setCursor(index)}
                      onClick={() => {
                        command.run();
                        if (command.id !== 'action-copy') onClose();
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150 ${
                        cursor === index ? 'bg-white/[0.06] text-ink' : 'text-ink-muted'
                      }`}
                    >
                      <span className="text-ink-faint">{command.icon}</span>
                      <span className="text-sm">{command.label}</span>
                      <span className="ml-auto truncate font-mono text-2xs text-ink-ghost">
                        {command.id === 'action-copy' && copied ? 'Copied' : command.hint}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[10px] text-ink-ghost">
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-line px-1">↑</kbd>
                <kbd className="rounded border border-line px-1">↓</kbd> navigate
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-line px-1">↵</kbd> select
              </span>
              <span className="ml-auto flex items-center gap-1">
                spriyanshu.in <ArrowUpRight className="h-2.5 w-2.5" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
