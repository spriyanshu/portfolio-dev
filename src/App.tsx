import { useCallback, useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';
import { Marquee } from '@/components/Marquee';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Work } from '@/sections/Work';
import { Lab } from '@/sections/Lab';
import { Stack } from '@/sections/Stack';
import { Writing } from '@/sections/Writing';
import { Contact } from '@/sections/Contact';
import contentData from '@/data/content.json';
import { ContentData } from '@/types';

const content = contentData as ContentData;

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  const closePalette = useCallback(() => setPaletteOpen(false), []);
  const openPalette = useCallback(() => setPaletteOpen(true), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const { sections } = content;

  return (
    <div className="grain relative min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-base"
      >
        Skip to content
      </a>

      <Header personalInfo={content.personal} onOpenPalette={openPalette} />

      <main className="relative">
        {sections.hero.enabled && (
          <Hero personalInfo={content.personal} metrics={content.metrics} />
        )}

        <div className="mt-24 md:mt-32">
          <Marquee items={content.marquee} />
        </div>

        {sections.about.enabled && (
          <About about={content.about} education={content.education} />
        )}

        {sections.experience.enabled && <Experience experiences={content.experience} />}

        {sections.projects.enabled && <Work projects={content.projects} />}

        {sections.building.enabled && <Lab building={content.building} />}

        {sections.skills.enabled && <Stack skills={content.skills} />}

        {(sections.blog.enabled || sections.featured.enabled) && (
          <Writing blogConfig={content.blog} featured={content.featured} />
        )}

        {sections.contact.enabled && (
          <Contact contact={content.contact} personalInfo={content.personal} />
        )}
      </main>

      <Footer personalInfo={content.personal} />

      <CommandPalette
        open={paletteOpen}
        onClose={closePalette}
        personalInfo={content.personal}
      />
    </div>
  );
}

export default App;
