import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '&  .MuiFormControl-root': {
        margin: theme.spacing(1),
        width: '80%',
      },
    },
  }));

export function useForm(initialFormValues) {

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}


export function Form(props) {
    const classes = useStyles();
    const {children,...other} = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}