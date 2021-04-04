import React from "react";

import { BottomNavigation, BottomNavigationAction, Container } from "@material-ui/core";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

    const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {

    }

    const value = "github"

    return (
        <Container>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction label={"GitHub"} value="github" />
            </BottomNavigation>
        </Container>
    )
}