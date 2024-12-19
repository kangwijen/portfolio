"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiWordpress } from "react-icons/si";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const titles = useMemo(() => [
    "Cyber Security Enthusiast",
    "Web Developer",
    "OSINT Enthusiast",
  ], []);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const updateText = () => {
      if (!isDeleting) {
        setDisplayText((current) =>
          currentTitle.substring(0, current.length + 1),
        );
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText((current) =>
          currentTitle.substring(0, current.length - 1),
        );
        if (displayText === "") {
          setIsDeleting(false);
          setTitleIndex((current) => (current + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(updateText, isDeleting ? 25 : 50);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  return (
    <section className="pt-8 md:pt-24 pb-8" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src="/portfolio/hero.jpg"
            alt="Hero image"
            width={500}
            height={500}
            className="w-48 h-48 rounded-full shadow-lg mb-4 md:mb-0"
          />
          <div className="md:w-2/3 text-center md:text-left pl-0 md:pl-8">
            <h1
              className="text-4xl font-bold enhanced-glitch mb-4"
              data-text="Anthony Sai Richardo"
            >
              Anthony Sai Richardo
            </h1>
            <h2 className="text-2xl glowing-hacker-text mb-4">
              {displayText}
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-lg text-neon mb-4 text-pretty">
              Active cyber security undergraduate from BINUS University with a
              strong passion for self-learning and a deep interest in Open
              Source Intelligence (OSINT), digital forensics, cloud, artificial
              intelligence, and computer networking.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button asChild variant="outline" className="text-neon">
                <Link href="https://github.com/kangwijen" target="_blank">
                  <SiGithub /> GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-neon">
                <Link
                  href="https://www.linkedin.com/in/anthony-sai-richardo-346061235/"
                  target="_blank"
                >
                  <SiLinkedin /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-neon">
                <Link href="https://www.anthonysr.my.id/" target="_blank">
                  <SiWordpress /> Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
