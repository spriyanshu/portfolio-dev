import { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'work', label: 'Work', index: '03' },
  { id: 'lab', label: 'Lab', index: '04' },
  { id: 'stack', label: 'Stack', index: '05' },
  { id: 'writing', label: 'Writing', index: '06' },
  { id: 'contact', label: 'Contact', index: '07' },
];

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', `#${id}`);
};
