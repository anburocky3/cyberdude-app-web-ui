export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    title: "Strict Monitoring",
    icon: "mdi:eye-outline",
    description:
      "Tracks learning progress and platform activity in real time. Ensures course completion, engagement, and assessment quality. Helps identify learning gaps early across different streams and institutions.",
  },
  {
    id: 2,
    title: "Structured Learning",
    icon: "mdi:format-list-checks",
    description:
      "Provides well-organized courses with clear learning paths. Supports step-by-step progress and connects learning with real-world skills for consistent growth.",
  },
  {
    id: 3,
    title: "Natural Intelligence",
    icon: "mdi:brain",
    description:
      "Encourages thinking, creativity, and problem-solving. Focuses on understanding concepts rather than memorization and builds strong foundations across domains.",
  },
  {
    id: 4,
    title: "Active Engagement",
    icon: "mdi:lightning-bolt-outline",
    description:
      "Promotes interactive learning through tasks and real-world activities. Encourages participation, practice, and hands-on learning experiences.",
  },
  {
    id: 5,
    title: "Community Learning",
    icon: "mdi:account-group-outline",
    description:
      "Builds a collaborative environment through discussions, shared knowledge, and mentorship. Learning grows stronger through collective experience.",
  },
  {
    id: 6,
    title: "Gamified Engagement Loops",
    icon: "mdi:trophy-outline",

    description:
      "Makes learning fun with points, badges, and leaderboards. Motivates consistency, participation, and long-term engagement.",
  },
];
export default whyChooseData;
