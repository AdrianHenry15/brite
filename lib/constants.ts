import { NavMenuType } from "./types";

export enum NavMenuItems {
    HOME = "Home",
    WINDOW_CLEANING = "Window Cleaning",
    PRESSURE_WASHING = "Pressure Washing",
    HOLIDAY_LIGHTING = "Holiday Lighting",
}

export enum AltNavMenuItems {
    CONTACT_US = "Contact Us",
    ESTIMATE = "Get Your Free Estimate",
}

export enum NavMenuLinks {
    HOME = "/",
    WINDOW_CLEANING = "/window-cleaning",
    PRESSURE_WASHING = "/pressure-washing",
    HOLIDAY_LIGHTING = "/holiday-lighting",
}

export enum AltNavMenuLinks {
    CONTACT_US = "/contact-us",
    ESTIMATE = "/estimate",
}

export const NavMenu: NavMenuType[] = [
    {
        title: NavMenuItems.HOME,
        link: NavMenuLinks.HOME,
    },
    {
        title: NavMenuItems.WINDOW_CLEANING,
        link: NavMenuLinks.WINDOW_CLEANING,
    },
    {
        title: NavMenuItems.PRESSURE_WASHING,
        link: NavMenuLinks.PRESSURE_WASHING,
    },
    {
        title: NavMenuItems.HOLIDAY_LIGHTING,
        link: NavMenuLinks.HOLIDAY_LIGHTING,
    },
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
    { name: "Christmas Lighting" },
    { name: "Window Cleaning" },
    { name: "Pressure Washing" },
    { name: "Other" },
];

export const FrequencyList = [
    { name: "Once A Year" },
    { name: "Twice A Year" },
    { name: "Quarterly" },
    { name: "Monthly" },
    { name: "Other" },
];
