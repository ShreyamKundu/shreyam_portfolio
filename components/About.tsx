"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Download } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
  SiJavascript,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiPrometheus,
} from "react-icons/si";

export default function AboutSection() {
  const [webDevStack] = useState([
    { name: "React", icon: <SiReact className="h-6 w-6 text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-6 w-6 text-[#3178C6]" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="h-6 w-6 text-[#339933]" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="h-6 w-6 text-[#4169E1]" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="h-6 w-6 text-[#06B6D4]" />,
    },
    { name: "GraphQL", icon: <SiGraphql className="h-6 w-6 text-[#E10098]" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-6 w-6 text-[#F7DF1E]" />,
    },
  ]);

  const [devOpsStack] = useState([
    { name: "Docker", icon: <SiDocker className="h-6 w-6 text-[#2496ED]" /> },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="h-6 w-6 text-[#326CE5]" />,
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions className="h-6 w-6 text-[#2088FF]" />,
    },
    {
      name: "Terraform",
      icon: <SiTerraform className="h-6 w-6 text-[#7B42BC]" />,
    },
    { name: "Ansible", icon: <SiAnsible className="h-6 w-6 text-[#EE0000]" /> },
    { name: "Jenkins", icon: <SiJenkins className="h-6 w-6 text-[#D24939]" /> },
    {
      name: "Prometheus",
      icon: <SiPrometheus className="h-6 w-6 text-[#E6522C]" />,
    },
  ]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 p-6 rounded-xl shadow-lg border border-[#131b36]">
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a passionate full-stack developer with a love for creating
              efficient, scalable, and user-friendly web applications. With a
              strong foundation in modern web technologies, I strive to build
              innovative solutions that make a positive impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans both front-end and back-end development,
              allowing me to craft comprehensive solutions from concept to
              deployment. I&apos;m always eager to take on new challenges and expand
              my skill set in this ever-evolving field.
            </p>
            <Button
              size="lg"
              className="mt-6 rounded text-white border-0 transition-all duration-300"
              style={{
                background: "linear-gradient(to right, #3B82F6, #8B5CF6)", // Tailwind gradient colors
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #2563EB, #7C3AED)"; // hover gradient
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #3B82F6, #8B5CF6)"; // revert to original gradient
              }}
            >
              <Download className="mr-2 h-5 w-5" /> Resume
            </Button>
          </div>
          <div className="p-6 rounded-lg shadow-lg border border-[#0a1a4d]">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">
              My Tech Stack
            </h3>
            <Tabs defaultValue="webdev" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#020933]">
                <TabsTrigger 
                  value="webdev"
                  className="data-[state=active]:bg-[#0a1a4d] data-[state=active]:text-white text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </TabsTrigger>
                <TabsTrigger 
                  value="devops"
                  className="data-[state=active]:bg-[#0a1a4d] data-[state=active]:text-white text-gray-300 hover:text-white transition-colors"
                >
                  DevOps
                </TabsTrigger>
              </TabsList>
              <TabsContent value="webdev">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {webDevStack.map((tech, index) => (
                    <Card key={index} className="bg-[#020933] border-0 overflow-hidden">
                      <CardContent className="p-2 flex flex-col items-center justify-center">
                        <div className="mb-1">{tech.icon}</div>
                        <Badge variant="secondary" className="bg-[#041146] text-gray-300 text-xs px-1.5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                          {tech.name}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="devops">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {devOpsStack.map((tech, index) => (
                    <Card key={index} className="bg-[#020933] border-0 overflow-hidden">
                      <CardContent className="p-2 flex flex-col items-center justify-center">
                        <div className="mb-1">{tech.icon}</div>
                        <Badge variant="secondary" className="bg-[#041146] text-gray-300 text-xs px-1.5 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                          {tech.name}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
