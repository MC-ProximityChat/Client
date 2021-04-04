import React from "react";

interface LoadingScreenProps {
    steps: LoadingStep[]
}

export type LoadingStep = {
    text?: string
}

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
    let loadingStepIndex = 0

    return (
        <div>

        </div>
    )
}