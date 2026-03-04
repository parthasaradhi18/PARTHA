import { Navbar } from "@/components/ui/navbar";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/ui/footer";

export const metadata = {
    title: "Contact | MPS",
    description: "Get in touch for new opportunities.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-transparent relative overflow-clip selection:bg-red-500/30 text-white">
            <Navbar />
            <ContactSection />
            <Footer />
        </main>
    );
}
