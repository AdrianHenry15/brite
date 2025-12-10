export const isAdmin = (email: string): boolean => {
    const adminEmails = [
        process.env.NEXT_PUBLIC_ADMIN_JOEY as string,
        process.env.NEXT_PUBLIC_ADMIN_NICK as string,
        process.env.NEXT_PUBLIC_ADMIN_MAUI as string,
        process.env.NEXT_PUBLIC_ADMIN_ADRIAN as string,
    ];

    return adminEmails.includes(email);
};
