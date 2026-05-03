import { Metadata } from "next";

import { Promotion } from "@/sanity.types";
import { getAllPromotions } from "@/sanity/lib/promotions/getAllPromotions";
import PromotionList from "./components/promotion-list";

export const metadata: Metadata = {
    title: "Exterior Cleaning Promotions | Brite Exterior Cleaning",
    description:
        "View current exterior cleaning promotions, seasonal discounts, and special offers from Brite Exterior Cleaning in Charlotte, NC.",

    alternates: {
        canonical: "/promotions",
    },

    openGraph: {
        title: "Exterior Cleaning Promotions | Brite Exterior Cleaning",
        description:
            "Explore active and upcoming promotions for pressure washing, soft washing, window cleaning, gutter cleaning, and exterior cleaning services.",
        url: "/promotions",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Exterior Cleaning Promotions | Brite Exterior Cleaning",
        description:
            "Save on professional exterior cleaning services with current promotions and seasonal offers from Brite Exterior Cleaning.",
    },

    robots: {
        index: true,
        follow: true,
    },

    keywords: [
        "Brite Exterior Cleaning promotions",
        "exterior cleaning deals Charlotte NC",
        "pressure washing specials",
        "soft washing promotions",
        "window cleaning discounts",
        "gutter cleaning specials",
        "Charlotte exterior cleaning offers",
    ],
};

export default async function PromotionsPage() {
    const promotions = await getAllPromotions();

    const sortByDate = (a: Promotion, b: Promotion) =>
        new Date(a.startDate ?? "").getTime() - new Date(b.startDate ?? "").getTime();

    const activePromotions = promotions
        .filter((promotion: Promotion) => promotion.status === "active")
        .sort(sortByDate);

    const upcomingPromotions = promotions
        .filter((promotion: Promotion) => promotion.status === "upcoming")
        .sort(sortByDate);

    const expiredPromotions = promotions
        .filter((promotion: Promotion) => promotion.status === "expired")
        .sort(sortByDate);

    return (
        <main className="min-h-screen w-full bg-background text-foreground">
            <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Special Offers
                    </p>

                    <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Current Promotions
                    </h1>

                    <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                        Browse active, upcoming, and previous offers from Brite Exterior Cleaning.
                    </p>
                </header>

                <div className="rounded-3xl border border-border bg-card p-4 text-card-foreground shadow-xl shadow-primary/10 sm:p-6 lg:p-8">
                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-primary">
                            Active Promotions
                        </h2>
                        <PromotionList promotions={activePromotions} />
                    </section>

                    <section className="mb-10 border-t border-border pt-10">
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
                            Upcoming Promotions
                        </h2>
                        <PromotionList promotions={upcomingPromotions} />
                    </section>

                    <section className="border-t border-border pt-10">
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-muted-foreground">
                            Expired Promotions
                        </h2>
                        <PromotionList promotions={expiredPromotions} />
                    </section>
                </div>
            </section>
        </main>
    );
}
