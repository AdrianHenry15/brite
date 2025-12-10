"use client";

import { deletePromotion } from "@/app/admin/promotions/actions";
import { useTransition } from "react";

export function useDeletePromotion() {
    const [isPending, startTransition] = useTransition();

    function handleDelete(id: string) {
        startTransition(() => {
            deletePromotion(id);
        });
    }

    return { handleDelete, isPending };
}
