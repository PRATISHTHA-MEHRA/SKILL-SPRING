import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle, ChevronRight } from "lucide-react";

const roadmapData = [
  { id: 1, title: "Learn Basics of Programming", completed: false },
  { id: 2, title: "Master Data Structures & Algorithms", completed: false },
  { id: 3, title: "Build Small Projects", completed: false },
  { id: 4, title: "Learn a Framework or Tech Stack", completed: false },
  { id: 5, title: "Apply for Internships", completed: false },
];

export default function RoadmapProvider() {
  const [roadmap, setRoadmap] = useState(roadmapData);
  const completedSteps = roadmap.filter((step) => step.completed).length;
  const progress = (completedSteps / roadmap.length) * 100;

  const toggleCompletion = (id) => {
    setRoadmap((prev) =>
      prev.map((step) =>
        step.id === id ? { ...step, completed: !step.completed } : step
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Career Roadmap</h2>
      <Progress value={progress} className="mb-4" />
      <div className="space-y-4">
        {roadmap.map((step) => (
          <Card key={step.id} className="flex justify-between items-center p-4">
            <CardContent className="flex items-center gap-2 w-full">
              <CheckCircle
                className={`cursor-pointer ${step.completed ? 'text-green-500' : 'text-gray-400'}`}
                onClick={() => toggleCompletion(step.id)}
              />
              <span className={step.completed ? "line-through text-gray-500" : ""}>{step.title}</span>
            </CardContent>
            <Button variant="outline" size="sm" disabled={step.completed}>
              <ChevronRight size={16} />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
