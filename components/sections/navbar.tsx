"use client"

import * as React from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-12 p-4 justify-between items-center">
            <Link href="/" className="flex w-full justify-center md:justify-start text-green-400">
                <span className="font-mono text-xl font-bold">
                    <span className="text-green-500">&gt;</span> Anthony SR
                </span>
            </Link>

            <div className="flex items-center space-x-4">
                <nav className="items-center space-x-6 text-sm font-medium hidden md:flex">
                    {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="transition-colors hover:text-foreground/80 text-green-400 hover:text-green-600"
                    >
                        {item.name}
                    </Link>
                    ))}
                </nav>
            </div>
        </div>
        <div className="h-[2px] bg-green-500" />
    </header>
  )
}