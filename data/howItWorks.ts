export interface HowItWorksStep {
  id: number
  label: string
  title: string
  description: string
}

export const HowItWorksStep: HowItWorksStep[] = [
  {
    id: 1,
    label: "Login",
    title: "Choose your career path",
    description:
      "Login to the site and pick your career path to start learning. If you're unsure, we provide guided recommendations to help you decide."
  },
  {
    id: 2,
    label: "Learn",
    title: "Learn through structured modules",
    description:
      "Learn through handpicked modules and earn points as you progress, unlocking deeper learning paths along the way."
  },
  {
    id: 3,
    label: "Mentorship",
    title: "Get mentor insights",
    description:
      "Connect with mentors to clarify doubts, gain insights, and get real world guidance while learning."
  },
  {
    id: 4,
    label: "Career",
    title: "Achieve your dream role",
    description:
      "Complete your career track and move closer to your aspiring dream job with confidence."
  }
]
