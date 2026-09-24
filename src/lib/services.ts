import type { Accent } from "./accents";
import content from "@/data/content.json";

export type Service = {
  name: string;
  description: string;
  includes: string[];
  href?: string;
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  accent: Accent;
  items: Service[];
};

export const serviceGroups = content.services as ServiceGroup[];
