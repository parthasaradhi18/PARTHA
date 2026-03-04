import dynamic from "next/dynamic";
// Triggering an update for TypeScript Language Server
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero";
import { Footer } from "@/components/ui/footer";

const ProjectsSection = dynamic(() => import("@/components/sections/projects").then(mod => mod.ProjectsSection), {
  loading: () => <div className="h-screen flex items-center justify-center text-white/20">Loading Projects...</div>,
});
const TechStackSection = dynamic(() => import("@/components/sections/tech-stack").then(mod => mod.TechStackSection));
const CoFounderSection = dynamic(() => import("@/components/sections/co-founder").then(mod => mod.CoFounderSection));
const ServicesSection = dynamic(() => import("@/components/sections/services").then(mod => mod.ServicesSection));

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-clip selection:bg-red-500/30 text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <CoFounderSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
