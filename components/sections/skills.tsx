"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Terminal, 
  Globe, 
  Shield, 
  FileSearch, 
  LayoutGrid,
  Cloud,
  GitBranch
} from "lucide-react";

const skillsData = [
  {
    title: "Pentesting Tools",
    icon: <Shield className="w-6 h-6" />,
    skills: ["Kali Linux", "Burp Suite", "Metasploit", "SQLMap", "Nmap"]
  },
  {
    title: "Web Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Bootstrap", "Vue.js", "Tailwind CSS", "Flask", "Express", "Laravel", "Next.js", "TypeScript"]
  },
  {
    title: "Forensic Tools",
    icon: <FileSearch className="w-6 h-6" />,
    skills: ["Volatility3", "FTK Imager", "Autopsy", "Wireshark", "Wazuh", "Snort"]
  },
  {
    title: "Office Tools",
    icon: <LayoutGrid className="w-6 h-6" />,
    skills: ["Microsoft Office 365", "Google Workspace", "Canva", "Trello"]
  },
  {
    title: "Cloud Services",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS: EC2, IAM, S3, Lambda, CloudFront", "DigitalOcean"]
  },
  {
    title: "Programming & Scripting",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Python", "JavaScript/TypeScript", "Bash", "PHP"]
  },
  {
    title: "CI/CD Tools",
    icon: <GitBranch className="w-6 h-6" />,
    skills: ["Git", "GitHub", "GitHub Actions", "Docker", "Ansible", "Jenkins", "Prometheus", "Grafana"]
  },
  {
    title: "Languages",
    icon: <Globe className="w-6 h-6" />,
    skills: ["Indonesian (Native)", "English (Conversational)"]
  },
];

export function Skills() {
  return (
    <section className="py-12" id="skills">
      <div className="flex container flex-row flex-wrap justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 enhanced-glitch" data-text="Skills">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsData.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center space-x-2 text-neon">
                {category.icon}
                <CardTitle className="text-neon">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-neon-muted">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
