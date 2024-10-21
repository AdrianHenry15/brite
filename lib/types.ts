export type NavMenuType = {
    title: string;
    link: string;
};

export type Category =
    | "All Products"
    | "Exterior Cleaning"
    | "Holiday Lighting"
    | "Commercial Services";

export type ProductType = {
    id: string;
    title: string;
    description: string;
    image: any;
    category: Category;
};
