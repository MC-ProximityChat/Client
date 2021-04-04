import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

interface TitleProps {
    title: string;
}

const useStyles = makeStyles({
    titleStyle: {
        fontSize: '86px',
        color: "white",
        fontStyle: "normal",
        marginTop: "40px",
        marginBottom: "30px"
    },
});

export const Title: React.FC<TitleProps> = ({title}) => {
    const classes = useStyles();
    return (
        <Typography className={classes.titleStyle} variant="h1">
            { title }
        </Typography>
    )
}