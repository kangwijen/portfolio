"use client";

import Link from "next/link";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12 p-6 justify-between items-center max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="flex w-full justify-center md:justify-start glowing-hacker-text"
        >
          <span className="font-mono text-xl font-bold">Anthony SR</span>
        </Link>

        <div className="flex items-center space-x-4">
          <nav className="items-center space-x-6 text-sm font-medium hidden md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 glowing-hacker-text hover:text-green-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="h-[2px] bg-green-500" />
    </header>
  );
}
