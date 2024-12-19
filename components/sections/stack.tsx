import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiShadcnui, SiRadixui } from 'react-icons/si';

export function Stack() {
  const technologies = [
    { icon: <SiReact className="w-6 h-6" />, name: 'React' },
    { icon: <SiNextdotjs className="w-6 h-6" />, name: 'Next.js' },
    { icon: <SiRadixui className="w-6 h-6" />, name: 'Radix UI' },
    { icon: <SiShadcnui className="w-6 h-6" />, name: 'shadcn/ui' },
    { icon: <SiTailwindcss className="w-6 h-6" />, name: 'Tailwind CSS' },
    { icon: <SiNodedotjs className="w-6 h-6" />, name: 'Node.js' },
  ];

  return (
    <section className="py-16">
      <h2 className="text-xl font-bold text-center mb-8 text-neon">Built with love using</h2>
      <div className="grid grid-cols-2 md:grid-cols-auto gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-neon">
            {tech.icon}
            <span className="text-sm text-neon">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
