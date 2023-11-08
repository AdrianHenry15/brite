export interface IEstimateStore {
    services: [];
    frequency: Frequency;
    location: string;
    building: Building;
    contact: Contact;
    serviceUrgency: string;
    referralSource: string;
    extraDetails: string;
}

interface Contact {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    serviceAddress: Address;
}

interface Address {
    street: string;
    city: string;
    state: string;
}

export enum Services {
    WINDOW_CLEANING = "Window Cleaning",
    PRESSURE_WASHING = "Pressure Washing",
    HOUSE_WASHING = "House Washing",
    ROOF_WASHING = "Roof Washing",
    GUTTER_CLEANING = "Gutter Cleaning",
    LANDSCAPE_LIGHTING = "Landscape Lighting",
    HOLIDAY_LIGHTING = "Holiday Lighting",
    OTHER = "Other",
}

export enum Frequency {
    FOUR_ANN = "4x a Year/ Quarterly",
    THREE_ANN = "3x a Year",
    TWO_ANN = "2x a Year",
    ANN = "1x a Year",
    MONTHLY = "Monthly",
    ONCE = "Once",
}

export enum Building {
    RESIDENTIAL,
    COMMERCIAL,
    NONE,
}
