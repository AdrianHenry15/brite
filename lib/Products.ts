import { ProductType } from "./types";

// Exterior Cleaning Images
import ECImage from "../public/assets/imgs/ec-1.jpg";
import ECImage2 from "../public/assets/imgs/ec-3.jpg";
import ECImage3 from "../public/assets/imgs/ec-4.jpg";
import ECImage4 from "../public/assets/imgs/ex-cleaning.png";
import ECImage5 from "../public/assets/imgs/action-1.jpg";
import ECImage6 from "../public/assets/imgs/action-2.jpg";
// Holiday Lighting Images
import HLImage from "../public/assets/imgs/xmas-1.jpg";
// Commercial Services Images
import CSImage from "../public/assets/imgs/action-1.jpg";

export const ExteriorCleaningProducts: ProductType[] = [
    {
        id: "ec-1",
        title: "Exterior Building Cleaning ",
        description: "Brighten Your Home, One Clean at a Time!",
        category: "Exterior Cleaning",
        image: ECImage,
    },
    {
        id: "ec-2",
        title: "Siding Cleaning",
        description: "Revitalize Your Space with a Pristine Shine!",
        category: "Exterior Cleaning",
        image: ECImage2,
    },
    {
        id: "ec-3",
        title: "Window Cleaning",
        description: "Making the Outside Sparkle Like New!",
        category: "Exterior Cleaning",
        image: ECImage3,
    },
    {
        id: "ec-4",
        title: "Pressure Washing",
        description: "Refresh Your Exterior, Elevate Your Curb Appeal!",
        category: "Exterior Cleaning",
        image: ECImage4,
    },
    {
        id: "ec-5",
        title: "Soft Washing",
        description: "Clean Exteriors, Lasting Impressions!",
        category: "Exterior Cleaning",
        image: ECImage5,
    },
    {
        id: "ec-6",
        title: "Fence Cleaning",
        description: "We Bring the Shine Back to Your Property!",
        category: "Exterior Cleaning",
        image: ECImage6,
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
