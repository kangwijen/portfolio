import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <Stack />
      <Footer />
    </div>
  );
}
