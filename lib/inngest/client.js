import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "SKILL-SPRING", 
  name: "SKILL-SPRING",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});