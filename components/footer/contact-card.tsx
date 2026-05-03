import Link from "next/link";

export default function ContactCard() {
    return (
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Contact
            </h5>

            <address className="not-italic text-sm leading-6 text-muted-foreground">
                10130 Mallard Creek Rd.
                <br />
                Suite 300
                <br />
                Charlotte, NC 28262
            </address>

            <div className="mt-4 flex flex-col gap-2 text-sm">
                <p>
                    <span className="text-foreground">Office: </span>
                    <Link
                        href="tel:7048423535"
                        className="text-muted-foreground hover:text-primary"
                    >
                        704-842-3535
                    </Link>
                </p>

                <p>
                    <span className="text-foreground">Sales: </span>
                    <Link
                        href="mailto:nick.walker@briteclt.com"
                        className="text-muted-foreground hover:text-primary"
                    >
                        nick.walker@briteclt.com
                    </Link>
                </p>

                <p>
                    <span className="text-foreground">Other: </span>
                    <Link
                        href="mailto:joey.mckenna@briteclt.com"
                        className="text-muted-foreground hover:text-primary"
                    >
                        joey.mckenna@briteclt.com
                    </Link>
                </p>
            </div>
        </div>
    );
}
