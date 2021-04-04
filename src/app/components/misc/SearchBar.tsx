import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";

interface SearchBarProps {
    name: string;
    label?: string;
    errorMessage?: string;
    autoFocus: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
    root: {
        background: '#242C37',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 1px 3px 2px #003366',
        color: 'white',
        marginBottom: '50px'
    },
});

export const SearchBar: React.FC<SearchBarProps> = (
    {
        name,
        label,
        errorMessage,
        autoFocus=false,
        onChange,
    }) => {

    const classes = useStyles();

    return (
        <TextField
            className={classes.root}
            variant="filled"
            margin="normal"
            fullWidth
            id="code"
            label={ label }
            name={ name }
            autoComplete={ label }
            autoFocus={ autoFocus }
            onChange = { onChange }
        />
    )
}