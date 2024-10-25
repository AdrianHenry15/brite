import { ProductType } from "./types";

// Exterior Cleaning Images
import ECImage from "../public/assets/imgs/ec-1.jpg";
import ECImage2 from "../public/assets/imgs/ec-3.jpg";
import ECImage3 from "../public/assets/imgs/ec-4.jpg";
import ECImage4 from "../public/assets/imgs/ex-cleaning.png";
import ECImage5 from "../public/assets/imgs/action-1.jpg";
// Holiday Lighting Images
import HLImage from "../public/assets/imgs/xmas-1.jpg";
import HLImage2 from "../public/assets/imgs/xmas-2.jpg";
import HLImage3 from "../public/assets/imgs/christmas-lights-home.jpg";
import HLImage4 from "../public/assets/imgs/christmas-lights.jpg";
// Commercial Services Images
import CSImage from "../public/assets/imgs/action-3.jpg";
import CSImage2 from "../public/assets/imgs/action-4.jpg";
import CSImage3 from "../public/assets/imgs/pw-3.jpg";
import CSImage4 from "../public/assets/imgs/action-2.jpg";
import CSImage5 from "../public/assets/imgs/pw-2.jpg";
import CSImage6 from "../public/assets/imgs/pw.jpg";
import CSImage7 from "../public/assets/imgs/pressure-washing.jpg";

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
];

export const HolidayLightingProducts: ProductType[] = [
    {
        id: "hl-1",
        title: "Holiday Lighting",
        description: "Festive holiday lighting by Brite for homes and businesses",
        category: "Holiday Lighting",
        image: HLImage,
    },
    {
        id: "hl-2",
        title: "Custom Design and Installation",
        description: "Lighting Up Your Holidays, One Sparkle at a Time!",
        category: "Holiday Lighting",
        image: HLImage2,
    },
    {
        id: "hl-4",
        title: "Tree and Shrub Lighting",
        description: "Brightening Your Season with Dazzling Displays!",
        category: "Holiday Lighting",
        image: HLImage3,
    },
    {
        id: "hl-5",
        title: "Roofline Lighting",
        description: "Make Your Holidays Shine Brighter!",
        category: "Holiday Lighting",
        image: HLImage4,
    },
];

export const CommercialServicesProducts: ProductType[] = [
    {
        id: "cs-1",
        title: "Commercial Services",
        description: "Keep your business space clean, professional and welcoming",
        category: "Commercial Services",
        image: CSImage,
    },
    // {
    //     id: "cs-2",
    //     title: "Pressure Washing",
    //     description: "High-powered cleaning for exterior surfaces",
    //     category: "Commercial Services",
    //     image: CSImage2,
    // },
    {
        id: "cs-3",
        title: "Window Cleaning",
        description: "Professional window washing for a streak-free shine",
        category: "Commercial Services",
        image: CSImage3,
    },
    {
        id: "cs-4",
        title: "Sanitation & Disinfection",
        description: "Deep cleaning for health and safety compliance",
        category: "Commercial Services",
        image: CSImage4,
    },
    // {
    //     id: "cs-5",
    //     title: "Floor Care",
    //     description: "Specialized services like polishing, waxing, and carpet cleaning",
    //     category: "Commercial Services",
    //     image: CSImage5,
    // },
];
