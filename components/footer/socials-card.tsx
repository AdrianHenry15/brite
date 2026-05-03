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

export default function SocialsCard() {
    return (
        <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Brite Exterior Cleaning on ${label}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                >
                    <Icon size={22} aria-hidden="true" />
                </Link>
            ))}
        </div>
    );
}
