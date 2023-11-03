import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col">
            <Header />
            {children} <Footer />
        </div>
    );
}
