import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from '../components/useForm';
import Controls from '../components/controls/Controls'

const initialFormValues = {
    email:'test@test.com',
    password:'123',
    confirmPassword:'123',
    dob:new Date(),
    phoneNumber:'1234567890'
}

export default function RegisterForm(){

    const validate = (fieldValues = values) => {
      let temp = {}
      if('email' in fieldValues) {
        temp.email = values.email ? ((/.+@.+..+/).test(values.email)? "" : "Please enter a valid email id") : "Email is required";
      }
      if('password' in fieldValues) {
        temp.password = values.password ? "" : "Password is required";
      }
      if('confirmPassword' in fieldValues) {
        temp.confirmPassword = values.confirmPassword ? 
          (((values.password && values.confirmPassword) && (values.password === values.confirmPassword))? "" 
          : "Password & Confirm password doesn't match") : "Confirm password is required" ;
      }
      if('phoneNumber' in fieldValues) {
        temp.phoneNumber = values.phoneNumber.length === 10 ? "" : "Phone number should be minimum 10 digits";
      }
      setErrors({
          ...temp
        })
      return Object.values(temp).every(x => x === "");
    }

    const {
        values,
        // setValues,
        errors,
        setErrors,
        handleInputChange
      } = useForm(initialFormValues);
 
    const handleSubmit = e => {
      e.preventDefault();
      
      if(validate()){
        alert('Success !');
      }
    }

    return(

        <Form onSubmit={handleSubmit}>
            <br></br>
              <Grid container>
                  <Grid item xs={6}>
                  <Controls.Input 
                    name='email'
                    label='Email'
                    type="text"
                    value={values.email} 
                    onChange={handleInputChange}
                    error={errors.email}
                  />

                  <Controls.Input 
                    type='text'
                    name='password'
                    label='Password'
                    value={values.password} 
                    onChange={handleInputChange} 
                    error={errors.password} 
                  />

                  <Controls.Input 
                    type='text'
                    name='confirmPassword'
                    label='Confirm Password'
                    value={values.confirmPassword} 
                    onChange={handleInputChange}
                    error={errors.confirmPassword}
                  />
                  
                  <Controls.DatePicker 
                      name='dob'
                      label='Date of Birth'
                      value={values.dob} 
                      onChange={handleInputChange}
                    />
                    <Controls.Input 
                      name='phoneNumber'
                      label='Phone Number'
                      value={values.phoneNumber} 
                      onChange={handleInputChange}
                      error={errors.phoneNumber}
                    />
                    <div>
                      <Controls.Button
                        type="Submit"
                        text="Submit"
                      />
                    </div>
    <p></p>
                    <p>
                      { JSON.stringify(values, null, 2)}
                    </p>
                  </Grid>
              </Grid>    

        </Form>
    )

}