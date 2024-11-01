// Unions
export type FAQNav =
    | "Brite"
    | "Exterior Cleaning"
    | "Holiday Lighting"
    | "Trash-Bin Cleaning"
    | "Window Cleaning"
    | "Pressure Washing"
    | "Soft Washing";
export type FAQNavLinks =
    | "#brite"
    | "#exterior-cleaning"
    | "#holiday-lighting"
    | "#trash-bin-cleaning"
    | "#window-cleaning"
    | "#pressure-washing"
    | "#soft-washing";
export type NavMenuItems = "Home" | "Services" | "Our Story" | "FAQs" | "Newsletter";
export type ServiceMenuItems = "Exterior Cleaning" | "Holiday Lighting" | "Commercial Services";
export type ServiceMenuLinks = "/exterior-cleaning" | "/holiday-lighting" | "/commercial-services";
export type AltNavMenuItems = "Contact Us" | "Get Your Free Estimate";
export type NavMenuLinks =
    | "/"
    | "/exterior-cleaning"
    | "/holiday-lighting"
    | "/commercial-services"
    | "/faqs"
    | "/our-story"
    | "/newsletter";
export type AltNavMenuLinks = "/contact-us" | "/estimate";
export type Category =
    | "All Products"
    | "Exterior Cleaning"
    | "Holiday Lighting"
    | "Commercial Services";

// Objects
export type NavMenuType = {
    title: NavMenuItems | ServiceMenuItems | FAQNav | AltNavMenuItems;
    link: "" | NavMenuLinks | ServiceMenuLinks | FAQNavLinks | AltNavMenuLinks;
};

export type FAQItemType = {
    id?: string;
    question: string;
    answer: string;
};

export type ProductType = {
    id: string;
    title: string;
    description: string;
    image: any;
    category: Category;
};
