import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ConciergeBell,
  Github,
  Loader2,
  Rocket,
  X,
} from "lucide-react";
import type { Icon as LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: Rocket,
  close: X,
  bell: ConciergeBell,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  github: Github,
  spinner: Loader2,
};
