export interface SanityBase {
    _id: string;
    _type: string;
    _createdAt?: string;
    _updatedAt?: string;
    _rev?: string;
}

export interface SanityUser extends SanityBase {
    _type: "user";
    userId: string; // Clerk userId
    fullName?: string;
    email?: string;
    imageUrl?: string;
    role?: "admin" | "user";
    createdAt?: string;
}

export interface Author extends SanityBase {
    _type: "author";
    userId: string;
    name: string;
    image?: {
        asset: {
            _ref: string;
        };
    };
    bio?: string;
}

export interface Blog extends SanityBase {
    _type: "blog";
    title: string;
    slug: { current: string };
    publishedAt?: string;
    mainImage?: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
    excerpt?: string;
    body?: Array<
        | {
              _type: "block";
              style: string;
              children: Array<{
                  _type: "span";
                  text: string;
              }>;
          }
        | {
              _type: "image";
              asset: {
                  _ref: string;
                  _type: "reference";
              };
          }
    >;
    author: {
        _ref: string;
        _type: "reference";
    };

    // Added field (not in schema but required)
    userId: string;
}

export interface Promotion extends SanityBase {
    _type: "promotion";
    userId: string;
    title: string;
    slug: { current: string };
    description?: string;
    discountPercentage?: number;
    startDate: string;
    endDate: string;
    icon?: "sparkle" | "star" | "discount" | "gift";
    status?: "upcoming" | "active" | "expired";
}

export interface JobOpening extends SanityBase {
    _type: "job";
    userId: string;
    title: string;
    slug: { current: string };
    location?: string;
    excerpt?: string;
    body?: Array<any>;
    publishedAt?: string;
}

export interface Resume extends SanityBase {
    _type: "resume";
    userId: string;
    slug?: { current: string };
    resumeFile: {
        asset: {
            _ref?: string;
            url?: string;
            size?: number;
            originalFilename?: string;
        };
    };
    uploadedAt?: string;
}

export interface Application extends SanityBase {
    _type: "application";
    userId: string;
    job?: { _ref: string };
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    publishedAt?: string;
}

export type SanityDocumentTypes =
    | SanityUser
    | Author
    | Blog
    | Promotion
    | JobOpening
    | Resume
    | Application;
