"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Calendar } from "lucide-react";

const projectsData = [
  {
    title: "Orchestrix",
    period: "Nov 2024 – present",
    role: "Founder & Lead Developer",
    description: "Developed a modern DevOps management platform to streamline the management of tools like Docker, Ansible, and more. Built with Next.js + shadcn.ui for the front-end and Flask for the back-end.",
    link: "https://github.com/kangwijen/orchestrix",
  },
  {
    title: "KKI-Market",
    period: "Sep 2024 – Nov 2024",
    role: "Founder & Lead Developer",
    description: "Developed a single-page E-commerce web application built with Laravel and Vue.js, using Tailwind CSS for a modern and responsive design. Implemented DevOps practices using GitHub Actions to create CI/CD pipelines that automate testing.",
    link: "https://github.com/kangwijen/kki-market",
  },
  {
    title: "OpenIDX3",
    period: "Mar 2024 – May 2024",
    role: "Founder & Lead Developer",
    description: "Developed an open-source web-based portfolio analysis tool for the Indonesian stock market using Flask and Vue.js. It allows users to manage portfolios, view key metrics, visualize data, and perform advanced analysis, including stock performance, volatility with GARCH models, price predictions using LSTM/ARIMA, and news sentiment analysis with DistilRoBERTa.",
    link: "https://github.com/openidx-team/OpenIDX3",
  },
  {
    title: "Protecc Bot",
    period: "Oct 2023 – Dec 2023",
    role: "Founder & Lead Developer",
    description: "Developed Python-based Discord bot designed to detect and mitigate spam and/or phising messages within a Discord server using models such as Naive Bayes and Random Forest with high accuracy",
    link: "#",
  },
];

export function Projects() {
  return (
    <section className="py-12" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 enhanced-glitch" data-text="projects">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-neon">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.title}
                    </a>
                  </CardTitle>
                  <div className="flex items-center text-neon-muted">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{project.period}</span>
                  </div>
                </div>
                <p className="text-neon-muted">{project.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-neon-muted">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
