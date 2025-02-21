import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Professional Onboarding",
    description: "Share your industry and expertise for personalized guidance",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Craft Your Documents",
    description: "Create ATS-optimized resumes and compelling cover letters",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Personalized Career Roadmap",
    description:
      "AI generates a step-by-step plan tailored to your skills, education, and career goals.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Smart Job Role Suggestions",
    description: "AI recommends jobs that align with your strengths, interests, and industry trends.",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];
