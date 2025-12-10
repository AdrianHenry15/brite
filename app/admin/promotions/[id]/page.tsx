import { client } from "@/sanity/lib/client";
import PromotionForm from "../components/promotion-form";

export default async function EditPromotionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const promotion = await client.fetch(`*[_type == "promotion" && _id == $id][0]`, {
        id,
    });

    return (
        <div>
            <PromotionForm promotion={promotion} />
        </div>
    );
}
