import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Currently } from '@/sections/Currently';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Life } from '@/sections/Life';
import { Skills } from '@/sections/Skills';
import { Blog } from '@/sections/Blog';
import { Featured } from '@/sections/Featured';
import { Contact } from '@/sections/Contact';
import contentData from '@/data/content.json';
import { ContentData } from '@/types';

function App() {
  const content = contentData as ContentData;

  return (
    <div className="min-h-screen">
      <Loader />
      <Header personalInfo={content.personal} />

      <main>
        {content.sections.hero.enabled && <Hero personalInfo={content.personal} />}

        {content.sections.about.enabled && <About about={content.about} />}

        <Currently />

        {content.sections.experience.enabled && <Experience experiences={content.experience} />}

        {content.sections.projects.enabled && <Projects projects={content.projects} />}

        <div className="torn-divider" aria-hidden="true" />

        <Life />

        <div className="torn-divider flip" aria-hidden="true" />

        {content.sections.skills.enabled && <Skills skills={content.skills} />}

        {content.sections.blog.enabled && <Blog blogConfig={content.blog} />}

        {content.sections.featured.enabled && <Featured featured={content.featured} />}

        {content.sections.contact.enabled && (
          <Contact contact={content.contact} personalInfo={content.personal} />
        )}
      </main>

      <Footer personalInfo={content.personal} />
    </div>
  );
}

export default App;
