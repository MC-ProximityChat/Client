import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

interface ErrorPageProps {
    error: string
}

const useStyles = makeStyles({
    root: {
        fontSize: '14px',
        color: "white",
        fontStyle: "normal",
        marginTop: "40px",
        marginBottom: "30px",
        textAlign:"center"
    },
});

export const ErrorPage: React.FC<ErrorPageProps> = ({error}) => {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.root} variant={'h3'}>{ error }</Typography>
        </div>
    )
}