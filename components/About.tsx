'use client'

import { Card } from "@/components/ui/card"
import { skills } from "@/data/index"

export default function SkillsSection() {
  
  return (
    <section className="min-h-screen bg-[#0a0118] text-white py-14 px-4" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-purple">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-4 gap-6">
          {skills.map(({ category, items, gridClass }) => (
            <Card 
              key={category} 
              className={`group p-6 bg-[#0f0926] border-[#2a1f62] hover:bg-[#150f35] transition-colors ${gridClass}`}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400 group-hover:text-purple-300">
                {category}
              </h3>
              <div className={`grid gap-4 ${category === "Backend Development" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"}`}>
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 rounded-lg transition-colors"
                  >
                    <span className={`text-lg font-mono ${skill.color || 'text-white'}`} aria-hidden="true">
                      {skill.icon}
                    </span>
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

