import Link from "next/link";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/britelightingllc",
        icon: AiFillFacebook,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/briteclt/",
        icon: AiOutlineInstagram,
    },
];

const SocialsCard = () => {
    return (
        <div className="flex items-center justify-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Brite Exterior Cleaning on ${label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                    <Icon size={21} aria-hidden="true" />
                </Link>
            ))}
        </div>
    );
};

export default SocialsCard;
