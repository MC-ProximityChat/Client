import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

interface DescriptionTextProps {
}

const descriptionText = "Please type the code sent to you from the server in the field below..."

const useStyles = makeStyles({
    root: {
        fontSize: '14px',
        color: "white",
        fontStyle: "normal",
        marginTop: "40px",
        marginBottom: "30px"
    },
});

export const DescriptionText: React.FC<DescriptionTextProps> = () => {
    const classes = useStyles();

    return (
        <Typography className={classes.root} variant={'caption'}>
            { descriptionText }
        </Typography>
    )
}