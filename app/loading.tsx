import { Loader } from "@/components/loader";

export default function Loading() {
    return (
        <main
            role="status"
            aria-live="polite"
            aria-label="Loading page content"
            className="fixed inset-0 z-50 flex min-h-dvh w-full items-center justify-center bg-background/90 text-foreground backdrop-blur-sm"
        >
            <Loader />

            <span className="sr-only">Loading...</span>
        </main>
    );
}
