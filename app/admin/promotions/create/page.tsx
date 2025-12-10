import PromotionForm from "../components/promotion-form";

export default function CreatePromotionPage() {
    return (
        <div className="max-w-2xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Create Promotion</h1>

            <PromotionForm />
        </div>
    );
}
