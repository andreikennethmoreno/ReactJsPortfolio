import React from 'react';
import socialLinks from "../../assets/data/personalInfo";

function SocialLinks() {
    return (
        <div>
            {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.svg}
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
