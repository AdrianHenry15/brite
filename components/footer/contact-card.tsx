import Link from "next/link";

const ContactCard = () => {
    return (
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link
                href="/contact-us"
                className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
            >
                Contact
            </Link>

            <address className="not-italic text-sm leading-6 text-muted-foreground">
                10130 Mallard Creek Rd.
                <br />
                Suite 300
                <br />
                Charlotte, NC 28262
            </address>

            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <p>
                    <span className="font-medium text-foreground">Office: </span>
                    <Link href="tel:7048423535" className="hover:text-primary hover:underline">
                        704-842-3535
                    </Link>
                </p>

                <p>
                    <span className="font-medium text-foreground">Sales: </span>
                    <Link
                        href="mailto:nick.walker@briteclt.com"
                        className="hover:text-primary hover:underline"
                    >
                        nick.walker@briteclt.com
                    </Link>
                </p>

                <p>
                    <span className="font-medium text-foreground">Other: </span>
                    <Link
                        href="mailto:joey.mckenna@briteclt.com"
                        className="hover:text-primary hover:underline"
                    >
                        joey.mckenna@briteclt.com
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ContactCard;
