import React from 'react';
import { TextField } from '@material-ui/core';


export default function MyInput(props) {

    const { type, name , label, value, onChange, error=null } = props;
    return (
            <TextField 
                variant="outlined"
                type={type}
                name={name}
                label={label}
                value={value} 
                onChange={onChange}
                {...(error && {error:true, helperText: error})}
            />
    )
}