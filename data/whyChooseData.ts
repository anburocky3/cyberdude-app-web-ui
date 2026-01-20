import {
  Eye,
  ListChecks,
  Brain,
  Zap,
  Users,
  Trophy,
  MessageCircle,
  CalendarClock,
  BarChart3,
  ShieldCheck,
  Award,
} from "lucide-react";
import { ComponentType } from "react";

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  side: "left" | "right";
}

const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    title: "Strict Monitoring",
    icon: Eye,
    side: "left",
    description:
      "Tracks learning progress and platform activity in real time to ensure consistency, focus, and quality outcomes.",
  },
  {
    id: 2,
    title: "Structured Learning",
    icon: ListChecks,
    side: "right",
    description:
      "Clear, step-by-step learning paths designed to build skills progressively and practically.",
  },
  {
    id: 3,
    title: "Natural Intelligence",
    icon: Brain,
    side: "left",
    description:
      "Encourages critical thinking, creativity, and real understanding instead of rote memorization.",
  },
  {
    id: 4,
    title: "Active Engagement",
    icon: Zap,
    side: "right",
    description:
      "Interactive tasks, challenges, and hands-on activities that keep learners actively involved.",
  },
  {
    id: 5,
    title: "Community Learning",
    icon: Users,
    side: "left",
    description:
      "Peer discussions, shared learning, and mentor support to grow together as a community.",
  },
  {
    id: 6,
    title: "Gamified Engagement",
    icon: Trophy,
    side: "right",
    description:
      "Points, badges, and leaderboards that motivate consistency and long-term learning habits.",
  },
  {
    id: 7,
    title: "Context-Aware Discussion Forums",
    icon: MessageCircle,
    side: "left",
    description:
      "Ask doubts directly inside lessons, videos, or quizzes with discussions tied to specific content.",
  },
  {
    id: 8,
    title: "Scheduled 1:1 Mentorship",
    icon: CalendarClock,
    side: "right",
    description:
      "Book one-on-one sessions with mentors for deeper guidance based on your learning progress.",
  },
  {
    id: 9,
    title: "User Skill Points",
    icon: BarChart3,
    side: "left",
    description:
      "Skill-based points track engagement, logic, and consistency—shown visually in your profile.",
  },
  {
    id: 10,
    title: "Verified Talent Pool",
    icon: ShieldCheck,
    side: "right",
    description:
      "Recruiters access verified skill profiles, real scores, and project proof—not just resumes.",
  },
  {
    id: 11,
    title: "Certificates & Smart Portfolio",
    icon: Award,
    side: "left",
    description:
      "Auto-generated online resume, portfolio, and digital certificates with verifiable skill data.",
  },
];

export default whyChooseData;
