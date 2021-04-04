import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

interface ServerNameProps {
    name: string
}

const useStyles = makeStyles({
    style: {
        fontSize: '24px',
        color: "white",
        fontStyle: "normal",
        fontWeight: "bold",
        marginBottom: "50px"
    },
});

export const ServerName: React.FC<ServerNameProps> = ({name}) => {
    const classes = useStyles();
    return (
        <Typography className={classes.style} variant={'h3'}> { name }</Typography>
    )
}