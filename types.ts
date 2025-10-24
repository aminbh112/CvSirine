
export interface Contact {
  location: string;
  phone: string;
  email: string;
  license: string;
  photoUrl: string;
}

export interface Language {
  name: string;
  level: number; // Percentage from 0 to 100
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EducationItem {
  year: string;
  institution: string;
  description: string;
}

export interface ExperienceItem {
  date: string;
  company: string;
  title: string;
  responsibilities: string[];
  logoUrl?: string;
}

export interface CvData {
  name: string;
  title: string;
  contact: Contact;
  profile: string;
  languages: Language[];
  skills: SkillCategory[];
  education: EducationItem[];
  experience: ExperienceItem[];
  stages: ExperienceItem[];
}
