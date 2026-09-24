import type { Accent } from "./accents";
import content from "@/data/content.json";

export type Profile = typeof content.profile;

export type Experience = {
  company: string;
  type: string;
  title: string;
  location: string;
  dates: string;
  current: boolean;
  accent: Accent;
  stack: string[];
  highlights: string[];
};

export type PortfolioProject = {
  slug: string;
  name: string;
  dates: string;
  stack: string[];
  illustration: string;
  accent: Accent;
  oneLiner: string;
  highlights: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  accent: Accent;
  items: string[];
};

export type Education = {
  school: string;
  degree: string;
  score: string;
  location: string;
  dates: string;
  accent: Accent;
};

export const profile = content.profile;
export const experience = content.experience as Experience[];
export const portfolioProjects = content.projects as PortfolioProject[];
export const skillGroups = content.skills as SkillGroup[];
export const education = content.education as Education[];
