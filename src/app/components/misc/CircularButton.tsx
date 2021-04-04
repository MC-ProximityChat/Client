import React from "react";
import { Button, makeStyles} from "@material-ui/core";

interface CircularButtonProps {
    title: string;
    onClick: () => void;
}

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(60deg, #3a1c71   30%, #185a9d  80%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 2px 5px 3px #191970',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});


export const CircularButton: React.FC<CircularButtonProps> = ({
    title,
    onClick,
    }) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.root}
            variant={ "contained" }
            color="secondary"
            onClick={ onClick }
        >
            { title }
        </Button>
    )
}