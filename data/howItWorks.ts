export interface HowItWorksStep {
  id: number
  label: string
  title: string
  illustration: string
  description: string
}

export const HowItWorksStudents: HowItWorksStep[] = [
  {
    id: 1,
    label: "Login",
    title: "Choose your career path",
    illustration: '/img/how-works/login.svg',
    description:
      "Login to the site and pick your career path to start learning. If you're unsure, we provide guided recommendations to help you decide."
  },
  {
    id: 2,
    label: "Learn",
    title: "Learn through structured modules",
    illustration:'/img/how-works/learn.svg',
    description:
      "Learn through handpicked modules and earn points as you progress, unlocking deeper learning paths along the way."
  },
  {
    id: 3,
    label: "Mentorship",
    title: "Get mentor insights",
    illustration:'/img/how-works/mentorship.svg',
    description:
      "Connect with mentors to clarify doubts, gain insights, and get real world guidance while learning."
  },
  {
    id: 4,
    label: "Career",
    title: "Achieve your dream role",
    illustration:'/img/how-works/career.svg',
    description:
      "Complete your career track and move closer to your aspiring dream job with confidence."
  }
]

export const HowItWorksRecruiters: HowItWorksStep[] = [
  {
    id: 1,
    label: "Discover",
    title: "Access job ready candidates",
    illustration:'/img/how-works/discover.svg',
    description:
      "Browse a pool of students actively learning and building skills on the platform, with clear visibility into their chosen career tracks."
  },
  {
    id: 2,
    label: "Evaluate",
    title: "Review verified skills & progress",
    illustration:'/img/how-works/evaluate.svg',
    description:
      "Evaluate candidates based on completed modules, earned points, and real learning progress rather than just resumes."
  },
  {
    id: 3,
    label: "Engage",
    title: "Connect with potential hires",
    illustration:'/img/how-works/engage.svg',
    description:
      "Shortlist candidates and engage directly to discuss roles, expectations, and technical alignment."
  },
  {
    id: 4,
    label: "Hire",
    title: "Hire with confidence",
    illustration:'/img/how-works/hire.svg',
    description:
      "Make informed hiring decisions by selecting candidates who have consistently demonstrated skill growth and commitment."
  }
]

