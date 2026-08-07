export interface Availability {
  status: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  roleLine: string;
  tagline: string;
  intro: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  timezoneLabel: string;
  availability: Availability;
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
  building: SectionConfig;
  skills: SectionConfig;
  blog: SectionConfig;
  featured: SectionConfig;
  contact: SectionConfig;
}

export interface Metric {
  value: string;
  unit: string;
  label: string;
  detail: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
}

export interface About {
  title: string;
  kicker: string;
  description: string;
  paragraphs: string[];
  focus: FocusArea[];
  principles: string[];
}

export interface Experience {
  id: string;
  company: string;
  companyLogo: string;
  position: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  year: string;
  role: string;
  status: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  metrics: ProjectMetric[];
  image: string;
  links: {
    demo?: string;
    github?: string;
    viewAll?: string;
  };
}

export interface Building {
  id: string;
  name: string;
  blurb: string;
  progress: number;
  status: string;
  tags: string[];
  link?: string;
}

export interface SkillCategory {
  name: string;
  note: string;
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
  ctaLabel: string;
}

export interface ContentData {
  personal: PersonalInfo;
  sections: Sections;
  metrics: Metric[];
  marquee: string[];
  about: About;
  experience: Experience[];
  projects: Project[];
  building: Building[];
  skills: Skills;
  education: Education[];
  featured: Featured[];
  blog: BlogConfig;
  contact: Contact;
}

export interface NavItem {
  id: string;
  label: string;
  index: string;
}
