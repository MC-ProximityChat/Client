import React from "react";

interface CircularButtonProps {
    title: string;
    onClick: () => void;
}


export const CircularButton: React.FC<CircularButtonProps> = ({
    title,
    onClick,
    }) => {
    return (
        <button>
            title={title}
            onClick={onClick}
        </button>
    )
}