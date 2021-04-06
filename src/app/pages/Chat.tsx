import React from "react";
import {makeStyles} from "@material-ui/core";

interface ChatProps {
}

const useStyles = makeStyles({
    root: {},
});

export const Chat: React.FC<ChatProps> = () => {
    const classes = useStyles();
    return (
        <div>

        </div>
    )
}