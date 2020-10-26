import React from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

export default function DatePicker(props) {

    const { name, label, value, onChange } = props;

    const convertToDefEventParam = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker 
            inputVariant="outlined"
            disableToolbar 
            variant="inline"
            label={label}
            name={name}
            value={value}
            format="MM/dd/yyyy"
            onChange={date => onChange(convertToDefEventParam(name,date))}
        />
    </MuiPickersUtilsProvider>

    )
}