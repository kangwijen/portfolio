"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const awardsData = [
  {
    title: "2nd Place GKSK#8 OSINTATHON CTF",
    organization: "ITB STIKOM Bali",
    date: "May 2024",
  },
  {
    title: "Finalist Hology 6.0 CTF",
    organization: "Universitas Brawijaya",
    date: "Oct 2023",
  },
  {
    title: "1st Place Hack Today CTF 2023",
    organization: "IPB University",
    date: "Sep 2023",
  },
];

export function Awards() {
  return (
    <section className="py-12" id="awards">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-center mb-8 enhanced-glitch"
          data-text="Awards"
        >
          Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsData.map((award, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-neon" />
                  <CardTitle className="glowing-hacker-text text-lg">
                    {award.title}
                  </CardTitle>
                </div>
                <div className="flex flex-col text-neon-muted text-sm">
                  <span>{award.organization}</span>
                  <span>{award.date}</span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
