export const NavMenuItems: NavMenu[] = [
    {
        title: "Exterior Cleaning",
        link: "/exterior-cleaning",
    },
    {
        title: "Landscape Lighting",
        link: "/landscape-lighting",
    },
    {
        title: "Christmas Lighting",
        link: "/christmas-lighting",
    },
];
export const NavMenuAltItems: NavMenu[] = [
    {
        title: "Contact Us",
        link: "/contact-us",
    },
    {
        title: "Get Your Free Estimate",
        link: "/estimate",
    },
];
export type NavMenu = {
    title: string;
    link: string;
};
