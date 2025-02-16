import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";

export const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "User Profile Setup",
    description:
      "Input Skills, education, experience, interests, career goals and get AI-generated career path suggestions based on the profile."

  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Roadmap Provider",
    description:
      "Receive a personalized career roadmap with step-by-step guidance to reach your career goals.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Industry Insights",
    description:
      "Get AI-driven analysis of job trends, in-demand skills, and career opportunities in your field.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Resume Creation",
    description: "Generate professional, tailored resumes optimized for industry standards.",
  },

  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Skill Gap Analysis & Learning Recommendations",
    description: "AI analyzes skill gaps and suggests online courses.",
  }
];
