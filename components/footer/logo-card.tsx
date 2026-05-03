import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa6";

import Logo from "@/public/assets/icons/brite-logo.png";

const LogoCard = () => {
    return (
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
                src={Logo}
                width={96}
                height={96}
                alt="Brite Exterior Cleaning logo"
                className="mb-4"
            />

            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                Professional residential and commercial exterior cleaning services in Charlotte, NC.
            </p>

            <p className="mt-4 flex items-center justify-center text-xs text-muted-foreground md:justify-start">
                <FaRegCopyright className="mr-2" aria-hidden="true" />
                <span>2026 Brite Exterior Cleaning</span>
            </p>
        </div>
    );
};

export default LogoCard;
