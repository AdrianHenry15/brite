import React from "react";

const GoogleTagManagerNoScript = () => {
    return (
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-PB6PTR34"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            ></iframe>
        </noscript>
    );
};

export default GoogleTagManagerNoScript;
