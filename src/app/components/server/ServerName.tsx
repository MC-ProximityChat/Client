import React from "react";
import {Container, makeStyles, Typography} from "@material-ui/core";

interface ServerNameProps {
    name: string
}

const useStyles = makeStyles({
    serverStyle: {
        fontSize: '24px',
        color: "white",
        fontStyle: "normal",
        fontWeight: "bold",
        marginBottom: "50px"
    },
    style: {
        fontSize: '22px',
        color: "white",
        fontStyle: "normal",
        fontWeight: "lighter",
        marginBottom: "50px"
    },
});

export const ServerName: React.FC<ServerNameProps> = ({name}) => {
    const classes = useStyles();
    return (
        <span>
            <Typography className={classes.style} variant={'h3'} component={"span"}> You are connecting to </Typography> <Typography className={classes.serverStyle} variant={'h3'} component={"span"}> { name }</Typography>
            <div style={{marginBottom: "50px"}}> </div>
        </span>
    )
}