import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field; //gives the value of the date picker at any given time
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
//TODO : add a date parser
