import Banner from "@/components/Banner";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col">
            <Header />
            <Banner text="Charlotte, NC's Premiere Christmas, Landscape, and Hardscape Lighting Designer" />
            {children} <Footer />
        </div>
    );
}
