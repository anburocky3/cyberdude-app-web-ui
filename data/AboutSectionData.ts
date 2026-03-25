import {
  ShieldCheck,
  Brain,
  Activity,
  BadgeCheck,
  AlertCircle,
  BookX,
  ShieldAlert,
  Users,
  User,
  Building2,
  Briefcase,
  Eye,
} from "lucide-react";

const AboutSectionData = {
  pillars: [
    {
      icon: ShieldCheck,
      title: "Strict Accountability",
      desc: "Browser lockdown, full-screen enforcement, and structured progression to eliminate passive learning.",
    },
    {
      icon: Brain,
      title: "Natural Intelligence",
      desc: "Smart rule-based system that detects slowdowns and provides timely hints for better retention.",
    },
    {
      icon: Activity,
      title: "Skill DNA Tracking",
      desc: "Measures grit, consistency, learning velocity, and collaboration beyond traditional scores.",
    },
    {
      icon: BadgeCheck,
      title: "Verified Talent Pipeline",
      desc: "Recruiters access real project work, performance data, and verified skill reports.",
    },
  ],

  problems: [
    {
      icon: AlertCircle,
      title: "Completion Gap",
      desc: "Most learners drop out due to lack of accountability. We enforce discipline like real classrooms.",
    },
    {
      icon: BookX,
      title: "Theory vs Practice",
      desc: "Understanding concepts isn’t enough. We ensure real-world application through projects.",
    },
    {
      icon: ShieldAlert,
      title: "Skill Verification",
      desc: "Certificates can’t prove skill. We provide real performance-based validation.",
    },
    {
      icon: Users,
      title: "Learning Isolation",
      desc: "Online learning feels disconnected. We enable mentorship and collaboration.",
    },
  ],

  audience: [
    {
      icon: User,
      title: "Learners",
      desc: "A structured path to become job-ready with real-world skills.",
    },
    {
      icon: Building2,
      title: "Institutions",
      desc: "Bridge the gap between academic learning and industry needs.",
    },
    {
      icon: Briefcase,
      title: "Recruiters",
      desc: "Hire verified candidates with proven skills and data-backed insights.",
    },
    {
      icon: Eye,
      title: "Guardians",
      desc: "Track progress with transparency and monitor performance.",
    },
  ],
};

export default AboutSectionData;
