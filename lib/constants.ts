import { NavMenuType } from "./types";

export enum FAQNav {
    BRITE = "Brite",
    EXTERIOR_CLEANING = "Exterior Cleaning",
    HOLIDAY_LIGHTING = "Holiday Lighting",
    TRASH_BIN_CLEANING = "Trash-Bin Cleaning",
    WINDOW_CLEANING = "Window Cleaning",
    PRESSURE_WASHING = "Pressure Washing",
    SOFT_WASHING = "Soft Washing",
}

export enum FAQNavLinks {
    BRITE = "#brite",
    EXTERIOR_CLEANING = "#exterior-cleaning",
    HOLIDAY_LIGHTING = "#holiday-lighting",
    TRASH_BIN_CLEANING = "#trash-bin-cleaning",
    WINDOW_CLEANING = "#window-cleaning",
    PRESSURE_WASHING = "#pressure-washing",
    SOFT_WASHING = "#soft-washing",
}

export enum NavMenuItems {
    HOME = "Home",
    EXTERIOR_CLEANING = "Exterior Cleaning",
    HOLIDAY_LIGHTING = "Holiday Lighting",
    FAQS = "FAQs",
    ABOUT_US = "About Us",
}

export enum AltNavMenuItems {
    CONTACT_US = "Contact Us",
    ESTIMATE = "Get Your Free Estimate",
}

export enum NavMenuLinks {
    HOME = "/",
    EXTERIOR_CLEANING = "/exterior-cleaning",
    HOLIDAY_LIGHTING = "/holiday-lighting",
    // FAQS = "/faqs",
    // ABOUT_US = "/about-us",
}

export enum AltNavMenuLinks {
    CONTACT_US = "/contact-us",
    ESTIMATE = "/estimate",
}

export const FAQNavMenu: NavMenuType[] = [
    {
        title: FAQNav.BRITE,
        link: FAQNavLinks.BRITE,
    },
    {
        title: FAQNav.EXTERIOR_CLEANING,
        link: FAQNavLinks.EXTERIOR_CLEANING,
    },
    {
        title: FAQNav.HOLIDAY_LIGHTING,
        link: FAQNavLinks.HOLIDAY_LIGHTING,
    },
    {
        title: FAQNav.PRESSURE_WASHING,
        link: FAQNavLinks.PRESSURE_WASHING,
    },
    {
        title: FAQNav.SOFT_WASHING,
        link: FAQNavLinks.SOFT_WASHING,
    },
    {
        title: FAQNav.TRASH_BIN_CLEANING,
        link: FAQNavLinks.TRASH_BIN_CLEANING,
    },
    {
        title: FAQNav.WINDOW_CLEANING,
        link: FAQNavLinks.WINDOW_CLEANING,
    },
];

export const NavMenu: NavMenuType[] = [
    {
        title: NavMenuItems.HOME,
        link: NavMenuLinks.HOME,
    },
    {
        title: NavMenuItems.EXTERIOR_CLEANING,
        link: NavMenuLinks.EXTERIOR_CLEANING,
    },
    {
        title: NavMenuItems.HOLIDAY_LIGHTING,
        link: NavMenuLinks.HOLIDAY_LIGHTING,
    },
    // {
    //     title: NavMenuItems.FAQS,
    //     link: NavMenuLinks.FAQS,
    // },
    // {
    //     title: NavMenuItems.ABOUT_US,
    //     link: NavMenuLinks.ABOUT_US,
    // },
];
export const AltNavMenu: NavMenuType[] = [
    {
        title: AltNavMenuItems.CONTACT_US,
        link: AltNavMenuLinks.CONTACT_US,
    },
    {
        title: AltNavMenuItems.ESTIMATE,
        link: AltNavMenuLinks.ESTIMATE,
    },
];

export const ServicesList = [
    { name: "None" },
    { name: "Window Cleaning" },
    { name: "Pressure Washing" },
    { name: "House Wash" },
    { name: "Roof Wash" },
    { name: "Holiday Lighting" },
    { name: "Other" },
];

export const FrequencyList = [
    { name: "Once A Year" },
    { name: "Twice A Year" },
    { name: "Quarterly" },
    { name: "Monthly" },
    { name: "Other" },
];
