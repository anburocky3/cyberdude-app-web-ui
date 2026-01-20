export interface Mentor {
  id: number
  name: string
  role: string
  image: string
}

export interface MentorSectionContent {
  title: string
  description: string
  subDescription: string
  mentors: Mentor[]
}

export const MentorDetails: MentorSectionContent = {
  title: "Who Teaches Our Students",
  description:
    "Our students learn from professionals who actively work in real world engineering roles and understand current industry expectations.",
  subDescription:
    "Each mentor is selected for hands on experience, practical teaching ability, and strong awareness of hiring standards.",
  mentors: [
    {
      id: 1,
      name: "Senior Web Engineer",
      role: "MERN Stack",
      image: "/img/about-mentor/img1.jpg"
    },
    {
      id: 2,
      name: "Product Engineer",
      role: "Full Stack",
      image: "/img/about-mentor/img2.jpg"
    },
    {
      id: 3,
      name: "Tech Lead",
      role: "DevOps",
      image: "/img/about-mentor/img3.jpg"
    },
    {
      id: 4,
      name: "Software Engineer",
      role: "Backend APIs",
      image: "/img/about-mentor/img4.jpg"
    },
  ]
}
