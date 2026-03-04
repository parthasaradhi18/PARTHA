import { Navbar } from "@/components/ui/navbar";
import { ProjectsSection } from "@/components/sections/projects";
import { Footer } from "@/components/ui/footer";

export const metadata = {
    title: "Projects | MPS",
    description: "Crafted projects and portfolio.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-transparent relative overflow-clip selection:bg-red-500/30 text-white pt-10">
            <Navbar />
            <ProjectsSection />
            <Footer />
        </main>
    );
}
