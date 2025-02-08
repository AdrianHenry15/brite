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
export type NavMenuItems = "Home" | "Services" | "Our Story" | "FAQs" | "Careers";
export type ServiceMenuItems = "Exterior Cleaning" | "Holiday Lighting" | "Commercial Services";
export type ServiceMenuLinks =
    | "/services/exterior-cleaning"
    | "/services/holiday-lighting"
    | "/services/commercial-services";
export type AltNavMenuItems = "Contact Us" | "Get Your Free Estimate";
export type NavMenuLinks =
    | "/"
    | "/exterior-cleaning"
    | "/holiday-lighting"
    | "/commercial-services"
    | "/faqs"
    | "/our-story"
    | "/careers";
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

export type JobOpeningsType = {
    id: number;
    title: string;
    location: string;
    description: string;
};

export type TestimonialsType = {
    name: string;
    role: string;
    testimonial: string;
};
