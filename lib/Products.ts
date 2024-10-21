import { ProductType } from "./types";

// Exterior Cleaning Images
import ECImage from "../public/assets/imgs/ec-1.jpg";
// Holiday Lighting Images
import HLImage from "../public/assets/imgs/xmas-1.jpg";
// Commercial Services Images
import CSImage from "../public/assets/imgs/action-1.jpg";

export const ExteriorCleaningProducts: ProductType[] = [
    {
        id: "ec-1",
        title: "Brush Pro",
        description: "Add Description Here",
        category: "Exterior Cleaning",
        image: ECImage,
    },
];

export const HolidayLightingProducts: ProductType[] = [
    {
        id: "hl-1",
        title: "G660, G760, G860",
        description: "Add Description Here",
        category: "Holiday Lighting",
        image: HLImage,
    },
];

export const CommercialServicesProducts: ProductType[] = [
    {
        id: "cs-1",
        title: "Javelin Aer-Aid 1500",
        description: "Add Description Here",
        category: "Commercial Services",
        image: CSImage,
    },
];
