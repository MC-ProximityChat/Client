import React from "react";

interface LinkProps {
    text: string;
    link: string;
}

export const Link: React.FC<LinkProps> = (
    {
        text,
        link
    }
    ) => {
    return (
        <a href={link}>{ text }</a>
    )
}