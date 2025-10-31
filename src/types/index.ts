export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  favicon: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  resumeUrl: string;
}

export interface SectionConfig {
  enabled: boolean;
}

export interface Sections {
  hero: SectionConfig;
  about: SectionConfig;
  experience: SectionConfig;
  projects: SectionConfig;
  skills: SectionConfig;
  blog: SectionConfig;
  featured: SectionConfig;
  contact: SectionConfig;
}

export interface About {
  title: string;
  description: string;
  paragraphs: string[];
}

export interface Experience {
  tags: string[];
  id: string;
  company: string;
  companyLogo: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
    viewAll?: string;
  };
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Featured {
  id: string;
  title: string;
  platform: string;
  url: string;
  description: string;
  date: string;
}

export interface BlogConfig {
  externalBlogUrl: string;
  rssUrl: string;
}

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export interface Contact {
  title: string;
  description: string;
  email: string;
}

export interface ContentData {
  personal: PersonalInfo;
  sections: Sections;
  about: About;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  featured: Featured[];
  blog: BlogConfig;
  contact: Contact;
}
