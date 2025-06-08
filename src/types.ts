export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  major: string;
  school: string;
  year: string;
}

export interface Skill {
  name: string;
}

export interface Skills {
  [x: string]: any;
  Frameworks: string[];
  Languages: string[];
  Databases: string[];
  Tools: string[];
  SoftSkills: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Resume {
  name: string;
  title: string;
  contact: Contact;
  education: Education[];
  skills: Skills;
  projects: Project[];
}
