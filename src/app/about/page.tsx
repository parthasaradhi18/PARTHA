import { Navbar } from "@/components/ui/navbar";
import { AboutSection } from "@/components/sections/about";
import { CoFounderSection } from "@/components/sections/co-founder";
import { EducationSection } from "@/components/sections/education";
import { Footer } from "@/components/ui/footer";

export const metadata = {
    title: "About | MPS",
    description: "About Maddela Partha Saradhi.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-transparent relative overflow-clip selection:bg-red-500/30 text-white pt-10">
            <Navbar />
            <AboutSection />
            <EducationSection />
            <CoFounderSection />
            <Footer />
        </main>
    );
}
