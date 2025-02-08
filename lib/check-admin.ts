export const isAdmin = (email: string): boolean => {
    const adminEmails = [
        "adrianhenry2115@gmail.com",
        "joey.mckenna@britellc.com",
        "nick.walker@britellc.com",
    ];

    return adminEmails.includes(email);
};
