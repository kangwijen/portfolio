import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}
